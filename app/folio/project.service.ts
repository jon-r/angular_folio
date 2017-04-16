import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { FolioProject } from './project';

@Injectable()
export class FolioProjectService {

  private dataUrl = 'static/projects-list.json';

  constructor(private http: Http) {}

  getProjects(): Promise<FolioProject[]> {
    return this.http.get(this.dataUrl)
      .toPromise()
      .then(response => response.json().data as FolioProject[])
      .catch(this.handleError);
  }

  getProject(id: number): Promise<FolioProject> {
    return this.getProjects()
      .then(projects => projects.find(project => project.id === id));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
