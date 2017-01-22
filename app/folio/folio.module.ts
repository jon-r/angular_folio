import { NgModule }      from '@angular/core';
import { CommonModule }   from '@angular/common';
import { HttpModule }    from '@angular/http';

import { FolioRoutingModule } from './folio-routing.module';
import { FolioListComponent }    from './folio-list.component';
import { FolioDetailComponent }    from './folio-detail.component';
import { FolioProjectService }  from './folio-project.service';


@NgModule({
  imports: [
    CommonModule,
    FolioRoutingModule,
    HttpModule
  ],
  declarations: [
    FolioListComponent,
    FolioDetailComponent,
  ],
  providers: [
    FolioProjectService
  ]
})
export class FolioModule { }
