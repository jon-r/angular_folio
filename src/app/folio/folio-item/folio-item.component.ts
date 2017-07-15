import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';

// todo close button(s) arent getting the category?
// todo FLIP the background on tiles (scale calc).
// need to rejig some parts, potentially losing the texture bg on blackjack

import { AnimationBuilder, AnimationPlayer, useAnimation, transition, trigger, state, style, group } from '@angular/animations';
import { duration, staggerChildren, slide, fadeIn, fadeOut } from '../../shared/animations';

@Component({
  selector: 'app-folio-item',
  templateUrl: './folio-item.component.html',
  styleUrls: [ './folio-item.component.css'],
  animations: [
    trigger('listAnim', [
      transition(':enter', fadeIn),
      transition(':leave', fadeOut),
      transition('out=>in', useAnimation(staggerChildren)),
    ]),
    trigger('listInner', [
      state('in', style({ width: '100%', height: '320px' })),
      state('out', style('*')),
      transition('*=>*', useAnimation(duration)),
    ]),
    trigger('projectDetail', [
      transition(':enter', group([
        useAnimation(slide, {params: { from: 'translateY(-40px)'}}),
        fadeIn,
      ])),
      transition(':leave', fadeOut),
    ])
  ],
})
export class FolioItemComponent implements OnInit {
  @ViewChild('projectFrame') projectEl: ElementRef;

  @Input() project;

  @Input('listIndex')
  set updateStyle(n: number) {
    this.style = {
      transform: `translateY(${n * 256}px)`,
      'transition-delay.ms': n * 50,
    };
  }

  @Input('activeProject')
  set setActive(slug: string) {
    if (slug === this.project.slug) {
      this.state = 'in';
      this.emitHeight();
    } else {
      this.state = 'out';
    }
  }

  @Output() updateActive = new EventEmitter<number>();

  style;
  state;

  constructor() {
    this.state = 'out';
  }

  emitHeight() {
    // TODO not be a timeout? some better event
    setTimeout(() => {
      const h = this.projectEl.nativeElement.clientHeight || 0;
      this.updateActive.emit(h);
    }, 400);
  }

  ngOnInit() {
    this.project.rows.forEach(row => row.isActive = false);
  }

}
