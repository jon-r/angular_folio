//import { Component, OnInit, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { Component, OnInit} from '@angular/core';

import { Router } from '@angular/router';
//import {NgStyle} from '@angular/common';


//import { LazyLoadImageDirective } from 'ng2-lazyload-image';

import { GridService } from '../shared/grid.service';
import { ButtonService } from '../home/button.service';
import { ProjectService } from '../shared/project.service';
import { Project } from '../shared/project';
import { TransitionService } from './transition.service';

@Component({
  selector: 'page-list',
  templateUrl: 'app/list/list.component.html',
//  directives: [ LazyLoadImageDirective ],
//  animations: [
//    trigger('pageView', [
//      state('in', style({transform: 'transform: translateY(0)' })),
//      transition('void => *', [
//        animate('600ms ease-out', keyframes([
//          style({opacity: 0, transform: 'translateY(100%)', offset: 0}),
//          style({opacity: 1, transform: 'translateY(-10%)', offset: 0.7}),
//          style({opacity: 1, transform: 'translateY(0)', offset: 1}),
//        ]))
//      ])
//    ])
//  ],
  styleUrls: ['app/list/list.component.css']
})
export class ListComponent {
  projects: Project[] = [];
  activeProject: Project;

  listPush: string = '';


//  ph: string = 'http://placehold.it/10x10';
//  temp: string = 'https://placekitten.com/300/300';

  constructor(
    private gridService: GridService,
    private btnService: ButtonService,
    private projectService: ProjectService,
    private transitionService: TransitionService,
    private router: Router
  ) {
    this.btnService.setButtons({
      home: [-0.5,-0.5],
      about: [2,0.5],
      folio: [1,0.5],
      framer: [1, 1.2]
    })
  };

  getProjects(): void {
    this.projectService.getProjects()
      .then(projects => this.projects = projects);
//      while (projects.length > 0) {
//        this.projects.push(projects.splice(0, 6));
//      }
   // });
  }





//  setTilePos(project : Project) {
//    project.tilePos = {
//      'background-image' : `url(app/lib/${project.img.name})`,
//      'background-position' : project.img.centre
//    }
//    return project;
//  }

  ngOnInit(): void {
    this.getProjects();
  }

  goTo(project: Project, e: Event): void {
    this.listPush = 'push';

    this.transitionService.setProject(project, e.target);

    document.scrollTop = 0;

    setTimeout(() =>this.router.navigate(['/work', project.id]), 300);

  }


}
