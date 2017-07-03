import { Component, OnInit, ViewChildren, QueryList, AfterViewInit, ElementRef } from '@angular/core';
import {useAnimation, transition, trigger, query, animateChild, group, state, stagger,
  style, animate } from '@angular/animations';


import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ActivatedRoute, ParamMap, Router, NavigationEnd } from '@angular/router';

// import { fadeInOutAnimation, slideInOutAnimation } from '../animations';
import { enter, leave } from '../animations';
import { MotionService } from '../shared/motion.service';
import { CachedHttpService } from '../shared/cached-http.service';
import { FolioProject } from './folio-project';
// import { FolioListDirective } from './folio-list.directive';

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
export class FolioListComponent implements OnInit, AfterViewInit {

  projects;
  // projectsList$ = this.projects.asObservable();

  projectsUrl = '../assets/projects-list.json';

  filters = ['all', 'work', 'play'];
  category = 'all';
  allProjects;
  activeChild;
  projectTemplateUrl;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private motionService: MotionService,
    private cachedHttpService: CachedHttpService,
    private folioService: FolioService,
  ) { }


  filterProjects({key = 'cat', value}) {
    if (key === 'cat') {
      this.category = value;
    }

    this.projects = this.folioService.getFilteredList({ key, value });
    this.projects.forEach((project, n) => {
      project.computed = {
        style: this.setPosition(n),
        state: 'list',
      };
    });
  }

  setPosition(n) {
    return { transform: `translateY(${n * 250}px)` };
  }


  setActive(slug) {
    this.filterProjects({ key: 'slug', value: slug });
    this.projects[0].computed.state = 'focus';
    this.activeChild = slug;
    this.projectTemplateUrl = `../assets/${slug}/template.json`;
  }

  setCategory(category) {
    this.filterProjects({ value: category });
    this.activeChild = false;
  }

  clearActive() {

    // this.activeChild.computed.state = 'list';
    // this.router.navigate(['/folio']);


  }


  // setLayout(folioChild) {
  //   if (!folioChild) {
  //     this.activeChild = null;
  //     return this.filterProjects({value: this.category});
  //   }
  //
  //   const slug = folioChild.snapshot.paramMap.get('slug');
  //
  //   this.activeChild = slug;
  //
  //   this.filterProjects({ key: 'slug', value: slug });
  //   console.log(slug);
  // }

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

    // this.setLayout(this.route.firstChild);

    this.route.paramMap.subscribe(paramMap => this.updateFilter(paramMap));

    // this.router.events
    //   .filter(event => event instanceof NavigationEnd)
    //   .map(() => this.route.firstChild)
    //   .subscribe(folioChild => this.setLayout(folioChild));

  }

  ngAfterViewInit() {

  }

}
