import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IComment, IUser } from '../comment';
import { IServerResponse } from './comment-service.interface';
import { CommentService } from './comment.service';

@Injectable()
export class OnlineCommentService extends CommentService {

  /**
   * @inheritDoc
   */
  getAll(): Observable<IServerResponse> {
    throw new Error('Method not implemented.');
  }

  /**
   * @inheritDoc
   */
  get(id: string | number): Observable<IServerResponse> {
    throw new Error('Method not implemented.');
  }

  /**
   * @inheritDoc
   */
  add(
    user: IUser,
    content: string,
    repyTo?: IComment
  ): Observable<IServerResponse> {
    throw new Error('Method not implemented.');
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
  delete(
    id: string | number
  ): Observable<IServerResponse> {
    throw new Error('Method not implemented.');
  }
}
