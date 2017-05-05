import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TemplateComponent } from '../template/template.component';
import { AppMotionService } from '../app-motion.service';
import { CachedHttpService } from '../shared/cached-http.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {



  constructor(
    private motionService: AppMotionService,
    private cachedHttpService: CachedHttpService
  ) { }

  ngOnInit() {

    const aboutPos = { home: [-.5, -.5], framer: [3, 5, '-90deg' ]};
    this.motionService.updatePosition(aboutPos);

  }

}
