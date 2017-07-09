import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';

import { MotionService } from './shared/motion.service';
import { ElTransform } from './shared/el-transform';

import JRGrid from '../assets/jr_grid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  els: ElTransform = {
    home: null,
    gridMask: null,
    framer: null,
  };

  grid;

  constructor( private appMotion: MotionService) {}


  ngOnInit(): void {

    this.appMotion.motionOutput$
      .debounceTime(50)
      .subscribe(els => {
        this.els = els;
        this.grid.setRange(els.gridMask);
      });

    this.grid = new JRGrid({});
    this.grid.begin();

  }


}
