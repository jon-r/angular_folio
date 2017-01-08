import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'screenGrid'})
export class ScreenGridPipe implements PipeTransform {

  transform(value: number[]) : number[] {
    let x = value[0] * window.innerWidth / 10,
      y = value[1] * window.innerHeight / 10;

    return [x,y];

  }

}
