import { Injectable } from '@angular/core';
import { GridItem } from './grid-item';

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

  private update() {


    let arr: number[] = [0,0], coordStr: string;

    arr = this.el.coords.map(x => x * 10);

    coordStr = `translate(${arr[0]}vw, ${arr[1]}vh) ${this.el.rotation}`;

    this.style.transform = coordStr;

    for (let attr in this.el.extraStyle) {
      this.style[attr] = this.el.extraStyle[attr];
    }

  }


}
