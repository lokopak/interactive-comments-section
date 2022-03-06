import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { IComment, IUser } from '../../comment';
import { CommentService } from '../../service/comment.service';

@Component({
  selector: 'app-comments-box',
  templateUrl: './comments-box.component.html',
  styleUrls: ['./comments-box.component.scss'],
})
export class CommentsBoxComponent implements OnDestroy {
  @Input() currentUser!: IUser;
  @Input() replyingTo?: IComment;

  @Output('replied') repied$: EventEmitter<boolean> = new EventEmitter();

  content: string = '';

  private _destroy$: Subject<void> = new Subject<void>();

  constructor(private _commentsService: CommentService) {}

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  /**
   * Sends a comment
   *
   * @memberof CommentsBoxComponent
   */
  send(): void {
    this._commentsService
      .add(this.currentUser, this.content, this.replyingTo)
      .subscribe((result) => {
        this.content = '';
        this.repied$.emit(result.type === 'success' ? true : false);
      });
  }
}
