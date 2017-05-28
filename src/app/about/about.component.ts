import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MotionService } from '../shared/motion.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {

  aboutTemplateUrl = '../assets/about-me.json';

  constructor(private motionService: MotionService) { }

  ngOnInit() {
    const aboutPos = { home: [-.5, -.5], framer: [3, 5, '-90deg'] };

    this.motionService.updatePosition(aboutPos);
  }

}
