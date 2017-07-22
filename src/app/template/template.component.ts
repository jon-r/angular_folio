import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { useAnimation, transition, trigger, group, query } from '@angular/animations';


import { RouteCommsService } from '../shared/route-comms.service';

import { fadeIn, slide } from '../shared/animations';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
  animations: [
    trigger('lod', [
      transition('*=>*', query(':enter', group([
        fadeIn,
        useAnimation(slide, {params: { from: 'translateY(-50px)' }}),
      ]), { optional: true })),
    ]),
  ],
})
export class TemplateComponent implements OnInit {
  @Input() template;

  scrollPos = 0;

  constructor(
    private routeComms: RouteCommsService,
    private cdRef: ChangeDetectorRef,
  ) {}

  activateRow(row, $event) {
    row.isActive = $event;
  }

  ngOnInit() {
    this.template.rows.forEach(row => row.isActive = false);
  }

};

/*
TODO: bonus: lightboxes. similar to the old folio site? but with better positioning from NG
*/
