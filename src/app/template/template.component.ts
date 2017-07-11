import { Component, OnInit, Input } from '@angular/core';

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
