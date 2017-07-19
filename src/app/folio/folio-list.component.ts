
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { RouteCommsService } from '../shared/route-comms.service';

import { FolioService } from './folio.service';

@Component({
  selector: 'app-folio-list',
  templateUrl: './folio-list.component.html',
  styleUrls: ['./folio-list.component.css', '../shared/content-style.css'],
})
export class FolioListComponent implements OnInit {

  projects: Array<any>;
  folioHeight;
  activeProject;
  size;

  filters = ['all', 'work', 'play'];
  category = 'all';

  constructor(
    private route: ActivatedRoute,
    private folioService: FolioService,
    private routeCommsService: RouteCommsService,
  ) { }

  filterProjects({key = 'cat', value}) {
    if (key === 'cat') {
      this.category = value;
    }

    this.projects = this.folioService.getFilteredList({ key, value });
  }

  trackProjects(n, project) {
    return project.id;
  }

  setActive(slug) {
    this.filterProjects({ key: 'slug', value: slug });
    this.activeProject = slug;
  }

  setCategory(category) {
    this.activeProject = null;
    this.filterProjects({ value: category });

    if (this.size) {
      this.setFolioHeight(this.projects.length * this.size);
    }
  }

  setFolioHeight(n) {
    this.folioHeight = n;
  }

  setFilter(paramMap) {
    this.routeCommsService.updateScrollPos(0);

    switch (true) {
    case (paramMap.has('project')):
      return this.setActive(paramMap.get('project'));
    case (paramMap.has('category')):
      return this.setCategory(paramMap.get('category'));
    default:
      return this.setCategory('all');
    }
  }



// http://slides.yearofmoo.com/ng4-animations-preview/demo/

  ngOnInit() {

    this.route.paramMap.subscribe(paramMap => this.setFilter(paramMap));

    this.routeCommsService.listDimensions$.subscribe(dims => {
      const n = this.projects.length;

      this.size = dims.height;

      this.setFolioHeight(n * this.size);

    });



  }




}
