import { Component, OnInit, ViewChildren, QueryList, AfterViewInit, ElementRef } from '@angular/core';
import {useAnimation, transition, trigger, query, animateChild, group, state,
  style, animate } from '@angular/animations';


import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ActivatedRoute, ParamMap, Router, NavigationEnd } from '@angular/router';

// import { fadeInOutAnimation, slideInOutAnimation } from '../animations';
import { fadeAnimation, widthAnimation } from '../animations';
import { MotionService } from '../shared/motion.service';
import { CachedHttpService } from '../shared/cached-http.service';
import { FolioProject } from './folio-project';
import { FolioListDirective } from './folio-list.directive';



@Component({
  selector: 'app-folio-list',
  templateUrl: './folio-list.component.html',
  styleUrls: ['./folio-list.component.css'],
  animations: [
    trigger('listAnim', [
      transition(':enter', [
          useAnimation(fadeAnimation, {params: { from: 0, to: 1 }}),
      ]),
      transition(':leave', [
          useAnimation(fadeAnimation, {params: { from: 1, to: 0 }}),
      ]),
      transition('*=>true', [

        // style({ width: '768px'  }),
          useAnimation(widthAnimation, {params: { width: 1200, left: -600 }}),
          // useAnimation(fadeAnimation, {params: { from: 1, to: 0 }}),
      ]),
    ])
  ],
})
export class FolioListComponent implements OnInit, AfterViewInit {

  projects: Observable<FolioProject[]>;
  // projectsList$ = this.projects.asObservable();

  projectsUrl = '../assets/projects-list.json';

  filters = ['all', 'work', 'play'];
  category = 'all';
  allProjects;
  activeChild = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private motionService: MotionService,
    private cachedHttpService: CachedHttpService,
  ) { }


  filterProjects({key = 'cat', value}) {

    const sort = 'id';
    const url = this.projectsUrl;
    const getProjects = this.cachedHttpService.getFrom({ url, sort });

    if (key === 'cat') {
      this.category = value;
    }

    this.projects = (value === 'all') ? getProjects.data : getProjects.filterBy(key, value);
  }


  setLayout(folioChild) {
    if (!folioChild) {
      this.activeChild = null;
      return this.filterProjects({value: this.category});
    }

    const slug = folioChild.snapshot.paramMap.get('slug');

    this.activeChild = slug;

    this.filterProjects({ key: 'slug', value: slug });
    console.log(slug);
  }

  ngOnInit() {

    this.motionService.transform({
      home: 'translate(-32px, -16px)',
      framer: 'translate(-5vw, 96px)',
    });

    this.setLayout(this.route.firstChild);

    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.route.firstChild)
      .subscribe(folioChild => this.setLayout(folioChild));

  }

  ngAfterViewInit() {

  }

}
