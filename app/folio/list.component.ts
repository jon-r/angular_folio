import {
  Component, Input, ViewChild,
  ElementRef, OnInit, OnDestroy
} from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';

import { ButtonService } from '../shared/button.service';

import { FolioProject } from './project';
import { FolioProjectService } from './project.service';

@Component({
  selector: 'page-list',
  templateUrl: 'app/folio/list.component.html',
  styleUrls: ['app/folio/list.component.css']
})
export class FolioListComponent implements OnInit {
  @ViewChild('folioList') list: ElementRef;

  constructor(
    private btnService: ButtonService,
    private projectService: FolioProjectService,
    private router: Router
  ) {


    this.sub = router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event) => {
        if (event.url.endsWith('folio')) {
          this.clearPosition();

          this.btnService.setButtons({
            home: [-.5,-.5],
            framer: [-7, 8, {rotate:-10}]
          });

        }
      })
  }

  allProjects: FolioProject[];
  filteredProjects
  projectPosition;
  sub;

  getProjects(): void {
    this.projectService.getProjects().then(projects => {
      this.allProjects = projects;      
      this.filterProjects('work');
    });
  }

  filterProjects(category) {
    this.filteredProjects = this.allProjects.filter(project => {
      return project.cat === category;
    });
  }

  ngOnInit(): void {
    this.getProjects();



  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  tileTransition(e: Event): void {
    let target = <HTMLSelectElement> e.target;
    this.startPosition(target);
  }



  clearPosition() {
    this.projectPosition = { display : 'none' }
  }

  startPosition(origin: HTMLElement): void {
    const TILEPAD = 8

    let scrolled = this.list.nativeElement.scrollTop;
    this.projectPosition = {
      "transform": `translate(${origin.offsetLeft - TILEPAD}px, ${origin.offsetTop - scrolled - TILEPAD}px)`,
      "width.px" : origin.offsetWidth + (TILEPAD * 2)
    };

    setTimeout(() => this.finalPosition(), 300);

  }

  finalPosition(): void {
    let fullWidth = this.list.nativeElement.offsetWidth;
    this.projectPosition = {
      display : 'block',
      "width.px" : fullWidth
    };
  }

}
