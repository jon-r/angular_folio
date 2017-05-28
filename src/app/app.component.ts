import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';

import { MotionService } from './shared/motion.service';

import jr_grid from '../assets/jr_grid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  els = {
    home: null,
    framer: null
  };

  constructor( private appMotion: MotionService) {}


  ngOnInit(): void {

    this.appMotion.motionOutput$
      // .debounceTime(200)
      .subscribe(els => this.els = els);

    // jr_grid();

  }


}
