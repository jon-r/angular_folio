import { Injectable } from '@angular/core';
import { Buttons } from './button';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ButtonService {

  private grid : number[];
  private btnStore: Buttons;
  private btnSrc = new Subject<Buttons>();

  buttonOutput$ = this.btnSrc.asObservable();

  setGrid() {

    this.grid = [ window.innerWidth / 10, window.innerHeight / 10 ]

    if (this.btnStore) {
      this.setButtons(this.btnStore);
    }

  }

  setButtons(buttons:Buttons) {
    let out : Buttons = {home: null ,about: null ,folio: null,framer: null };

    this.btnStore = buttons;


    for (let btn in buttons) {
      out[btn] = this.calcPos(buttons[btn]);

    }
    this.btnSrc.next(out)

   // setTimeout(() => this.btnSrc.next(out), 200);
  }


  private calcPos(coords:number[]) {

    let arr: number[] = [], rotate: string = '', barLength: string = null;


    if (coords.length > 2) {
      rotate = 'rotate(90deg)'
      barLength = '60vh';
    }

    coords.forEach((el,i) => arr[i] = this.grid[i] * el);

    return {
      'transform' : `translate(${arr[0]}px, ${arr[1]}px) ${rotate}`,
      'width' : barLength
    };

  }

}
