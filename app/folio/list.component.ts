import { Component, OnInit, Input, ElementRef } from '@angular/core';
//import { Router } from '@angular/router';

import { ButtonService } from '../shared/button.service';

import { FolioProject } from './project';
import { FolioProjectService } from './project.service';
//import { FolioTransitionDirective }  from './transition.directive';

@Component({
  selector: 'page-list',
  templateUrl: 'app/folio/list.component.html',
  styleUrls: ['app/folio/list.component.css']
})
export class FolioListComponent {

  constructor(
    private btnService: ButtonService,
    private projectService: FolioProjectService,
  ) {
    this.btnService.setButtons({
      home: [-0.5,-0.5],
      about: [2,0.5],
      folio: [1,0.5],
      framer: [1, 1.2]
    });

      this.projectPosition = {
        display : 'none'
      }
  };

  projects = [];
  projectPosition;

  getProjects(): void {
    this.projectService.getProjects()
      .then(projects => this.projects = projects);
  }

  ngOnInit(): void {
    this.getProjects();
  }

  setActive(e: Event): void {
    let el = e.target;
/*      out = {
        "transform": `translate(${el.offsetLeft}px, ${el.offsetTop}px)`,
        "width.px" : el.offsetWidth
      }*/
    console.log(el);

   // this.activeProject = out;
    //this.transitionService.setProject(project, e.target);

  }

}
