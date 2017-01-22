import { Injectable } from '@angular/core';
import { Project } from './project';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class ProjectService {

  private dataUrl = 'app/lib/projects-list.json';

  constructor(private http: Http) { }

  getProjects(): Promise<Project[]> {
    return this.http.get(this.dataUrl)
      .toPromise()
      .then(response => response.json().data as Project[])
      .catch(this.handleError);
  }

  getProject(id: number): Promise<Project> {
    return this.getProjects()
      .then(projects => projects.find(project => project.id === id));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
