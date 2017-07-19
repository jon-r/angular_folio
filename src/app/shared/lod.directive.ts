import { Directive, ElementRef, Output, OnInit, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/combineLatest';
// import 'rxjs/add/operator/take';
// import 'rxjs/add/operator/map';

import { RouteCommsService, Dims } from '../shared/route-comms.service';

@Directive({
  selector: '[appLOD]'
})
export class LODDirective implements OnInit {
  @Output() appLOD: EventEmitter<boolean> = new EventEmitter();

  dims;

  constructor(
    private el: ElementRef,
    private routeComms: RouteCommsService,
  ) {}


  ngOnInit() {
    const el = this.el.nativeElement;
    const rect = el.getBoundingClientRect();
    const offset =  rect.top - window.innerHeight;

    const dimsSub: Observable<Dims> = this.routeComms.listDimensions$;

    const scrollSub = this.routeComms.scrollPosition$
      .combineLatest(dimsSub)
      .takeUntil(this.appLOD)
      .subscribe(arr => {
        const mq = arr[1].query;
        const willSkip = el.classList.contains('hide-small');
        const skipSmall = (mq === 'mobile' && willSkip);

        this.appLOD.emit(!skipSmall);
      });

    // .subscribe(dims => {
    //   this.dims = dims;
    //   console.log(this.dims);
    // });





  }

}

// todo: some way to skip loading on demand? eg if screen is too small.
