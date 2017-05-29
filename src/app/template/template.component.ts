import { Component, OnInit, Input } from '@angular/core';

import { TemplateContent } from './template-content';
import { CachedHttpService } from '../shared/cached-http.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
})
export class TemplateComponent implements OnInit {
  @Input() templateUrl: string;

  template: TemplateContent;

  constructor(
    private cachedHttpService: CachedHttpService,
  ) {}

  ngOnInit() {
    this.cachedHttpService.getObservable(this.templateUrl)
      .subscribe(template => this.template = template);
  }

};
