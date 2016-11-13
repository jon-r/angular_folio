import { Component } from '@angular/core';
//import { Component, OnInit } from '@angular/core';
//import {NgStyle, NgClass} from '@angular/common';
//import {} from '@angular/common';
import {Observable}  from 'rxjs/Observable';
import { Router, NavigationEnd } from '@angular/router';
//import 'rxjs/add/operator/debounceTime';
//import 'rxjs/add/observable/fromEvent';

import { Buttons } from './shared/button';
import { ButtonService } from './shared/button.service';


@Component({
 // moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  providers: [ButtonService ]
})

export class AppComponent {

  constructor(private buttonService: ButtonService, router: Router) {

    buttonService.buttonOutput$
      .debounceTime(200)
      .subscribe(n => this.btnPos = n );

    this.router = Router;

    router.events
      .debounceTime(200)
      .subscribe(e => {
        this.pageClass = (e instanceof NavigationEnd && e.urlAfterRedirects == '/home') ? 'home-page' : '';

    });

 //   router.events.
  //  router.changes.subscribe(console.log(router));
  };

  router: any;
  pageClass: string;
  btnPos: Buttons = {home: null,about: null,folio: null,framer: null};

  ngOnInit(): void {
    this.buttonService.setGrid();


    document.getElementById('js_headerLogo').classList.add('blah');

    Observable.fromEvent(window, 'resize')
      .debounceTime(200)
      .subscribe(e => {this.buttonService.setGrid()});


  }
}
