import { Directive, ElementRef, Output, OnInit, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/combineLatest';

import { RouteCommsService, Dims } from '../shared/route-comms.service';

@Directive({
  selector: '[appLOD]'
})
export class LODDirective implements OnInit {
  @Output() appLOD: EventEmitter<boolean> = new EventEmitter();

  dimsSub: Observable<Dims>;
  scrollSub: Observable<number>;

  constructor(
    private el: ElementRef,
    private routeComms: RouteCommsService,
  ) {}

  ngOnInit() {


    this.dimsSub = this.routeComms.listDimensions$;
    this.scrollSub = this.routeComms.scrollPosition$;

    const el = this.el.nativeElement;
    const offset = el.getBoundingClientRect().top - window.innerHeight;

    this.scrollSub.combineLatest(this.dimsSub)
      .takeUntil(this.appLOD)
      .subscribe(arr => {
        const scroll = arr[0];

        if (scroll > offset) {
          const mq = arr[1].query;
          const willSkip = el.classList.contains('hide-small');
          const skipSmall = (mq === 'mobile' && willSkip);

          this.appLOD.emit(!skipSmall);
        }
      });
  }


}
