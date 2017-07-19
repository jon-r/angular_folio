import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/filter';

import { useAnimation, transition, trigger, state, style, group, query } from '@angular/animations';

import { duration, slide, slideInChild, slideOutChild, slideStagger, to, from, fadeIn } from './shared/animations';

import { RouteCommsService } from './shared/route-comms.service';

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
export class AppComponent implements AfterViewInit, OnInit {
  @ViewChild('routesContainer') container: ElementRef;
  @ViewChild('routerOutlet') outlet: RouterOutlet;

  page: string;
  pageSub: BehaviorSubject<string>;
  pageRef$: Observable<string>;

  scrollPos: Number;
  showSidebar: Boolean;
  isMobile: Boolean;
  grid: JRGrid;

  constructor(
    private routerComms: RouteCommsService,
  ) {
//    this.mobileShow = false;
    this.showSidebar = true;
    this.pageSub = new BehaviorSubject<string>('');
    this.page = '';

    this.pageRef$ = this.pageSub.asObservable();
  }

//  scrollWatch(element: Element) {
//    if (this.page !== 'folio') {
//      return false;
//      // only interested if is on the template page;
//    }
//    this.routerComms.emitScrollPos(element.scrollTop);
//  }


  updateRoute(outlet) {
    const ref = outlet.activatedRouteData.anim;
    this.pageSub.next(ref);
    this.toggleSidebar(false);
  }


  toggleSidebar(bool: Boolean) {
    this.showSidebar = bool || !this.isMobile;
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

  ngOnInit() {
    this.grid = new JRGrid({ target: 'jr_grid' });

    this.routerComms.listDimensions$.subscribe(dims => {
      const mq = dims.query;
      this.isMobile = mq === 'mobile';
      if (mq === 'screen') {
        this.grid.build().play();
      } else {
        this.grid.pause();

      }
      this.toggleSidebar(false);
    });

    this.routerComms.scrollPosition$.subscribe(pos => {
      this.scrollTo(pos);
    });

    this.pageRef$.subscribe((pg) => this.page = pg);
  }


  ngAfterViewInit() {

    const container = this.container.nativeElement;


    Observable.fromEvent(window, 'resize')
      .debounceTime(500)
      .subscribe(() => this.routerComms.updateDims());


    Observable.fromEvent(container, 'scroll')
      // only actively watching if on folio pages
      .filter(() => this.page === 'folio')
      .debounceTime(150)
      .subscribe(() => this.routerComms.updateScrollPos(container.scrollTop));

  }


}
