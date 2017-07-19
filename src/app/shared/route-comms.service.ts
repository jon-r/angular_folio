import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/observable/fromEvent';

export interface Dims {
  height: number;
  width: number;
  query: string;
}

@Injectable()
export class RouteCommsService {

  /* OLD ------------- */
//  private msgSrc = new Subject<RouteMsg>();
//  msgOutput$ = this.msgSrc.asObservable();

//  private scrollToSrc = new Subject<number>();
//  scrollToOutput$ = this.scrollToSrc.asObservable();

//  private scrollPosSrc = new Subject<number>();
//  scrollPosOutput$ = this.scrollPosSrc.asObservable();

//  private width = new Subject<string>();
//  widthOutput$ = this.width.asObservable();
  /* OLD ------------- */

  listDimensions$: Observable<Dims>;
  private listDims: BehaviorSubject<Dims>;
  private sizes: Map<string, number>;

  scrollPosition$: Observable<number>;
  private scrollPos: BehaviorSubject<number>;

  constructor() {

    this.sizes = new Map([
      ['mobile', 168],
      ['tablet', 192],
      ['screen', 256],
    ]);

    const firstDims = this.setDims();

    this.listDims = new BehaviorSubject(firstDims);
    this.listDimensions$ = this.listDims.asObservable();

    this.scrollPos = new BehaviorSubject(0);
    this.scrollPosition$ = this.scrollPos.asObservable();

  }

  setDims(): Dims {
    const width = window.innerWidth;

    const setQuery = (vw) => {
      switch (true) {
      case (vw < 800):
        return 'mobile';
      case (vw < 1100):
        return 'tablet';
      default:
        return 'screen';
      }
    };

    const query = setQuery(width);
    const height = this.sizes.get(query);

    return { width, height, query };
  }

  updateDims() {
    const dims = this.setDims();
    this.listDims.next(dims);
  }

  updateScrollPos(pos) {
    this.scrollPos.next(pos);
  }


  // older below
//  emitStates(msg: RouteMsg) {
//    this.msgSrc.next(msg);
//  }

//  emitScrollTo(scrollTo: number) {
//    this.scrollToSrc.next(scrollTo);
//  }
//
//  emitScrollPos(scrollPos: number) {
//    this.scrollPosSrc.next(scrollPos);
//  }
//
//  emitWidth(vw: string) {
//    console.log(vw);
//    this.width.next(vw);
//  }

}


//  private motionSrc = new Subject<ElTransform>();
//  motionOutput$ = this.motionSrc.asObservable();
//
//  transform(elements: ElTransform) {
//    // const out: ElTransform = { home: null, framer: null,  };
//    // Object.keys(elements).forEach(el => out[el] = { transform: elements[el] });
//    this.motionSrc.next(elements);
//  }
