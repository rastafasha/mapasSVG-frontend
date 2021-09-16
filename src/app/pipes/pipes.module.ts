import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EscapeHtmlPipe } from './keep-html.pipe';
import {KeysPipe} from './keys.pipe';

@NgModule({
  declarations: [
    EscapeHtmlPipe,
    KeysPipe

  ],
  imports: [
    CommonModule
  ],
  exports: [
    EscapeHtmlPipe,
    KeysPipe

  ],
})
export class PipesModule { }
