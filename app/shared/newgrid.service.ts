import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NewGridService {

  private grid = new Subject<number[]>();

  gridOutput$ = this.grid.asObservable();

  setGrid() {
    let out = [ window.innerWidth / 10, window.innerHeight / 10 ];
    this.grid.next(out);
  }
}
