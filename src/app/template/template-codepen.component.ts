import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-codepen',
  template: `<div>iFrame</div>`,
  styleUrls: ['./template.component.css']
})
export class TemplateCodepenComponent implements OnInit {
  @Input() data;

  constructor() { }

  ngOnInit() {
  }

}
