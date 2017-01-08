import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GridService {
  private grid = new Subject<number[]>();
  gridOutput$ = this.grid.asObservable();

  setGrid() : void {
    this.grid.next([ window.innerWidth / 10, window.innerHeight / 10 ]);
  }

}

