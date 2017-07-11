
import {animation, style, animate, stagger, query, animateChild } from '@angular/animations';

const defaultTime = '300ms ease-out';
const defaultStagger = '150ms';

export const fade = animation([
  style({ opacity: '{{from}}' }),
  animate('{{ time }}', style({ opacity: '{{to}}' }))
], {params: { time: defaultTime }});

export const slideIn = animation([
  style({ transform: '{{from}}'}),
  animate('{{ time }}', style({ transform: '*' })),
], {params: { time: defaultTime }});

export const duration = animation(
  animate('{{ time }}'), {params: { time: defaultTime }}
);

export const fadeStagger = animation([
  style({ opacity: '{{from}}' }),
  stagger(defaultStagger, [
    animate('{{ time }}', style({ opacity: '{{to}}' }))
  ])
]);

export const staggerChildren = animation([
  query('@*', stagger(defaultStagger, animateChild()))
]);



// non angular animation shindigs
// export function lerpLoop({ from, to }, speed: number) {
//   if (from === to) {
//     return false;
//   }
//
//   const multiplier = 100 / speed;
//   const lerp = (start, finish) => ((1 - multiplier) * start) + (multiplier * finish);
//
//   from = Math.floor(lerp(from, to));
//
//   console.log(from);
//   requestAnimationFrame(() => lerpLoop({ from , to }, speed));
//   // setTimeout(() => lerpLoop(from, to, speed), 100);
//   // return true
// }


// https://www.yearofmoo.com/2017/06/new-wave-of-animation-features.html#programmatic-animations-with-animationbuilder
//  look into this for varible positions???
