import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

import { Observable } from 'rxjs/Observable';
import { useAnimation, transition, trigger, group } from '@angular/animations';


import { RouteCommsService } from '../shared/route-comms.service';

import { fadeIn, slide } from '../shared/animations';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
  animations: [
    trigger('lod', [
      transition(':enter', group([
        fadeIn,
        useAnimation(slide, {params: { from: 'translateY(-50px)' }}),
      ]))
    ])
  ],
})
export class TemplateComponent implements OnInit {
  @Input() template: {};

  scrollPos = 0;

  constructor(
    private routeComms: RouteCommsService,
    private location: Location,
  ) {}

  activateRow(row) {
    row.isActive = true;
  }

  goBack() {
    this.location.back();
  }

  ngOnInit() {}

};

/*
NEW TODO:
fix to work for ipad dummy screen (is too big to fully fit, needs to only tagrer bottom or smt)
clean up old code. does the scroll trigger still need to be through service? can listen to scroll some other way?
*/
