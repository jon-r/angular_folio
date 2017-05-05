import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishReplay';

import { FolioProject } from '../folio/folio-project';
import { TemplateContent } from '../dynamic-template/template-content';

@Injectable()
export class CachedHttpService {

  private dataCache: Observable<any> = null;

  constructor(private http: Http) { }

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


  getProjects(): Observable<FolioProject[]> {
    const url = '../assets/projects-list.json';
    return this.getCached(url);
  }

  getFilterProjects(cat): Observable<FolioProject[]> {
    return this.getProjects()
    .map(projects => projects
      .filter(project => project['cat'] === cat ));
  }

// depreciated
  getProject(n) {
    return this.getProjects()
    .map(projects => projects
      .find(project => project['id'] === +n ));
  }

  getTemplate(ref): Observable<TemplateContent> {
    const url = `../assets/${ref}/template.json`;
    return this.getCached(url);
  }

}
