import { Component, Input } from '@angular/core';
import { IComment, IUser } from '../../comment';
import { CommentService } from '../../service/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent {
  @Input() comment!: IComment;
  @Input() currentUser!: IUser;

  replying = false;

  constructor(private _commentsService: CommentService) {}

  reply(): void {
    this.replying = true;
  }

  replied(): void {
    this.replying = false;
  }

  delete(): void {
    this._commentsService.delete(this.comment).subscribe((result) => {
      console.log(result);
    });
  }

  edit(): void {
    console.log('editing');
  }

  vote(value: number): void {
    this.comment.score += value;
    if (this.comment.score < 0) {
      this.comment.score = 0;
    }
  }
}
