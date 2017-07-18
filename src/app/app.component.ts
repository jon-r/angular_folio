import { Component, ViewChild, ElementRef, NgZone, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';

import { useAnimation, transition, trigger, state, style, group, query } from '@angular/animations';

import { duration, slide, slideInChild, slideOutChild, slideStagger, to, from, fadeIn } from './shared/animations';

import { RouteCommsService, RouteMsg } from './shared/route-comms.service';

import JRGrid from '../assets/jr_grid/canvas/canvasGrid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimation', [
      transition(':enter', []),
      transition('home=>*', group([
        useAnimation(slideOutChild, to.left),
        useAnimation(slideInChild, from.down),
      ])),
      transition('*=>home', group([
        useAnimation(slideOutChild, to.right),
        useAnimation(slideInChild, from.left),
      ])),
      transition('about<=>folio', group([
        useAnimation(slideOutChild, to.up),
        useAnimation(slideInChild, from.down),
      ])),
    ]),
    trigger('sidebar', [
      state('void', style({ transform: 'translateX(-100%)' })),
      state('home', style({ transform: 'translateX(10vw) skew(20deg)' })),
      // transition(':enter', useAnimation(slide, from.left)),
      // transition(':leave', useAnimation(slide, to.left)),
      transition('*<=>*', useAnimation(duration)),
    ]),
    trigger('header', [
      state('home, closed', style({ transform: 'translateX(120%)' })),
      transition(':enter', fadeIn),
      transition('*<=>*', useAnimation(duration)),
    ]),
    trigger('nav', [
      transition(':enter', query('a', useAnimation(slideStagger, from.left) )),
      transition(':leave', useAnimation(slide, to.left)),
    ])
  ]
})
export class AppComponent implements AfterViewInit {
  @ViewChild('routesContainer') container: ElementRef;

  page: String;

  scrollPos: Number;
  mobileShow: Boolean;
  isMobile: Boolean;
  grid: JRGrid;


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

  widthWatch() {
    const vw = window.innerWidth;

    switch (true) {
    case (vw < 800):
      return 'mobile';
    case (vw < 1100):
      return 'tablet';
    default:
      return 'screen';
    }
  }

  prepRouteState(outlet) {
    const page = outlet.activatedRouteData['anim'];
    this.page = page;
    return page;
  }

// todo use this to close the menu more often (route changes i guess)
  toggleSidebar(bool: Boolean) {
    this.mobileShow = bool;
  }


// inspired by https://twitter.com/johnlindquist/status/735172526083440642?lang=en
   // todo bonus = set this up as service? not needed but better organised
  scrollTo(to) {

    const from = this.container.nativeElement.scrollTop;
    const multiplier = .2;

    if (Math.abs(from - to) < 1) {
      return false;
    }

    const lerp = (start, finish) => ((1 - multiplier) * start) + (multiplier * finish);
    this.scrollPos = lerp(from, to);

    requestAnimationFrame(() => this.scrollTo(to));
  }


  ngAfterViewInit() {

    const container = this.container.nativeElement;

    this.routerComms.scrollToOutput$
      .subscribe(scroll => this.scrollTo(scroll));


    this.grid = new JRGrid({ target: 'jr_grid' });
    const width = this.widthWatch();

    if (width === 'screen') {
      this.grid.build().play();
    } else {
      this.grid.pause();
    };

    this.mobileShow = false;
    this.isMobile = (width === 'mobile');


    this.cdRef.detectChanges();
    this.routerComms.emitWidth(width);

    Observable.fromEvent(window, 'resize')
      .debounceTime(150)
      .subscribe((e) => {
        const width2 = this.widthWatch();

        if (width2 === 'screen') {
          this.grid.pause();
        } else {
          this.grid.build();
        }

        this.mobileShow = (width2 === 'mobile');
        this.routerComms.emitWidth(width2);
      });

    Observable.fromEvent(container, 'scroll')
      .debounceTime(150)
      .subscribe(() => {
        this.scrollWatch(container);
      });

  }


}
