
import {animation, style, animate, stagger } from '@angular/animations';

const defaultTime = '300ms ease-out';

export const fadeAnimation = animation([
  style({ opacity: '{{from}}' }),
  animate('{{ time }}', style({ opacity: '{{to}}' }))
], {params: { time: defaultTime }});

export const widthAnimation = animation([
  style({ left: '*', width: '*' }),
  animate('{{ time }}', style({ width: '{{width}}px', left: 'calc(50% - {{left}}px)', background: 'red' }))
], {params: { time: defaultTime }});

// https://www.yearofmoo.com/2017/06/new-wave-of-animation-features.html#programmatic-animations-with-animationbuilder
//  look into this for varible positions???
