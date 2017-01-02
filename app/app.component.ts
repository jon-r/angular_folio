import { Component } from '@angular/core';
//import { Component, OnInit } from '@angular/core';
//import {NgStyle, NgClass} from '@angular/common';
//import {} from '@angular/common';
import {Observable}  from 'rxjs/Observable';
//import { Router, NavigationEnd } from '@angular/router';
//import 'rxjs/add/operator/debounceTime';
//import 'rxjs/add/observable/fromEvent';

import { Buttons } from './shared/buttons';
import { GridService } from './shared/grid.service';


@Component({
 // moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  providers: [GridService ]
})

export class AppComponent {

  constructor(private gridService: GridService) {

    gridService.buttonOutput$
      .debounceTime(200)
      .subscribe(n => this.btnPos = n );

/*    this.router = Router;

    router.events
      .debounceTime(200)
      .subscribe(e => {
        this.isHome = (e instanceof NavigationEnd && e.urlAfterRedirects == '/home') ? 'home-page' : '';
    });*/

  };

//  router: any;
  isHome: string;
  isLoaded: boolean = false;
  btnPos: Buttons = {home: null,about: null,folio: null,framer: null};

  ngOnInit(): void {
    this.gridService.setGrid();

    Observable.fromEvent(window, 'resize')
      .debounceTime(200)
      .subscribe(e => {this.gridService.setGrid()});


  }
}
