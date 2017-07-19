import { Directive, ElementRef, Output, OnInit, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/takeUntil';

import { RouteCommsService } from '../shared/route-comms.service';

@Directive({
  selector: '[appLOD]'
})
export class LODDirective implements OnInit {
  @Output() appLOD: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private el: ElementRef,
    private routeComms: RouteCommsService,
  ) {}


  ngOnInit() {

    const rect = this.el.nativeElement.getBoundingClientRect();
    const offset =  rect.top - window.innerHeight;

    this.routeComms.scrollPosition$
    .takeUntil(this.appLOD) // only needs to watch once
    .subscribe((n) => {
      if (n > offset) {
        this.appLOD.emit(true);
      }
    });


  }

}
