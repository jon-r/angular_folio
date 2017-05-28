import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-svg',
  template: `<div>svg</div>`,
  styleUrls: ['./template.component.css']
})
export class TemplateSvgComponent implements OnInit {
  @Input() data;

  constructor() { }

  ngOnInit() {
  }

}
