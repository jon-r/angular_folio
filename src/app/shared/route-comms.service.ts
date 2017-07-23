import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

export interface Dims {
  height: number;
  width: number;
  query: string;
}

@Injectable()
export class RouteCommsService {

  listDimensions$: Observable<Dims>;
  private listDims: BehaviorSubject<Dims>;
  private sizes: Map<string, number>;

  scrollPosition$: Observable<number>;
  private scrollPos: BehaviorSubject<number>;

  scrollSetTo$: Observable<number>;
  private scrollTo: BehaviorSubject<number>;


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


    this.scrollTo = new BehaviorSubject(0);
    this.scrollSetTo$ = this.scrollTo.asObservable();

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
  // scroll position value TO the content
  updateScrollPos(pos) {
    this.scrollPos.next(pos);
  }
  // scroll position set FROM the content
  setScrollTo(pos) {
    this.scrollTo.next(pos);
  }

}
