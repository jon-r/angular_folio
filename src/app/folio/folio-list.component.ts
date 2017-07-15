// todo -> clicking outside a focussed element should close it. some background element?

import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { RouteCommsService } from '../shared/route-comms.service';

import { FolioService } from './folio.service';

@Component({
  selector: 'app-folio-list',
  templateUrl: './folio-list.component.html',
  styleUrls: ['./folio-list.component.css'],
})
export class FolioListComponent implements OnInit {

  projects: Array<any>;
  folioHeight;
  activeProject;

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
    this.setFolioHeight(this.projects.length * 256);
  }

  setFolioHeight(n) {
    this.folioHeight = n;
  }

  setFilter(paramMap) {
    this.routeCommsService.emitScrollTo(0);

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

    this.filterProjects({value: 'all'});

    this.route.paramMap.subscribe(paramMap => this.setFilter(paramMap));

  }




}
