//rxjs
import './rxjs-extensions';

//angular
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }   from './app.component';

import { AboutComponent }   from './about/about.component';
import { ListComponent }    from './list/list.component';
import { TransitionComponent }    from './list/transition.component';
import { SingleComponent }  from './single/single.component';
import { HomeComponent }    from './home/home.component';

import { GridService } from './shared/grid.service';
import { ProjectService }  from './shared/project.service';
import { TransitionService }  from './list/transition.service';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,

    AboutComponent,
    ListComponent,
    TransitionComponent,
    SingleComponent
  ],
  providers: [
    GridService,
    TransitionService,
    ProjectService
  ],
//  providers: [ ButtonService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
