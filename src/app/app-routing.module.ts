import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FolioListComponent } from './folio/folio-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { anim: 'home' } },
  { path: 'about', component: AboutComponent, data: { anim: 'about' } },
  { path: 'folio', component: FolioListComponent, data: { anim: 'folio' } },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
