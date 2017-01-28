//CURRENTLY UNUSED. KEEPING FOR REFERENCE (fancy hover effects?);

import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({ selector: '[projectItem]' })
export class FolioTransitionDirective {
  constructor(private el: ElementRef) {}

  @Input('projectItem') position;

  @HostListener('click') onClick() {
    console.log(this);
    this.setPos();
  }

   setPos() {
     this.el.nativeElement.style.backgroundColor = 'red';
   }
}
