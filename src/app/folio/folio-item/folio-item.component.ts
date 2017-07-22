import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';

import { AnimationBuilder, AnimationPlayer, useAnimation, transition, trigger, group } from '@angular/animations';
import { slide, fadeIn, fadeOut } from '../../shared/animations';
import { RouteCommsService } from '../../shared/route-comms.service';

@Component({
  selector: 'app-folio-item',
  templateUrl: './folio-item.component.html',
  styleUrls: [ './folio-item.component.css'],
  animations: [
    trigger('content', [
      transition(':enter', group([
        useAnimation(slide, {params: { from: 'translateY(-40px)' }}),
        fadeIn,
      ])),
      transition(':leave', fadeOut),
    ])
  ],
})
export class FolioItemComponent implements OnInit {
  @ViewChild('float') float: ElementRef;
  @ViewChild('introBG') introBG: ElementRef;
  @ViewChild('label') label: ElementRef;
  @ViewChild('icon') icon: ElementRef;

  @Input() project;
  @Input('listIndex')
  set updateStyle(n: number) {
    this.listIndex = n;
    if (this.dims) {
      this.updateSizes();
    }
  }


  @Input('activeProject')
  set setActive(slug: string) {
    if (slug === this.project.slug) {
      this.activate();
    } else {
      this.deactivate();
    }
  }

  @Output() updateActive = new EventEmitter<number>();

  listIndex;
  style;
  state;
  dims;

  constructor(
    private builder: AnimationBuilder,
    private routeCommsService: RouteCommsService,
  ) {}

  activate() {
    this.state = 'in';

    const introBG = this.introBG.nativeElement;
    const start = introBG.clientWidth;
    if (!start) {
      // to prevent the script attempting to animate hidden elements
      return false;
    }

    const fin = this.float.nativeElement.clientWidth;
    const offset = Math.min(((fin - start) / 2) - 16, 128);

    const label = this.label.nativeElement;
    const icon = this.icon.nativeElement;

    const anims = [
      { el: introBG, to: `scale(${ fin / start })` },
      { el: label, to: `translateX(${ -offset }px)` },
      { el: icon, to: `translateX(${ offset }px)` },
    ]
    .forEach(({ el, to }, i) => {
      const anim = useAnimation(slide, { params : { to: to, time: `300ms ${i * 100}ms ease-out` }});
      const factory = this.builder.build(anim);
      const player: AnimationPlayer = factory.create(el, {});

      player.play();

      if (i === 0) {
        player.onDone(() => this.emitHeight());
      }
    });
  }

  deactivate() {
    this.state = 'out';


    const introBG = this.introBG.nativeElement;
    const label = this.label.nativeElement;
    const icon = this.icon.nativeElement;

    const anims = [
      introBG,
      label,
      icon,
    ].forEach((el) => {
      const anim = useAnimation(slide, { params : { to: 'none' }});
      const factory = this.builder.build(anim);
      const player = factory.create(el, {});

      player.play();
    });
  }

  updateSizes() {
    const n = this.listIndex;

    this.style = {
      transform: `translateY(${n * this.dims.height}px)`,
      'transition-delay.ms': n * 50,
    };

    if (this.state === 'in') {
      this.activate();
    }
  }

  emitHeight() {
    if (this.state === 'in') {
      const h = this.float.nativeElement.clientHeight || 0;
      this.updateActive.emit(h);
    }
  }

  ngOnInit() {
    this.routeCommsService.listDimensions$.subscribe(dims => {
      this.dims = dims;
      this.updateSizes();
    });
  }

}
