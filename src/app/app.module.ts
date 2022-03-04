import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentsContainerComponent } from './components/comments-container/comments-container.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    CommentsContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
