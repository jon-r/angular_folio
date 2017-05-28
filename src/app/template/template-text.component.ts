import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-text',
  template: `<div>text</div>`,
  styleUrls: ['./template.component.css']
})
export class TemplateTextComponent implements OnInit {
  @Input() data;

  constructor() { }

  ngOnInit() {
  }

}
