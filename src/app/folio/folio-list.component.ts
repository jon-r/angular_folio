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
  providers: [CachedHttpService],
  animations: [ fadeInOutAnimation ],
})
export class FolioListComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;

  projects: Observable<FolioProject[]>;
  category: 'work';

  constructor(
    private motionService: MotionService,
    private cachedHttpService: CachedHttpService,
  ) { }


  filterProjects(cat) {
    const url = '../assets/projects-list.json';
    this.category = cat;
    this.projects = this.cachedHttpService.getFrom(url).filterBy('cat', cat);
  }


  ngOnInit() {

    const listPos = { home: [-.5, -.5], framer: [5, 8, '-10deg'] };

    this.motionService.updatePosition(listPos);
    this.filterProjects('work');

  }



}
