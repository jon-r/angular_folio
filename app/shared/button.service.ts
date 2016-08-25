import { Injectable } from '@angular/core';
import { Buttons } from './button';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
//import { Positions } from './positions';
//import { BUTTONS } from './button-list';



@Injectable()
export class ButtonService {

  private grid = null
  private btnStore: Buttons
 // private buttonPositions: Buttons = {home: '',about: '',folio: ''}

  private btnSrc = new Subject<Buttons>();

  buttonOutput$ = this.btnSrc.asObservable();

  public setGrid() {

    let squareDims = 20;
    let xCount = Math.floor(window.innerWidth / squareDims);
    let yCount = Math.floor(window.innerHeight / squareDims);


    this.grid = {
      squareDims : squareDims,
      count: [xCount, yCount]
    }

    if (this.btnStore) {
      this.setButtons(this.btnStore);
    }

  }

  public setButtons(buttons:Buttons) {
    let out: Buttons = {home: '',about: '',folio: ''};

    this.btnStore = buttons;
    for (let btn in buttons) {
      out[btn] = this.calcPos(buttons[btn]);
    }

    this.btnSrc.next(out);
    //return this.btnOutput.asObservable();
  }


  private calcPos(coords:string) {
    let arrIn: string[] = coords.split(',');
    let arr: number[] = [];

    for (let i = 0; i < 2; i ++) {
      let n = (+arrIn[i] > 0) ? +arrIn[i] : this.grid.count[i] - +arrIn[i];
      arr[i] = n * this.grid.squareDims;
    }


    return `translate(${arr.join('px,')}px)`;

  }

}

//  updatePositions() {
//
//    if (this.grid && this.buttons) {
//
//
//
//      for (let pos in this.buttonPositions) {
//        //this.buttonPositions[pos] = this.calcPosition(this.buttons[pos]);
//
//        let arrIn: string[] = pos.split(',');
//        let arr: number[] = [];
//
//        for (let i = 0; i < 2; i ++) {
//          let n = (+arrIn[i] > 0) ? +arrIn[i] : this.grid.count[i] - +arrIn[i];
//          arr[i] = n * this.grid.squareDims;
//        }
//
//        set[pos] = `translate(${arr.join('px,')}px)`;
//
//        this.buttonPositions[pos] = `translate(${arr.join('px,')}px)`;
//
//      }
//
//      console.log(set);
//
//      console.info(this.buttonPositions);
//
//    }
//
//
//  };


//}



/*
TO DO:

on init: setGrid, setPositions, updateTranslates;

on resize: setGrid, updateTranslates;

on newpage: setPositions, updateTranslates;


*/
