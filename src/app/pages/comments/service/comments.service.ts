import { Injectable } from '@angular/core';
// Temporary data
import { TempData } from '../data/comments';

@Injectable()
export class CommentsService {
  constructor() {}

  getComments(): any[] {
    return TempData.comments;
  }
}
