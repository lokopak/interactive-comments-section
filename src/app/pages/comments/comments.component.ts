import { Component, OnInit } from '@angular/core';
import { CommentsService } from './service/comments.service';

@Component({
  selector: 'app-comments',
  styleUrls: ['./comments.component.scss'],
  template: `
    <section class="comments">
      <app-comments-container [comments]="comments"></app-comments-container>
    </section>
  `,
})
export class CommentsComponent implements OnInit {
  comments: any[] = [];

  constructor(private commentsService: CommentsService) {
    // TODO: move to ngOnInit when remote server is available
    this.comments = this.commentsService.getComments();
  }

  ngOnInit(): void {
    console.log('comments', this.comments);
  }
}
