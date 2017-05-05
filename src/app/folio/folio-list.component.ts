import { Component, OnInit, HostBinding } from '@angular/core';
// import { Router, NavigationEnd, ActivatedRoute, Params } from '@angular/router';

import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/filter';
// import 'rxjs/add/operator/find';
// import 'rxjs/add/operator/switchMap';
// import 'rxjs/add/observable/from';

import { fadeInOutAnimation } from '../animations';

import { AppMotionService } from '../app-motion.service';
import { CachedHttpService } from '../shared/cached-http.service';
import { FolioProject } from './folio-project';

@Component({
  selector: 'app-folio-list',
  templateUrl: './folio-list.component.html',
  styleUrls: ['./folio-list.component.css'],
  animations: [ fadeInOutAnimation ]
})
export class FolioListComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;
  // @HostBinding('style.display')   display = 'block';
  // @HostBinding('style.position')  position = 'absolute';

  // private sub;
  private id: Number;

  projects: Observable<FolioProject[]>;
  // project: Observable<FolioProject>;
  errorMessage: string;
  category: 'work';

  constructor(
    private motionService: AppMotionService,
    // private projectService: ProjectService,
    private cachedHttpService: CachedHttpService,
    // private route: ActivatedRoute,
    // private router: Router
  ) { }


  // testParam(n) {
  //   this.router.navigate(['/folio', {id : n}]);
  // }


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


    // this.projects = this.projectService.getFilterProjects('work');

  //  this.motionService.updatePosition(listPos);

//     this.route.params
//     .subscribe(params => {
//       this.id = +params.id;
//
//       console.log(params);
//
//       this.setMotion(this.id);
//
//
// //     return this.projectService.getProject(this.id);
//     });

  }

  // ngOnDestroy() {
  //   // this.sub.unsubscribe();
  // }

}
