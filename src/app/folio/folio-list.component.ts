import { Component, OnInit } from '@angular/core';
import { useAnimation, transition, trigger } from '@angular/animations';

import { ActivatedRoute, ParamMap } from '@angular/router';

import { enter, leave } from '../animations';
import { MotionService } from '../shared/motion.service';

import { FolioService } from './folio.service';

@Component({
  selector: 'app-folio-list',
  templateUrl: './folio-list.component.html',
  styleUrls: ['./folio-list.component.css'],
  animations: [
    trigger('listAnim', [
      transition(':enter', [
        useAnimation(enter),
      ]),
      transition(':leave', [
        useAnimation(leave),
      ]),

    ])
  ],
})
export class FolioListComponent implements OnInit {

  projectStore;
  projects;
  activeProject;

  filters = ['all', 'work', 'play'];
  category = 'all';

  constructor(
    private route: ActivatedRoute,
    private motionService: MotionService,
    private folioService: FolioService,
  ) { }

  filterProjects({key = 'cat', value}) {
    if (key === 'cat') {
      this.category = value;
    }

    this.projects = this.folioService.getFilteredList({ key, value });

    this.projects.forEach((project, n) => {
      project.computed = {
        style: { transform: `translateY(${n * 250}px)`, 'transition-delay': `${n * 50}ms` },
        active: false,
      };
    });
  }

  setActive(slug) {
    this.filterProjects({ key: 'slug', value: slug });
    const project = this.projects[0];

    project.computed.active = true;

    this.activeProject = project;

  }

  setCategory(category) {
    const project = this.projects[0];
    project.computed.active = false;
    this.filterProjects({ value: category });
  }

  updateFilter(paramMap) {
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

    this.motionService.transform({
      home: 'translate(-32px, -16px)',
      framer: 'translate(-5vw, 96px)',
    });

    this.filterProjects({value: 'all'});

    this.route.paramMap.subscribe(paramMap => this.updateFilter(paramMap));

  }


}
