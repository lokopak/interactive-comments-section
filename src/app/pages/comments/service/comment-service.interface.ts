import { Observable } from 'rxjs';
import { IComment, IUser } from '../comment';

/**
 * Simulates server response.
 *
 * Some examples
 * { type: 'success', message: 'Comment deleted successfully', id: 23 }
 * { type: 'error', message: 'Element not found' }
 * { items: [], total: 0, elements_per_page: 10 }
 *
 * @export
 * @interface IServerResponse
 */
 export interface IServerResponse {
  [key: string]: any;
  type?: 'success' | 'error';
  message?: string;
}

/**
 * Comment service interface
 *
 * @export
 * @interface CommentServiceInterface
 */
export interface CommentServiceInterface {

  /**
   * Gets all comments from backend
   *
   * @return {Observable<IComment[]>}
   */
  getAll(): Observable<IServerResponse>;

  /**
   * Gets a single comments form backend by its id.
   *
   * @return {Observable<IServerResponse>}
   */
  get(id: number | string): Observable<IServerResponse>;

  /**
   * Adds a new comment to backend
   *
   * @param {IUser} user
   * @param {string} content
   * @param {IUser} [repyTo]
   * @return {Observable<IServerResponse>}
   */
  add(user: IUser, content: string, repyTo?: IComment): Observable<IServerResponse>;

  /**
   * Update a single comment at backend
   *
   * @param {(number | string)} id
   * @param {string} content
   * @return {Observable<IServerResponse>}
   */
  update(id: number | string,content: string): Observable<IServerResponse>;

  /**
   * Delete a single comment (and its replies) from backend
   *
   * @param {IComment} comment
   * @return {(Observable<IServerResponse>)}
   */
  delete(comment: IComment): Observable<IServerResponse>;

  /**
   * Add a vote to a comment.
   *
   * Votes can be positive or negative
   *
   * @param {number} vote
   * @memberof CommentServiceInterface
   */
  vote(vote: number): void;

}
