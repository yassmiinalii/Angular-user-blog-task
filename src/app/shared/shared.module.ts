import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import{LimitCharactersPipe} from "./pipes/limit-characters.pipe";
import { CommentsComponent } from './components/comments/comments.component';
import { CommentItemComponent } from './components/comments/comment-item/comment-item.component'

const PIPES = [
  LimitCharactersPipe
]

const COMPONENTS = [
  CommentsComponent,
  CommentItemComponent
]



@NgModule({
  declarations: [
    ...PIPES,
    ...COMPONENTS
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    ...PIPES,
    ...COMPONENTS
  ]
})
export class SharedModule { }
