import { Directive, ElementRef, Output, AfterViewInit, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs/Observable';
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

  ngAfterViewInit() {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const offset =  rect.top - window.innerHeight;

    this.routeComms.scrollPosOutput$
    .takeUntil(this.appLOD) // only needs to watch once
    .subscribe((n) => {
      if (n > offset) {
        this.appLOD.emit(true);
      }
    });



  }

}
