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

  // private sub;
  private id: Number;

  projects: Observable<FolioProject[]>;
  errorMessage: string;
  category: 'work';

  constructor(
    private motionService: MotionService,
    private cachedHttpService: CachedHttpService,
  ) { }


  filterProjects(cat) {
    this.category = cat;
    this.projects = this.cachedHttpService.getFilterProjects(cat);
  }

  setMotion(id) {
    const listPos = { home: [-.5, -.5], framer: [5, 8, '-10deg'] };
    const detailPos = { home: [-.5, -.5], framer: [5, 1] };
    const pos = id ? detailPos : listPos;

    this.motionService.updatePosition(pos);
  }

  ngOnInit() {

    const listPos = { home: [-.5, -.5], framer: [5, 8, '-10deg'] };

    this.motionService.updatePosition(listPos);

    this.filterProjects('work');

  }



}
