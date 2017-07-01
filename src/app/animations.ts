// import { AnimationEntryMetadata } from '@angular/core';
import { animate, state, style, transition, trigger, stagger, AnimationMetadata } from '@angular/animations';

// Component transition animations
export const fadeInOutAnimation: AnimationMetadata =
  trigger('routeAnimation', [
    state('*',
      style({
        opacity: 1
      })
    ),
    transition(':enter', [
      style({
        opacity: 0
      }),
      animate('0.3s ease-in')
    ]),
    transition(':leave', [
      animate('0.5s ease-out', style({ opacity: 0 }))
    ])
  ]);

export const slideInOutAnimation: AnimationMetadata =
  trigger('listState', [
    state('*', style({ opacity: 1})),
    transition(':enter', [
      style({
        transform: 'none',
      }),
      animate('0.3s ease-in-out'),
    ]),
    transition(':leave', [
      animate(100, style({
        opacity: 0,
      })),
    ]),
  ]);
