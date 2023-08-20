import { Component, Input } from '@angular/core';
import { IComment } from 'src/app/shared/models/icomment';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss']
})
export class CommentItemComponent {

  @Input() comment : IComment;
  isImgCommentLoaded: boolean = false;

  onImgLoaded(){
    this.isImgCommentLoaded = true;
  }

}
