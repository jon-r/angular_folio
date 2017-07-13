// todo -> clicking outside a focussed element closes it. some background element?

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { useAnimation, transition, trigger, state, style, group } from '@angular/animations';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { RouteCommsService } from '../shared/route-comms.service';
import { fade, duration, staggerChildren, slide, fadeIn, fadeOut } from '../shared/animations';

import { FolioService } from './folio.service';

@Component({
  selector: 'app-folio-list',
  templateUrl: './folio-list.component.html',
  styleUrls: ['./folio-list.component.css'],
  animations: [
    trigger('listAnim', [
      transition(':enter', fadeIn),
      transition(':leave', fadeOut),
      transition('out=>in', useAnimation(staggerChildren)), // staggers entry
    ]),
    trigger('listInner', [
      state('in', style({ width: '100%', height: '320px' })),
      state('out', style('*')),
      transition('*=>*', useAnimation(duration)),
    ]),
    trigger('projectDetail', [
      transition(':enter', group([
        useAnimation(slide, {params: { from: 'translateY(-40px)'}}),
        fadeIn,
      ])),
      transition(':leave', fadeOut),
    ])
  ],
})
export class FolioListComponent implements OnInit {
  @ViewChild('projectFrame') projectEl: ElementRef;

  projects: Array<any>;
  folioHeight = 0;

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

    this.projects.forEach((project, n) => {
      project.computed = {
        style: { transform: `translateY(${n * 256}px)`, 'transition-delay': `${n * 50}ms` },
        active: 'out',
      };
      project.rows.forEach(row => row.isActive = false);
    });
  }

  trackProjects(n, project) {
    return project.id;
  }

  setActive(slug) {
    this.filterProjects({ key: 'slug', value: slug });
    const project = this.projects[0];
    project.computed.active = 'in';

    setTimeout(() => {
      const h = this.projectEl ? this.projectEl.nativeElement.clientHeight : 0;
      this.folioHeight = h;
    }, 400);
  }

  setCategory(category) {
    const project = this.projects[0];
    project.computed.active = 'out';
    this.filterProjects({ value: category });

    this.folioHeight = this.projects.length * 256;
  }

  updateFilter(paramMap) {
//    this.scrollTo(0);
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

    this.route.paramMap.subscribe(paramMap => this.updateFilter(paramMap));

  }




}
