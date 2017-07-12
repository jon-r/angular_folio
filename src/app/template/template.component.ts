import { Component, OnInit, Input, HostListener } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { useAnimation, transition, trigger, query } from '@angular/animations';

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

  constructor() {}

  ngOnInit() {}

};


/* todo lazy load triggers:
scroll event in app.component
- note to target 'routesContainer' (is already linked in app component)
or (scroll)="doShenanegans"

trigger the route comms service which THROTTLES it
- https://stackoverflow.com/questions/32051273/angular2-and-debounce
- https://angular.io/api/core/NgZone#runOutsideAngular

send this throttled info the template component, which matches scroll position to the positions of each element?
- perhas something like
#elTag  ngIf="scrollPos > elTag"
- need to account for multiple ids??

some pointers:
https://stackoverflow.com/questions/40819739/angular-2-template-reference-variable-with-ngfor
https://angular.io/guide/template-syntax#ref-vars

*/
