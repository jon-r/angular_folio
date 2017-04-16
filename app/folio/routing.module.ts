import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FolioListComponent } from './list.component';
import { FolioDetailComponent } from './detail.component';

const folioRoutes: Routes = [
  {
    path: 'folio',
    component: FolioListComponent,
    children: [
      { path: ':id', component: FolioDetailComponent },
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
