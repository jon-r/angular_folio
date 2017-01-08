import { Injectable } from '@angular/core';
import { GridItem } from './grid-item';
//import { Subject } from 'rxjs/Subject';
//import { Observable } from 'rxjs/Observable';

@Injectable()
export class GridItemService {

  constructor(coords) {
    this.el = {
      coords : coords,
      rotation: '',
      extraStyle: {}
    }
    this.style = {}
  }

  private grid : number[];
  public el : GridItem;
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
    if (this.grid) this.update();
  }

  setGrid(grid) {
    this.grid = grid;

    this.update();
  }

  private update() {

    let arr: number[] = [0,0], coordStr: string;

    for (let i = 0; i < 2; i++) {
      arr[i] = this.grid[i] * this.el.coords[i];
    }
    coordStr = `translate(${arr[0]}px, ${arr[1]}px) ${this.el.rotation}`;

    this.style.transform = coordStr;

    for (let attr in this.el.extraStyle) {
      this.style[attr] = this.el.extraStyle[attr];
    }


  }


}
