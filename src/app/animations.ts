
import {animation, style, animate, stagger } from '@angular/animations';

const defaultTime = '300ms ease-out';
const defaultStagger = '200ms';

export const fade = animation([
  style({ opacity: '{{from}}' }),
  animate('{{ time }}', style({ opacity: '{{to}}' }))
], {params: { time: defaultTime }});

export const expand = animation([
  style('*'),
  animate(defaultTime, style({ width: '1200px', left: 'calc(50% - 600px)' })),
]);

// todo this wont work responsively. probably redo with percentages/vw and media query the content
export const shrink = animation([
  style({ width: '1200px', left: 'calc(50% - 600px)' }),
  animate(defaultTime, style('*')),
]);

export const fadeStagger = animation([
  style({ opacity: '{{from}}' }),
  stagger(defaultStagger, [
    animate('{{ time }}', style({ opacity: '{{to}}' }))
  ])
], {params: { time: defaultTime }});



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
