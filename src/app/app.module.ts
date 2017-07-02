import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InlineSVGModule } from 'ng-inline-svg';
import { AppRoutingModule } from './app-routing.module';
import { TemplateModule } from './template/template.module';
// import { SlimScrollModule } from 'ng2-slimscroll';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FolioListComponent } from './folio/folio-list.component';
import { FolioDetailComponent } from './folio/folio-detail.component';
import { MotionService } from './shared/motion.service';
import { CachedHttpService } from './shared/cached-http.service';
import { FolioListDirective } from './folio/folio-list.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FolioListComponent,
    FolioDetailComponent,
    FolioListDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,
    InlineSVGModule,
    TemplateModule,
    // SlimScrollModule,
  ],
  providers: [
    MotionService,
    CachedHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
