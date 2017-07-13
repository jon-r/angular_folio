
// todo bonus: turn all this into function wrappers. to potentially remive ALL the 'useAnimation' imports

import {animation, style, animate, stagger, query, animateChild, useAnimation, AnimationReferenceMetadata } from '@angular/animations';

const defaultTime = '400ms ease-out';
const defaultStagger = '200ms';

export const to = {
  left:  { params: { to: 'translateX(-100%)'}},
  right:  { params: { to: 'translateX(100%)'}},
  up: { params: { to: 'translateY(-100%)' }},
  down: { params: { to: 'translateY(100%)' }},
};

export const from = {
  left:  { params: { from: 'translateX(-100%)'}},
  right:  { params: { from: 'translateX(100%)'}},
  up: { params: { from: 'translateY(-100%)' }},
  down: { params: { from: 'translateY(100%)' }},
};

const fIn = { params: { from: 0, to: 1 }};
const fOut = { params: { from: 1, to: 0 }};

export const fade = animation([
  style({ opacity: '{{from}}' }),
  animate('{{ time }}', style({ opacity: '{{to}}' }))
], {params: { time: defaultTime }});
export const fadeIn = useAnimation(fade, fIn);
export const fadeOut = useAnimation(fade, fOut);

export const slide = animation([
  style({ transform: '{{from}}'}),
  animate('{{ time }}', style({ transform: '{{to}}' })),
], {params: { time: defaultTime, to: '*', from: '*' }});


export const duration = animation(
  animate('{{ time }}'), {params: { time: defaultTime }}
);

export const staggerChildren = animation(
  query('@*', stagger(defaultStagger, animateChild()))
);

export const slideStagger = animation([
  style({ transform: '{{ from }}' }),
  stagger(defaultStagger, [
    animate('{{ time }}', style({ transform: '{{to}}' }))
  ])
], {params: { time: defaultTime, to: '*', from: '*' }});


export const slideInChild = animation(
  query(':enter', useAnimation(slide, {params: { from: '{{ from }}' }}))
);
export const slideOutChild = animation(
  query(':leave', useAnimation(slide, {params: { to: '{{ to }}' }}), { optional: true })
);

// keeping if needed later

// export const fadeStagger = animation([
//   style({ opacity: '{{from}}' }),
//   stagger(defaultStagger, [
//     animate('{{ time }}', style({ opacity: '{{to}}' }))
//   ])
// ]);

// export const fadeInChild = animation(
//   query(':enter', useAnimation(fade, {params: { from: 0, to: 1 }}))
// );
// export const fadeOutChild = animation(
//   query(':leave', useAnimation(fade, {params: { from: 1, to: 0 }}), { optional: true })
// );


// https://www.yearofmoo.com/2017/06/new-wave-of-animation-features.html#programmatic-animations-with-animationbuilder
//  look into this for varible positions???
