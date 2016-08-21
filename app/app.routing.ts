import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ListComponent } from './list/list.component';
import { SingleComponent } from './single/single.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'folio',
    component: ListComponent
  },
  {
    path: 'work/:id',
    component: SingleComponent
  }

];

export const routing = RouterModule.forRoot(appRoutes);
