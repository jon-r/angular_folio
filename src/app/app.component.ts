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
      state('home', style({ transform: 'translateX(10vw) skew(20deg)' })),
      transition(':enter', useAnimation(slide, from.left)),
      transition(':leave', useAnimation(slide, to.left)),
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

  page: string;

  scrollPos;

  isMobile: Boolean;
  mobileShow: Boolean;


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
    console.log('scrolling');

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
    const vwInit = container.offsetWidth;

    this.routerComms.scrollToOutput$
      .subscribe(scroll => this.scrollTo(scroll));


    this.isMobile = vwInit < 800;

    const grid = new JRGrid({ target: 'jr_grid' });

    if (vwInit > 1100) {
      grid.build().play();
    }

    /* better debounce credit:
    - https://stackoverflow.com/a/36849347
    */
    this.ngZone.runOutsideAngular(() => {
      Observable.fromEvent(window, 'resize')
        .debounceTime(150)
        .subscribe((e) => {
          const vw = container.offsetWidth;
          const isMobile = (vw < 800);
          // todo: 1100 = constant for other anims?
          if (vw < 1100) {
            grid.pause();
            // console.log(grid);
          } else {
            grid.build();
          }

          // todo = ping this across the site for other updates (routerComms)
          // also seperate from the listener to be TRIGGERED by the listener

          // todo screw state animation, use a JS/CSS toggle

          this.isMobile = isMobile;
          this.mobileShow = isMobile;


          this.cdRef.detectChanges();
        });

      Observable.fromEvent(container, 'scroll')
        .debounceTime(150)
        .subscribe(() => {
          this.scrollWatch(container);
          this.cdRef.detectChanges();
        });
    });
  }


}
