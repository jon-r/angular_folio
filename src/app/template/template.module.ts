import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateComponent } from './template.component';
import { TemplateImageComponent } from './template-image.component';
import { TemplateCodepenComponent } from './template-codepen.component';
import { TemplateSvgComponent } from './template-svg.component';
import { TemplateTextComponent } from './template-text.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TemplateComponent,
    TemplateImageComponent,
    TemplateCodepenComponent,
    TemplateSvgComponent,
    TemplateTextComponent
  ],
  exports: [
    TemplateComponent,
  ]
})
export class TemplateModule { }
