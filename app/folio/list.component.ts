import {
  Component, Input, ViewChild,
  ElementRef, OnInit, OnDestroy } from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';


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
    private projectService: FolioProjectService,
    private router: Router
  ) {

    this.sub = router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event) => {
        if (event.url.endsWith('work')) {
          this.clearPosition();
        }
      })
  };


  projects: FolioProject[];
  projectPosition;
  sub;

  getProjects(): void {
    this.projectService.getProjects()
      .then(projects => this.projects = projects);

  }

  ngOnInit(): void {
    this.getProjects();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  clickEvent(e: Event): void {
    let target = <HTMLSelectElement> e.target;
    this.startPosition(target);
  }

  clearPosition() {
    this.projectPosition = { display : 'none' }
  }

  startPosition(origin: HTMLElement): void {

    let scrolled = this.list.nativeElement.scrollTop;
    this.projectPosition = {
      "transform": `translate(${origin.offsetLeft}px, ${origin.offsetTop - scrolled }px)`,
      "width.px" : origin.offsetWidth
    };

    setTimeout(() => this.finalPosition(), 300);

  }

  finalPosition(): void {
    let fullWidth = this.list.nativeElement.offsetWidth;
    this.projectPosition = {
      display : 'block',
      "width.px" : fullWidth
      //to update this size dynamically? maybe use grid sevice
    };
  }

}
