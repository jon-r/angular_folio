import { Injectable } from '@angular/core';
import { Button } from './button'
import { BUTTONS } from './button-list'


@Injectable()
export class ButtonService {

 // private btns: string[] = ['home', 'about', 'folio'];

//  private btnArr: Button[] = [];


  init() {
    return Promise.resolve(BUTTONS);

/*    for (let i in this.btns) {
      let out = new Button(this.btns[i], 'temp-' + this.btns[i]);
      this.btnArr.push(out);

    }*/
  //  console.info(this.btnArr);
  //  return this.btnArr;
  }

}

/*
TO DO:

on init: setGrid, setPositions, updateTranslates;

on resize: setGrid, updateTranslates;

on newpage: setPositions, updateTranslates;


*/
