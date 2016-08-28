import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
//import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { routing }      from './app.routing';

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
    routing
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
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
