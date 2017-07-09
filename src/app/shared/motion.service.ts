import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { ElTransform } from './el-transform';

@Injectable()
export class MotionService {

  private motionSrc = new Subject<ElTransform>();
  motionOutput$ = this.motionSrc.asObservable();

  transform(elements: ElTransform) {
    // const out: ElTransform = { home: null, framer: null,  };
    // Object.keys(elements).forEach(el => out[el] = { transform: elements[el] });
    this.motionSrc.next(elements);
  }

}
