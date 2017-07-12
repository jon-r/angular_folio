import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InlineSVGModule } from 'ng-inline-svg';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FolioListComponent } from './folio/folio-list.component';
import { FolioService } from './folio/folio.service';
import { TemplateComponent } from './template/template.component';
import { SafePipe } from './shared/safeURL.pipe';
import { RouteCommsService } from './shared/route-comms.service';
import { LODDirective } from './shared/lod.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FolioListComponent,
    TemplateComponent,
    SafePipe,
    LODDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,
    InlineSVGModule,
  ],
  providers: [
    FolioService,
    RouteCommsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
