import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FolioListComponent } from './folio-list.component';
import { FolioDetailComponent } from './folio-detail.component';

const folioRoutes: Routes = [
  {
    path: 'work',
    component: FolioListComponent,
    children: [
      {
        path: '',

      },
      {
        path: ':id',
        component: FolioDetailComponent
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(folioRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class FolioRoutingModule { }
