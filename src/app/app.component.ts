import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';

import { AppMotionService } from './app-motion.service';

import jr_grid from '../assets/jr_grid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ AppMotionService ]
})
export class AppComponent implements OnInit {

  els = {
    home: null,
    framer: null
  };

  constructor( private appMotion: AppMotionService) {}


  ngOnInit(): void {

    this.appMotion.motionOutput$
      // .debounceTime(200)
      .subscribe(els => this.els = els);

    jr_grid();

  }


}
