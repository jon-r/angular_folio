
import {animation, style, animate, stagger } from '@angular/animations';

const defaultTime = '300ms ease-out';

export const enter = animation([
  style({ opacity: 0, transform: 'none' }),
  animate(defaultTime, style('*')),
]);

export const leave = animation([
  style('*'),
  animate(defaultTime, style({ opacity: 0 })),
]);

export const focus = animation([
  style('*'),
  animate(defaultTime, style({ width: '1200px', left: 'calc(50% - 600px)' })),
]);

// todo this wont work responsively. probably redo with percentages/vw and media query the content
export const unfocus = animation([
  style({ width: '1200px', left: 'calc(50% - 600px)' }),
  animate(defaultTime, style('*')),
]);





//  DONT DELETE WILL USE STAGGERING ON PAGES





// const defaultStagger = '150ms';

// export const fadeAnimation = animation([
//   style({ opacity: '{{from}}' }),
//   animate('{{ time }}', style({ opacity: '{{to}}' }))
// ], {params: { time: defaultTime }});
//
// export const fadeStaggered = animation([
//   style({ opacity: '{{from}}' }),
//   stagger('{{stagger}}', [
//     animate('{{ time }}', style({ opacity: '{{to}}' }))
//   ])
// ], {params: { time: defaultTime, stagger: defaultStagger }});

// export const widthAnimation = animation([
//   style({ left: '*', width: '*' }),
//   animate('{{ time }}', style({ width: '{{width}}px', left: 'calc(50% - {{left}}px)', background: 'red' }))
// ], {params: { time: defaultTime }});

// https://www.yearofmoo.com/2017/06/new-wave-of-animation-features.html#programmatic-animations-with-animationbuilder
//  look into this for varible positions???
