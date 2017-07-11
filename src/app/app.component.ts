import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import { useAnimation, transition, trigger, state, style, group, query } from '@angular/animations';

import { slideInChild, slideOutChild, fadeInChild, fadeOutChild } from './shared/animations';
import { MotionService } from './shared/motion.service';
import { ElTransform } from './shared/el-transform';

import JRGrid from '../assets/jr_grid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimation', [
      transition(':enter', []),

      transition('*=>folioPage', group([
        useAnimation(fadeOutChild),
        useAnimation(slideInChild, { params : { from: 'translateX(-100vw)' }}),
      ])),
      transition('*=>homePage', group([
        useAnimation(fadeOutChild),
        useAnimation(slideInChild, { params: { from: 'translateX(100vw)' } }),
      ])),
      transition('*=>aboutPage', group([
        useAnimation(fadeOutChild),
        useAnimation(slideInChild, { params: { from: 'translateY(100vh)' } }),
      ])),
      // transition('*=>*', useAnimation(fadeOutChild)),
    ]),
  ]
})
export class AppComponent implements OnInit {

  els: ElTransform = {
    home: null,
    gridMask: null,
    framer: null,
  };

  grid;

  constructor( private appMotion: MotionService) {}

  getRouterState(outlet: any) {
    return outlet.activatedRouteData['anim'] || 'home';
  }

  ngOnInit(): void {

    this.appMotion.motionOutput$
      .debounceTime(50)
      .subscribe(els => {
        this.els = els;
        this.grid.setRange(els.gridMask);
      });

    this.grid = new JRGrid({});
    this.grid.begin();

  }


}
