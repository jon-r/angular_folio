import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-image',
  template: `<div>image</div>`,
  styleUrls: ['./template.component.css']
})
export class TemplateImageComponent implements OnInit {
  @Input() data;

  constructor() { }

  ngOnInit() {
  }

}
