import { Injectable } from '@angular/core';
import { Buttons } from './buttons'; //
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ButtonService {
  private btnSrc = new Subject<Buttons>();
  buttonOutput$ = this.btnSrc.asObservable();

  setButtons(buttons:Buttons) {

    this.btnSrc.next(buttons);

  }
}
