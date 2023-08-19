import { NgModule, Pipe } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
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

const MODULES = [
  CommonModule,
  // NgOptimizedImage
]


@NgModule({
  declarations: [
    ...PIPES,
    ...COMPONENTS
  ],
  imports: [
    ...MODULES
  ],
  exports: [
    ...MODULES,
    ...PIPES,
    ...COMPONENTS
  ]
})
export class SharedModule { }
