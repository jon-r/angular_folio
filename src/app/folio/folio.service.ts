import { Injectable } from '@angular/core';

import projectsList from './projects';

@Injectable()
export class FolioService {

  private projects = [].concat(projectsList).sort((a, b) => a.id - b.id);

  constructor() { }

  getList() {
    return this.projects;
  }

  getFilteredList({key = 'cat', value}) {
    if (value === 'all') {
      return this.projects;
    }
    return this.projects.filter(project => project[key] === value);
  }

}
