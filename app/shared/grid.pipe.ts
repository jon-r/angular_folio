import { Pipe, PipeTransform } from '@angular/core';
import { WindowRefService }   from './window-ref.service';

@Pipe({name: 'screenGrid'})
export class ScreenGridPipe implements PipeTransform {

/*  private _window: Window;

  constructor(private windowRef: WindowRefService) {
    this._window = windowRef.nativeWindow;
  }*/

  transform(value: number[]) : number[] {
    let x = value[0] * window.innerWidth / 10,
      y = value[1] * window.innerHeight / 10;

    return [x,y];

  }

}




