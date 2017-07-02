import { Directive, ElementRef, Input, OnChanges, HostListener } from '@angular/core';
import { AnimationBuilder, AnimationPlayer, animate, style } from '@angular/animations';

@Directive({
  selector: '[appFolioListItem]',
})
export class FolioListDirective implements OnChanges {
  @Input() appFolioListItem: number;
  @Input() folioListFocus: boolean;

  currPosition = 'none';
  player: AnimationPlayer;

  constructor(
    private el: ElementRef,
    private builder: AnimationBuilder,
  ) {}

  setListPosition({ currentValue, firstChange }) {
    const oldPosition = this.currPosition;
    this.currPosition = `translateY(${currentValue * 256}px)`;

    const fadeIn = firstChange ? 0 : 1;

    return this.builder.build([
      style({
        opacity: fadeIn,
        transform: oldPosition,
      }),
      animate('300ms ease-out', style({
        opacity: 1,
        transform: this.currPosition,
      })),
    ]);
  }

  // focusItem({ currentValue, firstChange }) {
  //   if (!currentValue) return this.setListPosition({ currentValue: this.currPosition, firstChange: false });
  //
  //   const oldPosition = this.currPosition;
  //   this.currPosition = `none`;
  //
  //   return this.builder.build([
  //     style({
  //       transform: oldPosition,
  //       // width: '*',
  //     }),
  //     animate('300ms ease-out', style({
  //       transform: this.currPosition,
  //       // width: '100%',
  //     })),
  //   ]);
  // }

  runBuilder(factory) {
    if (this.player) {
      this.player.destroy();
    }
    this.player = factory.create(this.el.nativeElement, {});
    this.player.play();
  }

  ngOnChanges(changes) {
    // console.log(changes);

    if (changes.appFolioListItem) {
      const listOrder = changes.appFolioListItem;
      this.runBuilder(this.setListPosition(listOrder));
    }
    // else if (changes.folioListFocus) {
    //   const focusChange = changes.folioListFocus;
    //   this.runBuilder(this.focusItem(focusChange));
    // }
  }

  // @HostListener('click') listFocus() {
  //   this.runBuilder(this.focusItem());
  // }



}
