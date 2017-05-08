import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MotionService } from '../shared/motion.service';
import { CachedHttpService } from '../shared/cached-http.service';
import { TemplateContent } from '../shared/template-content';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [CachedHttpService]
})
export class AboutComponent implements OnInit {

  aboutTemplate: Observable<TemplateContent>;

  constructor(
    private motionService: MotionService,
    private cachedHttpService: CachedHttpService
  ) { }

  ngOnInit() {

    const aboutPos = { home: [-.5, -.5], framer: [3, 5, '-90deg' ]};
    this.motionService.updatePosition(aboutPos);

    const url = '../assets/about-me.json';
    this.aboutTemplate = this.cachedHttpService.getFrom(url).data;

  }

}
