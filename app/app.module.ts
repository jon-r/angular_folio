//rxjs
import './rxjs-extensions';

//angular
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FolioModule }    from './folio/folio.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }   from './app.component';
import { WindowRefService }   from './shared/window-ref.service';

import { AboutComponent }   from './about/about.component';
import { HomeComponent }    from './home/home.component';


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
    WindowRefService
  ],

  bootstrap: [ AppComponent ]
})
export class AppModule { }
