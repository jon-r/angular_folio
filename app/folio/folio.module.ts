import { NgModule }      from '@angular/core';
import { CommonModule }   from '@angular/common';
import { HttpModule }    from '@angular/http';

import { FolioRoutingModule } from './routing.module';
import { FolioListComponent }    from './list.component';
import { FolioDetailComponent }    from './detail.component';
import { FolioProjectService }  from './project.service';
//import { FolioTransitionDirective }  from './transition.directive';

import { HtmlTemplateComponent } from '../shared/htmlTemplate.component';
//inline svg
import { InlineSVGModule } from '../ng-inline-svg/lib/index.js';


@NgModule({
  imports: [
    CommonModule,
    FolioRoutingModule,
    HttpModule,
    InlineSVGModule
  ],
  declarations: [
    FolioListComponent,
    FolioDetailComponent,
    //FolioTransitionDirective
    HtmlTemplateComponent
  ],
  providers: [
    FolioProjectService
  ]
})
export class FolioModule { }
