import { NgModule, Pipe } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import{LimitCharactersPipe} from "./pipes/limit-characters.pipe";
import { ErrorAlertComponent } from './components/error-alert/error-alert.component';
import { SkeltonLoaderComponent } from './components/skelton-loader/skelton-loader.component'

const PIPES = [
  LimitCharactersPipe
]

const COMPONENTS = [

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
