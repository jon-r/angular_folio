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
      framer: [-7, 1]
    });

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
