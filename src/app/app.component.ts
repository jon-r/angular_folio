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

      // todo 'home<=>*'
      transition('about<=>folio', group([
        useAnimation(slideOutChild, { params: { to: 'translateY(-100%)'} }),
        useAnimation(slideInChild, { params : { from: 'translateY(100%)' }}),
      ])),
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
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('routesContainer') container: ElementRef;

  states: RouteMsg = {
    page: null,
    sidebar: null,
  };

  grid;
  scrollPos;

  constructor(
    private routerComms: RouteCommsService,
    private ngZone: NgZone,
    private cdRef: ChangeDetectorRef,
  ) {}


  updateLayout(data: RouteMsg) {
    this.scrollTo(0);
    this.states = data;
  }

  scrollWatch(element: Element) {
    if (this.states.page !== 'folio') {
      return false;
      // only interested if is on the template page;
    }
    this.routerComms.emitScrollPos(element.scrollTop);
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

    this.routerComms.msgOutput$
      .subscribe(data => this.updateLayout(data));

// TODO optimise this grid, since it seems laggy AF on weaker pcs. check pocket
    // this.grid = new JRGrid({});
    // this.grid.begin();

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
