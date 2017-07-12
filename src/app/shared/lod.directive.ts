import { Directive, ElementRef, Output, AfterViewInit, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs/Observable';
// import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { RouteCommsService } from '../shared/route-comms.service';

@Directive({
  selector: '[appLOD]'
})
export class LODDirective implements AfterViewInit {
  @Output() appLOD: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private el: ElementRef,
    private routeComms: RouteCommsService,
  ) {}

  private isInViewPort(): boolean {
    const rect = this.el.nativeElement.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  ngAfterViewInit() {
    this.routeComms.scrollPosOutput$
      .takeUntil(this.appLOD) // only needs to watch once
      .subscribe(() => {
        if (this.isInViewPort()) {
          this.appLOD.emit(true);
        }
      });
  }

}
