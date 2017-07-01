import { Component, OnInit } from '@angular/core';

import { MotionService } from '../shared/motion.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor( private motionService: MotionService ) { }

  ngOnInit() {
    // const homePos = { home: [-6, -3], framer: [4, 5, '70deg'] };
    // this.motionService.updatePosition(homePos);
    this.motionService.transform({
      home: 'translate(calc(-50vw - 200px), -25vh)',
      framer: 'translate(calc(-60vw - 200px)) rotate(-20deg)',
    });
  }

}
