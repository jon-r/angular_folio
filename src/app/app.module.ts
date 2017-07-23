import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { InlineSVGModule } from 'ng-inline-svg';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FolioListComponent } from './folio/folio-list.component';
import { FolioService } from './folio/folio.service';
import { TemplateComponent } from './template/template.component';
import { SafeURLPipe } from './shared/safe-url.pipe';
import { RouteCommsService } from './shared/route-comms.service';
import { LODDirective } from './shared/lod.directive';
import { FolioItemComponent } from './folio/folio-item/folio-item.component';
import { SafeHTMLPipe } from './shared/safe-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FolioListComponent,
    TemplateComponent,
    SafeURLPipe,
    LODDirective,
    FolioItemComponent,
    SafeHTMLPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // HttpModule,
    AppRoutingModule,
    // InlineSVGModule,
  ],
  providers: [
    FolioService,
    RouteCommsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
