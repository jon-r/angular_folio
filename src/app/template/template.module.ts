import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateComponent } from './template.component';
import { InlineSVGModule } from 'ng-inline-svg';

@NgModule({
  imports: [
    CommonModule,
    InlineSVGModule,
  ],
  declarations: [
    TemplateComponent,
  ],
  exports: [
    TemplateComponent,
  ]
})
export class TemplateModule { }
