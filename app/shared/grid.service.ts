import { Injectable } from '@angular/core';
import { GridItem } from './grid-item';
import { ScreenGridPipe } from './grid.pipe';
//import { Subject } from 'rxjs/Subject';
//import { Observable } from 'rxjs/Observable';

@Injectable()
export class GridService {

  constructor() {
    this.el = {
      coords : [],
      rotation: '',
      extraStyle: {}
    }
    this.style = {}

  }

  private grid : number[];
  private el : GridItem;
  public style;

  setPos(coords: number[], extra? ) {
    this.el.coords = coords;

    if (extra) {
      if ('reset' in extra) {
        this.el.extraStyle = {}
        this.el.rotation = '';
        this.style = {}
      } else {

        this.el.extraStyle = extra;
        if ('rotate' in extra) {
          this.el.rotation = `rotate(${extra.rotate}deg)`;
        }
      }

    }
    this.update();
  }

  setGrid(grid) {
    this.grid = grid;

    this.update();
  }

  private update() {


    let arr: number[] = [0,0], coordStr: string;

    arr = new ScreenGridPipe().transform(this.el.coords);

    coordStr = `translate(${arr[0]}px, ${arr[1]}px) ${this.el.rotation}`;

    this.style.transform = coordStr;

    for (let attr in this.el.extraStyle) {
      this.style[attr] = this.el.extraStyle[attr];
    }

  }


}
