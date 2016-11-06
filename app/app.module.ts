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
import { SingleComponent }  from './single/single.component';
import { HomeComponent }    from './home/home.component';

import { ButtonService }  from './shared/button.service';
import { ProjectService }  from './shared/project.service';


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
    SingleComponent
  ],
  providers: [
    ButtonService,
    ProjectService
  ],
//  providers: [ ButtonService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
