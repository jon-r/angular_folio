import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

export class RouteMsg {
  constructor(
    public sidebarState: string,
    public currentPage: string,
  ) {}
}

@Injectable()
export class RouteCommsService {

  private msgSrc = new Subject<RouteMsg>();
  msgOutput$ = this.msgSrc.asObservable();

  emit(msg: RouteMsg) {
    this.msgSrc.next(msg);
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
