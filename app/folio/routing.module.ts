import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FolioListComponent } from './list.component';
import { FolioDetailComponent } from './detail.component';

const folioRoutes: Routes = [
  {
    path: 'work',
    component: FolioListComponent,
    children: [
      { path: '' },
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
