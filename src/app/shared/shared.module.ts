import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusPipe } from './pipes/status.pipe'
import { TextPipe } from './pipes/text.pipe'

const IOMODULE = [
	CommonModule
]

const SHARED_PIPES = [
  TextPipe,
    StatusPipe,
]

@NgModule({
  imports: [
    ...IOMODULE
  ],
  declarations: [
    ...SHARED_PIPES
  ],
  exports: [
  	...IOMODULE,
    ...SHARED_PIPES
  ]

})
export class SharedModule { }
