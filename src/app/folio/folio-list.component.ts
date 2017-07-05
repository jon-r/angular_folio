import { Component, OnInit } from '@angular/core';
import { useAnimation, transition, trigger, state, style } from '@angular/animations';

import { ActivatedRoute, ParamMap } from '@angular/router';

import { expand, shrink, fade } from '../animations';
import { MotionService } from '../shared/motion.service';

import { FolioService } from './folio.service';

@Component({
  selector: 'app-folio-list',
  templateUrl: './folio-list.component.html',
  styleUrls: ['./folio-list.component.css'],
  animations: [
    trigger('listAnim', [
      state('focus', style({ width: '1200px', left: 'calc(50% - 600px)' })),
      transition(':enter', [
        useAnimation(fade, {params: { from: 0, to: 1 }}),
      ]),
      transition(':leave', [
        useAnimation(fade, {params: { from: 1, to: 0 }}),
      ]),
      transition('*=>focus', [
        useAnimation(expand),
      ]),
      transition('focus=>*', [
        useAnimation(shrink),
      ]),
    ])
  ],
})
export class FolioListComponent implements OnInit {

  projects;

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
        active: null,
      };
    });
  }

  setActive(slug) {
    this.filterProjects({ key: 'slug', value: slug });
    const project = this.projects[0];

    project.computed.active = 'focus';
  }

  setCategory(category) {
    const project = this.projects[0];
    project.computed.active = null;
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
      framer: 'translateY(96px)',
    });

    this.filterProjects({value: 'all'});

    this.route.paramMap.subscribe(paramMap => this.updateFilter(paramMap));

  }


}
