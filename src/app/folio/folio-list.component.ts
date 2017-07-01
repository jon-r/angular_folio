import { Component, OnInit, HostBinding } from '@angular/core';
import {useAnimation, transition, trigger} from '@angular/animations';


import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
// import { ActivatedRoute, ParamMap } from '@angular/router';

// import { fadeInOutAnimation, slideInOutAnimation } from '../animations';
import { fadeAnimation } from '../animations';
import { MotionService } from '../shared/motion.service';
import { CachedHttpService } from '../shared/cached-http.service';
import { FolioProject } from './folio-project';



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
      ])
    ])
  ],
  // animations: [fadeInOutAnimation, slideInOutAnimation],
})
export class FolioListComponent implements OnInit {

  // @HostBinding('@routeAnimation') routeAnimation = true;

  projects: Observable<FolioProject[]>;

  projectsUrl = '../assets/projects-list.json';

  filters = ['all', 'work', 'play'];
  category;
  allProjects;
  projectStates: string[];
  // focus = '';
  // focusSlug;


  constructor(
    // private activatedRoute: ActivatedRoute,
    private motionService: MotionService,
    private cachedHttpService: CachedHttpService,
  ) { }


  filterProjects(cat) {
    if (!this.allProjects) {
      const sort = 'id';
      const url = this.projectsUrl;
      this.allProjects = this.cachedHttpService.getFrom({ url, sort });
    }

    this.category = cat;

    this.projects = (cat === 'all') ? this.allProjects.data : this.allProjects.filterBy('cat', cat);
  }

  listPosition(n) {
    const offset = n * 250;
    return { transform: `translateY(${offset}px)` };
  }


  ngOnInit() {

    this.motionService.transform({
      home: 'translate(-32px, -16px)',
      framer: 'translate(-5vw, 96px)',
    });

    this.filterProjects('all');


  }

}
