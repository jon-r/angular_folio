import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PageSetService {

  private pageClass = new Subject<string>();

  pgClassOutput$ = this.pageClass.asObservable();

  setClass(className:string) {
    this.pageClass.next(className);
  }

}
