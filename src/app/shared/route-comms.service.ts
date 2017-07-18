import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

export class RouteMsg {
  constructor(
    public sidebar: string,
    public page: string,
  ) {}
}

@Injectable()
export class RouteCommsService {

  private msgSrc = new Subject<RouteMsg>();
  msgOutput$ = this.msgSrc.asObservable();

  private scrollToSrc = new Subject<number>();
  scrollToOutput$ = this.scrollToSrc.asObservable();

  private scrollPosSrc = new Subject<number>();
  scrollPosOutput$ = this.scrollPosSrc.asObservable();

  private width = new Subject<string>();
  widthOutput$ = this.width.asObservable();

  emitStates(msg: RouteMsg) {
    this.msgSrc.next(msg);
  }

  emitScrollTo(scrollTo: number) {
    this.scrollToSrc.next(scrollTo);
  }

  emitScrollPos(scrollPos: number) {
    this.scrollPosSrc.next(scrollPos);
  }

  emitWidth(vw: string) {
    console.log(vw);
    this.width.next(vw);
  }

}


//  private motionSrc = new Subject<ElTransform>();
//  motionOutput$ = this.motionSrc.asObservable();
//
//  transform(elements: ElTransform) {
//    // const out: ElTransform = { home: null, framer: null,  };
//    // Object.keys(elements).forEach(el => out[el] = { transform: elements[el] });
//    this.motionSrc.next(elements);
//  }
