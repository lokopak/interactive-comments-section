import { Component, Input, OnInit } from '@angular/core';
import { IComment, IUser } from '../../comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  @Input() comment!: IComment;
  @Input() currentUser!: IUser;

  constructor() {}

  ngOnInit(): void {
    console.log('comment', this.comment);
  }
}
