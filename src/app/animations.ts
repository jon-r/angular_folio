
import {animation, style, animate} from '@angular/animations';

const defaultTime = '300ms ease-out';

export const fadeAnimation = animation([
  style({ opacity: '{{from}}' }),
  animate('{{ time }}', style({ opacity: '{{to}}' }))
], {params: { time: defaultTime }});

export const transitionAnimation = animation([
  animate('{{ time }}', style({ transform: '{{transform}}' }))
], {params: { time: defaultTime }});
