import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import 'rxjs/add/operator/filter';

import { InlineSVGModule } from 'ng-inline-svg';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FolioListComponent } from './folio/folio-list.component';
import { FolioDetailComponent } from './folio/folio-detail.component';

import { AppMotionService } from './app-motion.service';
import { ProjectService } from './folio/project.service';
import { TemplateService } from './dynamic-template/template.service';

import { CachedHttpService } from './shared/cached-http.service';

import { DynamicTemplateComponent } from './dynamic-template/dynamic-template.component';
//import { TemplateBlockComponent } from './dynamic-template/template-block.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DynamicTemplateComponent,
//    TemplateBlockComponent,
    FolioListComponent,
    FolioDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InlineSVGModule
  ],
  providers: [
    AppMotionService,
    // ProjectService,
    // TemplateService,
    CachedHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
