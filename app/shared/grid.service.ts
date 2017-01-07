import { Injectable } from '@angular/core';
import { Buttons } from './buttons'; //
import { GridItem } from './grid-item'; //
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GridService {
  private grid = new Subject<number[]>();
  gridOutput$ = this.grid.asObservable();

  setGrid() : void {
    this.grid.next([ window.innerWidth / 10, window.innerHeight / 10 ]);
  }

  private btnSrc = new Subject<Buttons>();
  buttonOutput$ = this.btnSrc.asObservable();

  setButtons(buttons:Buttons) {

    this.btnSrc.next(buttons);

  }


}


//TODO SEPERATE THE BUTTON SERVICE
