import { Component, OnInit, HostBinding } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { fadeInOutAnimation } from '../animations';

import { MotionService } from '../shared/motion.service';
import { CachedHttpService } from '../shared/cached-http.service';
import { FolioProject } from './folio-project';

@Component({
  selector: 'app-folio-list',
  templateUrl: './folio-list.component.html',
  styleUrls: ['./folio-list.component.css'],
  animations: [fadeInOutAnimation],
})
export class FolioListComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;

  projects: Observable<FolioProject[]>;
  projectsUrl = '../assets/projects-list.json';
  category: 'work';

  constructor(
    private motionService: MotionService,
    private cachedHttpService: CachedHttpService,
  ) { }


  filterProjects(cat) {
    this.category = cat;
    this.projects = this.cachedHttpService.getFrom(this.projectsUrl)
      .filterBy('cat', cat);
  }


  ngOnInit() {

    const listPos = { home: [-.5, -.5], framer: [5, 8] };

    this.motionService.updatePosition(listPos);
    this.filterProjects('work');

  }



}
