import { Component, OnInit, Input } from '@angular/core';

import { TemplateContent } from './template-content';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  @Input() template: TemplateContent;

  constructor() { }

  ngOnInit() { }

};
