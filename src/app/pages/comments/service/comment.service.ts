import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IComment, IUser } from '../comment';
import { CommentServiceInterface, IServerResponse } from './comment-service.interface';

/**
 * Abstract comment service class.
 * Its function is handle communications with the backend
 * in every actions related with comments. Create, update,
 * delete, edit, etc...
 *
 * @export
 * @abstract
 * @class CommentService
 * @implements {CommentServiceInterface}
 */
@Injectable()
export abstract class CommentService implements CommentServiceInterface {

  /**
   * Gets all available comments from backend
   *
   * @return {*}  {Observable<IServerResponse>}
   */
  getAll(): Observable<IServerResponse> {
    throw new Error('Method not implemented.');
  }

  /**
   * Gets a single comment from backend based on its
   * identifier
   *
   * @param {(string | number)} id
   * @return {*}  {Observable<IServerResponse>}
   */
  get(id: string | number): Observable<IServerResponse> {
    throw new Error('Method not implemented.');
  }

  /**
   * Adds a new comment to backend
   *
   * @param {IUser} user
   * @param {string} content
   * @param {IComment} [repyTo]
   * @return {*}  {Observable<IServerResponse>}
   */
  add(user: IUser, content: string, repyTo?: IComment): Observable<IServerResponse> {
    throw new Error('Method not implemented.');
  }

  /**
   * Updates a comment at backend
   *
   * @param {(string | number)} id
   * @param {string} content
   * @return {*}  {Observable<IServerResponse>}
   */
  update(id: string | number, content: string): Observable<IServerResponse> {
    throw new Error('Method not implemented.');
  }

  /**
   * Deletes a comment from backend
   *
   * @param {IComment} comment
   * @return {*}  {Observable<IServerResponse>}
   */
  delete(comment: IComment): Observable<IServerResponse> {
    throw new Error('Method not implemented.');
  }

  /**
   * Add a vote to a comment.
   *
   * Votes can be positive or negative
   *
   * @param {IComment} comment
   * @param {number} vote
   * @memberof CommentServiceInterface
   */
   vote(comment: IComment, vote: number): Observable<IServerResponse> {
    throw new Error('Method not implemented.');
  }
}
