import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { useAnimation, transition, trigger, state, style, group, query } from '@angular/animations';

import { duration, slide, slideInChild, slideOutChild, fadeInChild, fadeOutChild } from './shared/animations';

import { RouteCommsService, RouteMsg } from './shared/route-comms.service';


import JRGrid from '../assets/jr_grid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimation', [
      transition(':enter', []),

      transition('*=>folio', group([
        useAnimation(fadeOutChild),
        useAnimation(slideInChild, { params : { from: 'translateX(-100vw)' }}),
      ])),
      // todo about + folio both slide vertically only.
      transition('*=>home', group([
        useAnimation(fadeOutChild),
        useAnimation(slideInChild, { params: { from: 'translateX(100vw)' } }),
      ])),
      transition('*=>about', group([
        useAnimation(fadeOutChild),
        useAnimation(slideInChild, { params: { from: 'translateY(100vh)' } }),
      ])),
      // transition('*=>*', useAnimation(fadeOutChild)),
    ]),
    trigger('sidebar', [
      // todo: fix this up, perhaps need child [@]'s to set final state?
      transition('*=>open', query('#sideBG', [
        useAnimation(slide, { params: { to: 'translateX(256px) skewX(10deg)' } }),
        style({ transform: 'translateX(256px) skewX(10deg)' })
      ])),

      transition('*=>closed', query('#sideBG', [
        useAnimation(slide, { params: { to: 'translateX(64px)' } }),
        style({ transform: 'translateX(64px)' })
      ])),

//      state('closed', query('#sideBG', style({ transform: 'translateX(64px)' }))),
//      transition('open<=>closed', useAnimation(duration)),
//      transition(':enter', useAnimation(slide, { params: { from: 'translateX(100vw)' } })),
    ])
  ]
})
export class AppComponent implements OnInit {

  states: RouteMsg = {
    currentPage: null,
    sidebarState: null,
  };

  grid;

  constructor(private routerComms: RouteCommsService) {}


  updateLayout(data: RouteMsg) {
    this.states = data;
  }


  ngOnInit(): void {

    this.routerComms.msgOutput$
      .subscribe(data => this.updateLayout(data));

    this.grid = new JRGrid({});
    this.grid.begin();

  }


}
