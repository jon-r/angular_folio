import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FolioListComponent } from './folio/folio-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      anim: 'homePage',
      bgTransform: '', // TODO set home page transforms here, rather than unneeded service
    }
  }, {
    path: 'about',
    component: AboutComponent ,
    data: {
      anim: 'aboutPage',
      bgTransform: '', // set home page transforms here, rather than unneeded service
     }
   }, {
    path: 'folio',
    component: FolioListComponent,
    data: {
      anim: 'folioPage',
      bgTransform: '', // set home page transforms here, rather than unneeded service
     }
   }, {
    path: '**',
    redirectTo: '', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
