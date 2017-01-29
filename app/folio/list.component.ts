import {
  Component, Input, ViewChild,
  ElementRef, OnInit, OnDestroy } from '@angular/core';

//import 'npm:simplebar/umd/simplebar';
//import { Router } from '@angular/router';
//import { Component, OnInit, Input, ElementRef, Directive, ContentChildren, QueryList, HostListener } from '@angular/core';
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
    this.btnService.setButtons({
      home: [-0.5,-0.5],
      about: [2,0.5],
      folio: [1,0.5],
      framer: [1, 1.2]
    });

    this.sub = router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event) => {
        if (event.url.endsWith('work')) {
          this.resetActive();
        } else {
          this.setActive(false);
        }
      })

  };


  projects = [];
  projectPosition;
  sub;

  getProjects(): void {
    this.projectService.getProjects()
      .then(projects => this.projects = projects);

  }

  ngOnInit(): void {
    this.getProjects();
    this.resetActive();

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  resetActive() {
    this.projectPosition = {
      display : 'none'
    }
  }

  clickEvent(e: Event): void {
    this.setActive(e.target);
  }

  setActive(origin: any): void {
    if (origin) {
      let scrolled = this.list.nativeElement.scrollTop;
      this.projectPosition = {
        "transform": `translate(${origin.offsetLeft}px, ${origin.offsetTop - scrolled }px)`,
        "width.px" : origin.offsetWidth
      };
    } else {
      this.projectPosition.display = 'block';
    }



//    this.router.navigate(['work', id]);
    //this.transitionService.setProject(project, e.target);
  }

}
