import { Injectable } from '@angular/core';
import { Positions } from './positions'
import { Button } from './button'
import { BUTTONS } from './button-list'

@Injectable()
export class ButtonService {

  private grid;
  private buttons: Button;


  init(): Promise<Button> {
    return Promise.resolve(BUTTONS);
  }

  setGrid(window) {
    let width = window.target.innerWidth;
    let height = window.target.innerHeight;

    let squareDims = 20;
    let xCount = Math.floor(width / squareDims);
    let yCount = Math.floor(height / squareDims);

    this.grid = {
      squareDims : squareDims,
      count: [xCount, yCount]
    };
  }

  setPositions(posGroup:Positions) {

    for (let pos in posGroup) {
      this.buttons[pos] = this.setPosition(posGroup[pos]);
    }

  };

  setPosition(position:number[]) {

    let arr: number[];

    for (let i = 0; i < 2; i ++) {
      let n = (position[i] > 0) ? position[i] : this.grid.count[i] - position[i];
      arr[i] = n * this.grid.squareDims;
    }

    return `translate(${arr.join('px,')}px)`;

  }

  update() {

  }

}



/*
TO DO:

on init: setGrid, setPositions, updateTranslates;

on resize: setGrid, updateTranslates;

on newpage: setPositions, updateTranslates;


*/
