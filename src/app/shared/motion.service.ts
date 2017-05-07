import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { ElTransform } from './el-transform';

@Injectable()
export class MotionService {

  private motionSrc = new Subject<ElTransform>();
  motionOutput$ = this.motionSrc.asObservable();

  private setPosition(coords: number[], rotate?: string) {

    const fullCoords = coords.map(n => n * 10);
    const str = `translate(${fullCoords[0]}vw, ${fullCoords[1]}vh)`;

    if (!rotate) {
      return str;
    }

    return `${str} rotate(${rotate})`;
  }

  updatePosition(elements: ElTransform) {

    const out: ElTransform = {
      home: {transform: ''},
      framer: {transform: ''}
    };

    Object.keys(elements).forEach(key => {

      const rotate = elements[key].splice(2)[0];

      out[key].transform = this.setPosition(elements[key], rotate);

    } );

    this.motionSrc.next(out);
    return true;

  }

}
