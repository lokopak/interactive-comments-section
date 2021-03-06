import { formatDate } from '@angular/common';
import { Inject, Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { share } from 'rxjs/operators';
import { APP_WINDOW } from 'src/app/app.options';
import { IComment, IUser } from '../comment';
import { COMMENTS_TABLE_NAME, COMMENT_DATE_FORMAT, COMMENT_LOCALE } from '../comment.config';
import { TempData } from '../data/comments';
import { IServerResponse } from './comment-service.interface';
import { CommentService } from './comment.service';

/**
 * This service is used to manage local storage as a backend.
 * Its function is handle communications with the backend
 * in every actions related with comments. Create, update,
 * delete, edit, etc...
 *
 * @export
 * @class OfflineCommentService
 * @extends {CommentService}
 * @implements {OnInit}
 */
@Injectable()
export class OfflineCommentService extends CommentService {

  /**
   * We'll store all comments in the local storage
   *
   * @private
   * @type {Storage}
   */
  private _storage: Storage;

  /**
   * Since access to the comment list is local, this
   * subject acts as a server by sending the new content
   * of the comment list when it changes due to adding,
   * deleting or editing a comment.
   *
   * @private
   * @type {BehaviorSubject<IComment[]>}
   */
  private _subject: BehaviorSubject<IServerResponse> = new BehaviorSubject<IServerResponse>({items: []});

  /**
   * Comment counter used to generate the identifier for
   * the new comments that are added. It acts as a substitute
   * for the database id generator.
   *
   * @private
   * @static
   */
  private _currentId = 0;

  /**
   * List of comments loaded from the local storage.
   *
   * @private
   * @type {IComment[]}
   * @memberof OfflineCommentService
   */
  private _comments: IComment[] = [];

  /**
   * Creates an instance of OfflineCommentService.
   *
   * @param {Window} window
   */
  constructor(@Inject(APP_WINDOW) window: Window) {
    super();
    this._storage = window.localStorage;

    /**
     * Loads comments from local storage when this server
     * is initialized to prevent multiple loads
     */
    const item = this._storage.getItem(COMMENTS_TABLE_NAME);
    if (item !== null) {
      this._comments = JSON.parse(item);
    }
    else {
      this._comments = TempData.comments;
      this._storage.setItem(COMMENTS_TABLE_NAME, JSON.stringify(this._comments));
    }
    const response: IServerResponse = {
      items: this._comments
    }
    // Update current max id to continue generateing auto increment ids
    this._comments.forEach(comment => {
      if (comment.id > this._currentId) {
        this._currentId = comment.id;
      }
    });
    this._subject.next(response);
  }

  /**
   *
   *
   * @return {*}  {number}
   * @memberof OfflineCommentService
   */
  public generateContentId(): number {
    return ++this._currentId;
  }

  /**
   * Gets all available comments from backend
   *
   * @return {*}  {Observable<IServerResponse>}
   */
  getAll(): Observable<IServerResponse> {
    return this._subject.pipe(share());
  }

  /**
   * Gets a single comment from backend based on its
   * identifier
   *
   * @param {(string | number)} id
   * @return {*}  {Observable<IServerResponse>}
   */
  get(id: string | number): Observable<IServerResponse> {
    const comment = this._comments.find((item) => item.id === id);

    const response: IServerResponse = {
      item: comment
    }
    return of(response);
  }

  /**
   * Adds a new comment to backend
   *
   * @param {IUser} user
   * @param {string} content
   * @param {IComment} [repyTo]
   * @return {*}  {Observable<IServerResponse>}
   */
  add(user: IUser, content: string, replyTo?: IComment): Observable<IServerResponse> {
    /**
     * Generates new comment
     */
     const comment: IComment = {
      id: this.generateContentId(),
      content: content,
      user: user,
      replies: [],
      createdAt: formatDate(Date.now(), COMMENT_DATE_FORMAT, COMMENT_LOCALE),
      score: 0,
    };


    if (replyTo) {
      comment.replyingTo = replyTo.user.username;
      const parent = this._serachParent(replyTo);
      if (!parent) {
        return of({type: "error", message: "Comment not found"});
      }

      parent.replies.push(comment);
    }
    else {
      this._comments.push(comment);
    }

    this._storage.setItem(COMMENTS_TABLE_NAME, JSON.stringify(this._comments));

    this._subject.next({items: this._comments});

    return of({ result: 'success', comment });
  }

  /**
   * @inheritDoc
   */
  update(
    id: string | number,
    content: string
  ): Observable<IServerResponse> {
    throw new Error('Method not implemented.');
  }

  /**
   * @inheritDoc
   */
  delete(comment: IComment): Observable<IServerResponse> {
    let index = this._searchComment(comment);

    // Comment not found?!
    if (index.parent < 0) {
      return of({type: 'error', 'message': 'Element not found'});
    }

    // Is main comment
    if (index.child < 0) {
      // If we found it, just removes from replies and return feedback
      this._comments.splice(index.parent, 1);
    }
    else {
      this._comments[index.parent].replies.splice(index.child, 1);
    }

    // We deleted the comment, update storage
    this._storage.setItem(COMMENTS_TABLE_NAME, JSON.stringify(this._comments));
    this._subject.next({items: this._comments});

    return of({type: 'success', 'message': 'Element deleted successfully'});
  }

  /**
   * Add a vote to a comment.
   *
   * Votes can be positive or negative
   *
   * @param {number} vote
   * @memberof CommentServiceInterface
   */
  vote(comment: IComment, vote: number): Observable<IServerResponse> {
    const index = this._searchComment(comment);

    // Comment not found?!
    if (index.parent < 0) {
      return of({type: 'error', 'message': 'Element not found'});
    }

    // Is main comment
    if (index.child < 0) {
      // If we found it, just removes from replies and return feedback
      this._comments[index.parent].score += vote;
    }
    else {
      this._comments[index.parent].replies[index.child].score += vote;
    }

    // We update comment's socre, update storage
    this._storage.setItem(COMMENTS_TABLE_NAME, JSON.stringify(this._comments));

    this._subject.next({items: this._comments});

    return of({type: 'success', 'message': 'Element updated successfully'})
  }

  private _searchComment(comment: IComment): {parent: number, child: number} {
    let found = {parent: -1, child: -1};
    // If the comment is a reply to other comment or another reply
    if (comment.replyingTo) {
      let index;
      // Find the comment in each main comment's replies
      for(let i = 0; i < this._comments.length; i++ ) {
        if (this._comments[i].replies) {
          index = this._comments[i].replies.indexOf(comment);
          // If we found it, just removes from replies and return feedback
          if (index >= 0) {
            found = {parent: i, child: index};
            break;
          }
        }
      }
    }
    // Otherwise search in main comments
    else {
      found.parent = this._comments.indexOf(comment);
    }

    return found;
  }

  private _serachParent(comment: IComment): IComment | null {
    const parent = this._searchComment(comment).parent;
    return parent >= 0 ? this._comments[parent] : null;
  }
}
