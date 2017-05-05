import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishReplay';

import { FolioProject } from './folio-project';

@Injectable()
export class ProjectService {

  private projectsData = '../assets/projects-list.json';
  private dataCache: Observable<FolioProject[]> = null;

  constructor(private http: Http) { }

  getProjects(): Observable<FolioProject[]> {
    if (!this.dataCache) {
      this.dataCache = this.http.get(this.projectsData)
        .map(this.extractData)
        .publishReplay(1)
        .refCount()
        .catch(this.handleError);
    }

    return this.dataCache;

  }


  // getAllProjects() {
  //     return this.projectService.getProjects();
  // }
  //
  // getProject(n) {
  //   return this.getAllProjects()
  //   .map(projects => projects.find(project => project['id'] === n ));
  // }
  //
  // getFilterProjects(cat) {
  //   return this.getAllProjects()
  //   .map(projects => projects.filter(project => project['cat'] === cat ));
  // }


  getFilterProjects(cat) {
    return this.getProjects()
    .map(projects => projects
      .filter(project => project['cat'] === cat ));
  }

  getProject(n) {
    return this.getProjects()
    .map(projects => projects
      .find(project => project['id'] === +n ));
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

}
