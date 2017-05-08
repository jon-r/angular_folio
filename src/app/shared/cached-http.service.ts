import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishReplay';


@Injectable()
export class CachedHttpService {

  private dataCache: Observable<any>;
  data: Observable<any>;

  constructor(private http: Http) { };

  private getCached(url): Observable<any> {

    if (!this.dataCache) {
      this.dataCache = this.http.get(url)
        .map(this.extractData)
        .publishReplay(1)
        .refCount()
        .catch(this.handleError);
    }

    return this.dataCache;

  }

  private extractData(res: Response) {
    const body = res.json();
    return body.data || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  getFrom(url) {
    this.data = this.getCached(url);
    return this;
  }

  filterBy(key, value): Observable<any> {
    if (!this.data) {
      return this.handleError('no data set');
    }

    return this.data
      .map(arrs => arrs.filter(arr => arr[key] === value));
  }

}
