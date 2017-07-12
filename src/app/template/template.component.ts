import { Component, OnInit, Input, HostListener } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { useAnimation, transition, trigger, query } from '@angular/animations';

import { RouteCommsService } from '../shared/route-comms.service';

import { fadeStagger } from '../shared/animations';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
  animations: [
    trigger('rowAnim', [
      // transition(':enter', [
      //   query('section', [
      //     useAnimation(fadeStagger, {params: { from: 0, to: 1 }}),
      //   ])
      // ]),
    ])
  ],
})
export class TemplateComponent implements OnInit {
  @Input() template: {};

  scrollPos = 0;

  constructor(
    private routeComms: RouteCommsService,
  ) {}

  activateRow(row) {
    row.isActive = true;
  }

  ngOnInit() {}

};

/*
NEW TODO:
fix to work for ipad (is too big to fully fit, needs to only tagrer bottom or smt)
animate in elements. the fades all there
preset hieghts.
clean up old code. does the scroll trigger still need to be through service? can listen to scroll some other way?
*/
