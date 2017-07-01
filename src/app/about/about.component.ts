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
    this.motionService.transform({
      home: 'translate(-32px, calc(142px - 100vh))',
      framer: 'translate(500px, -25vh)',
    });
  }

}
