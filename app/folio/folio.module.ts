import { NgModule }      from '@angular/core';
import { CommonModule }   from '@angular/common';
import { HttpModule }    from '@angular/http';

import { FolioRoutingModule } from './routing.module';
import { FolioListComponent }    from './list.component';
import { FolioDetailComponent }    from './detail.component';
import { FolioProjectService }  from './project.service';
import { FolioTransitionDirective }  from './transition.directive';


@NgModule({
  imports: [
    CommonModule,
    FolioRoutingModule,
    HttpModule
  ],
  declarations: [
    FolioListComponent,
    FolioDetailComponent,
    FolioTransitionDirective
  ],
  providers: [
    FolioProjectService
  ]
})
export class FolioModule { }
