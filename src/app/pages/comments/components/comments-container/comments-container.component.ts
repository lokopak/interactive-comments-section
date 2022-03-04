import { Component, Input } from '@angular/core';
import { IUser } from '../../comment';
import { TempData } from '../../data/comments';

@Component({
  selector: 'app-comments-container',
  styleUrls: ['./comments-container.component.scss'],
  template: `
    <div class="comments-container">
      <app-comment
        *ngFor="let comment of comments"
        [comment]="comment"
        [currentUser]="currentUser"
      ></app-comment>
    </div>
  `,
})
export class CommentsContainerComponent {
  @Input() comments: any[] = [];
  // TODO: move to property place when users are available
  currentUser: IUser = TempData.currentUser;
}
