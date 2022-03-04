import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../../comment';

@Component({
  selector: 'app-comments-box',
  templateUrl: './comments-box.component.html',
  styleUrls: ['./comments-box.component.scss'],
})
export class CommentsBoxComponent implements OnInit {
  @Input() currentUser!: IUser;

  constructor() {}

  ngOnInit() {
    console.log(this.currentUser);
  }
}
