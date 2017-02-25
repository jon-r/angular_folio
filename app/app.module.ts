//rxjs
import './rxjs-extensions';

//angular
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FolioModule }    from './folio/folio.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }   from './app.component';

import { AboutComponent }   from './about/about.component';
import { HomeComponent }    from './home/home.component';


import { ButtonService } from './shared/button.service';
import { GridService } from './shared/grid.service';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FolioModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,


  ],
  providers: [
    ButtonService,
    GridService
  ],

  bootstrap: [ AppComponent ]
})
export class AppModule { }
