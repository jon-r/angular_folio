import { Component, OnInit } from '@angular/core';


import About from './about';

import { MotionService } from '../shared/motion.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {

  about = About;

  constructor(private motionService: MotionService) { }

// TODO need to consider the main maenu responisively on this page

  ngOnInit() {
    this.motionService.transform({
      home: 'translate(-32px, calc(142px - 100vh))',
      framer: 'translateX(calc(50% - 612px))',
    });
  }

}
