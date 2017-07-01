import { Component, OnInit, HostBinding } from '@angular/core';

import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { fadeInOutAnimation, slideInOutAnimation } from '../animations';

import { ISlimScrollOptions } from 'ng2-slimscroll';

import { MotionService } from '../shared/motion.service';
import { CachedHttpService } from '../shared/cached-http.service';
import { FolioProject } from './folio-project';

@Component({
  selector: 'app-folio-list',
  templateUrl: './folio-list.component.html',
  styleUrls: ['./folio-list.component.css'],
  animations: [fadeInOutAnimation, slideInOutAnimation],
})
export class FolioListComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;

  projects: Observable<FolioProject[]>;

  projectsUrl = '../assets/projects-list.json';

  opts: ISlimScrollOptions;
  filters = ['all', 'work', 'play'];
  category;

  focus = '';
  focusSlug;


  constructor(
    private activatedRoute: ActivatedRoute,
    private motionService: MotionService,
    private cachedHttpService: CachedHttpService,
  ) { }


  filterProjects(cat) {
    this.category = cat;

    const allProjects = this.cachedHttpService.getFrom(this.projectsUrl);
    //
    this.projects = (cat === 'all') ? allProjects.data : allProjects.filterBy('cat', cat);
  }

  listPosition(n) {
    const offset = n * 200;
    return { transform: `translateY(${offset}px)` };
  }


  ngOnInit() {

    this.opts = {
      position: 'right',
      barBackground: ' #0e4c46',
      barBorderRadius: '0',
      barWidth: '8',
      barMargin: '16px 0',
      gridOpacity: '0',
    };

    const listPos = { home: [-.2, -.2], framer: [5, 1] };

    this.motionService.updatePosition(listPos);

    this.filterProjects('all');

    this.activatedRoute.paramMap
    .subscribe((params: ParamMap) => {
      const str = params.get('project');
      this.focus = `../assets/${str}/template.json`;
    });

  }

}
