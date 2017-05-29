import { Component, OnInit, Input } from '@angular/core';

import { TemplateContent } from './template-content';
import { CachedHttpService } from '../shared/cached-http.service';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
})
export class TemplateComponent implements OnInit {
  @Input() templateUrl: string;

  template: any;

  constructor(
    private cachedHttpService: CachedHttpService,
  ) {
    this.template = new Subject();
  }

  ngOnInit() {
    this.cachedHttpService.getObservable(this.templateUrl)
      .subscribe(template => this.template = template);
  }

};
