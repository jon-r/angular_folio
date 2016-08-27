import { Injectable } from '@angular/core';
import { Buttons } from './button';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
//import { Positions } from './positions';
//import { BUTTONS } from './button-list';



@Injectable()
export class ButtonService {


  private grid : number[];
  private btnStore: Buttons
 // private buttonPositions: Buttons = {home: '',about: '',folio: ''}

  private btnSrc = new Subject<Buttons>();

  buttonOutput$ = this.btnSrc.asObservable();

  public setGrid() {

/*    let squareDims = 20;
    let xCount =
    let yCount = window.innerHeight / 10;*/


//    this.grid.x = 10;
    this.grid = [ window.innerWidth / 10, window.innerHeight / 10 ]

    if (this.btnStore) {
      this.setButtons(this.btnStore);
    }

  }

  public setButtons(buttons:Buttons) {
    let out : Buttons = {home: null ,about: null ,folio: null };

    this.btnStore = buttons;

    for (let btn in buttons) {
      out[btn] = this.calcPos(buttons[btn]);
    }

    setTimeout(() => this.btnSrc.next(out), 200);
  }


  private calcPos(coords:number[]) {

    let arr: number[] = [];

    coords.forEach((el,i) => arr[i] = this.grid[i] * el);

    return { 'transform' : `translate(${arr.join('px,')}px)` };

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
