import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import{LimitCharactersPipe} from "./pipes/limit-characters.pipe"

const pipes = [
  LimitCharactersPipe
]


@NgModule({
  declarations: [
    ...pipes
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    ...pipes
  ]
})
export class SharedModule { }
