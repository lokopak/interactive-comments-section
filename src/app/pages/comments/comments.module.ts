import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommentsComponent } from './comments.component';
import { CommentsRoutingModule } from './comments.routing.module';
import { CommentComponent } from './components/comment/comment.component';
import { CommentsBoxComponent } from './components/comments-box/comments-box.component';
import { CommentsContainerComponent } from './components/comments-container/comments-container.component';
import { CommentsService } from './service/comments.service';

@NgModule({
  declarations: [
    CommentComponent,
    CommentsBoxComponent,
    CommentsComponent,
    CommentsContainerComponent,
  ],
  imports: [CommonModule, CommentsRoutingModule],
  providers: [CommentsService],
})
export class CommentsModule {}
