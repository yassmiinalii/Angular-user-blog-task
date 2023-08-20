import { NgModule, Pipe } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import{LimitCharactersPipe} from "./pipes/limit-characters.pipe";
import { CommentsComponent } from '../home/components/post-list/post-card/comments/comments.component';
import { CommentItemComponent } from '../home/components/post-list/post-card/comments/comment-item/comment-item.component';
import { ErrorAlertComponent } from './components/error-alert/error-alert.component';
import { SkeltonLoaderComponent } from './components/skelton-loader/skelton-loader.component'

const PIPES = [
  LimitCharactersPipe
]

const COMPONENTS = [
  CommentsComponent,
  CommentItemComponent,
  ErrorAlertComponent,
  SkeltonLoaderComponent
]

const MODULES = [
  CommonModule,
  // NgOptimizedImage
]


@NgModule({
  declarations: [
    ...PIPES,
    ...COMPONENTS,


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
