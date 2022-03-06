import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APP_WINDOW } from 'src/app/app.options';
import { CommentsComponent } from './comments.component';
import { CommentsRoutingModule } from './comments.routing.module';
import { CommentComponent } from './components/comment/comment.component';
import { CommentsBoxComponent } from './components/comments-box/comments-box.component';
import { CommentsContainerComponent } from './components/comments-container/comments-container.component';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { CommentServiceInterface } from './service/comment-service.interface';
import { CommentService } from './service/comment.service';
import { OfflineCommentService } from './service/offline-comment.service';
import { OnlineCommentService } from './service/online-comment.service';

export function commentServiceFactory(params?: any): CommentServiceInterface {
  return new OfflineCommentService(params);
}

@NgModule({
  declarations: [
    CommentComponent,
    CommentsBoxComponent,
    CommentsComponent,
    CommentsContainerComponent,
    TimeAgoPipe,
  ],
  imports: [CommonModule, CommentsRoutingModule, FormsModule],
  providers: [
    {
      provide: CommentService,
      useFactory: commentServiceFactory,
      deps: [APP_WINDOW],
    },
    OfflineCommentService,
    OnlineCommentService,
  ],
})
export class CommentsModule {}
