import { Injectable } from '@angular/core';
import { Button } from './button';
//import { Subject } from 'rxjs/Subject';
//import { Positions } from './positions';
import { BUTTONS } from './button-list';

@Injectable()
export class ButtonService {

  private grid = null;
  private buttons: Button = null;
  private buttonPositions: Button;
//
//  buttonLayoutOutput$ = this.buttonLayout.asObservable();

  init(): Promise<Button> {
    return Promise.resolve(BUTTONS);
  }

  setGrid(window) {

    let width = window.innerWidth;
    let height = window.innerHeight;

    let squareDims = 20;
    let xCount = Math.floor(width / squareDims);
    let yCount = Math.floor(height / squareDims);

    this.grid = {
      squareDims : squareDims,
      count: [xCount, yCount]
    };

    this.updatePositions();
  }

  setLayout(posGroup:Button) {
    this.buttons = posGroup;

    this.updatePositions();
  }

  updatePositions() {

    if (this.grid && this.buttons) {



      for (let pos in this.buttonPositions) {
        //this.buttonPositions[pos] = this.calcPosition(this.buttons[pos]);

        let arrIn: string[] = pos.split(',');
        let arr: number[] = [];

        for (let i = 0; i < 2; i ++) {
          let n = (+arrIn[i] > 0) ? +arrIn[i] : this.grid.count[i] - +arrIn[i];
          arr[i] = n * this.grid.squareDims;
        }

        set[pos] = `translate(${arr.join('px,')}px)`;

        this.buttonPositions[pos] = `translate(${arr.join('px,')}px)`;

      }

      console.log(set);

      console.info(this.buttonPositions);

    }


  };


}



/*
TO DO:

on init: setGrid, setPositions, updateTranslates;

on resize: setGrid, updateTranslates;

on newpage: setPositions, updateTranslates;


*/
