
// todo bonus: turn all this into function wrappers. to potentially remive ALL the 'useAnimation' imports

import { animation, style, animate, stagger, query, useAnimation } from '@angular/animations';

const defaultTime = '400ms ease-out';
const defaultStagger = '150ms';

export const go = {
  left: 'translateX(-100%)',
  right: 'translateX(100%)',
  up: 'translateY(-100%)',
  down: 'translateY(100%)',
};

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

export const fade = animation([
  style({ opacity: '{{from}}' }),
  animate('{{ time }}', style({ opacity: '{{to}}' }))
], {params: { time: defaultTime }});

export const fadeIn = useAnimation(fade,  { params: { from: 0, to: 1 }});
export const fadeOut = useAnimation(fade, { params: { from: 1, to: 0 }});

export const slide = animation([
  style({ transform: '{{from}}'}),
  animate('{{ time }}', style({ transform: '{{to}}' })),
], {params: { time: defaultTime, to: '*', from: '*' }});


export const duration = animation(
  animate('{{ time }}'), {params: { time: defaultTime }}
);


export const slideStagger = animation([
  style({ transform: '{{ from }}' }),
  stagger(defaultStagger, [
    animate('{{ time }}', style({ transform: '{{to}}' }))
  ])
], {params: { time: defaultTime, to: '*', from: '*' }});

/* UNUSED, kept if bug fixed in angular

export const slideChildren = animation([
  query(':enter', useAnimation(slide, {params: { from: '{{ enterFrom }}' }}), { optional: true }),
  query(':leave', useAnimation(slide, {params: { to: '{{ leaveTo }}' }}), { optional: true })
]);
*/
