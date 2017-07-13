import { Component, OnInit, ViewChild, ElementRef, NgZone, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';

import { useAnimation, transition, trigger, state, style, group, query } from '@angular/animations';

import { duration, slide, slideInChild, slideOutChild, fadeInChild, fadeOutChild, hideInChild } from './shared/animations';

import { RouteCommsService, RouteMsg } from './shared/route-comms.service';


import JRGrid from '../assets/jr_grid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimation', [
      transition(':enter', []),
      transition('home=>*', group([
        useAnimation(slideOutChild, { params: { to: 'translateX(-100%)'} }),
        useAnimation(slideInChild, { params: { from: 'translateY(100%)' }}),
      ])),
      transition('*=>home', group([
        useAnimation(slideOutChild, { params: { to: 'translateX(100%)'} }),
        useAnimation(slideInChild, { params: { from: 'translateX(-100%)' }}),
      ])),
      transition('about<=>folio', group([
        useAnimation(slideOutChild, { params: { to: 'translateY(-100%)'} }),
        useAnimation(slideInChild, { params: { from: 'translateY(100%)' }}),
      ])),
    ]),
    trigger('sidebar', [
      state('home', style({ transform: 'translateX(300px) skew(20deg)' })),
      transition('*<=>*', useAnimation(duration)),
    ]),
    trigger('nav', [
      state('home', style({ transform: 'translateX(-100%)' })),
      transition('*<=>*', useAnimation(duration)),
    ])
  ]
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('routesContainer') container: ElementRef;

  page: string;

  grid;
  scrollPos;

  constructor(
    private routerComms: RouteCommsService,
    private ngZone: NgZone,
    private cdRef: ChangeDetectorRef,
  ) {}

  scrollWatch(element: Element) {
    if (this.page !== 'folio') {
      return false;
      // only interested if is on the template page;
    }
    this.routerComms.emitScrollPos(element.scrollTop);
  }

  prepRouteState(outlet) {
    const page = outlet.activatedRouteData['anim'];
    this.page = page;
    return page;
  }


// inspired by https://twitter.com/johnlindquist/status/735172526083440642?lang=en
   // todo bonus = set this up as service? not needed but better organised
  scrollTo(to) {
    const from = this.container.nativeElement.scrollTop;
    // todo maybe set this as variable?
    const multiplier = .2;

    if (Math.abs(from - to) < 1) {
      return false;
    }

    const lerp = (start, finish) => ((1 - multiplier) * start) + (multiplier * finish);
    this.scrollPos = lerp(from, to);

    requestAnimationFrame(() => this.scrollTo(to));
  }


  ngOnInit(): void {
    this.routerComms.scrollToOutput$
      .subscribe(scroll => this.scrollTo(scroll));


// TODO more grid optimise?
//     this.grid = new JRGrid({});
//     this.grid.begin();

  }

  /* better debounce credit:
  - https://stackoverflow.com/a/36849347
  */

  ngAfterViewInit() {

    this.ngZone.runOutsideAngular(() => {
      const container = this.container.nativeElement;

      Observable.fromEvent(container, 'scroll')
        .debounceTime(150)
        .subscribe(() => {
          this.scrollWatch(container);
          this.cdRef.detectChanges();
        });
    });
  }


}
