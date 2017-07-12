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

  private scrollSrc = new Subject<number>();
  scrollOutput$ = this.scrollSrc.asObservable();

  emitStates(msg: RouteMsg) {
    this.msgSrc.next(msg);
  }

  emitScroll(scroll: number) {
    this.scrollSrc.next(scroll);
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
