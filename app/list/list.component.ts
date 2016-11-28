//import { Component, OnInit, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { Component, OnInit} from '@angular/core';

import { Router } from '@angular/router';
//import {NgStyle} from '@angular/common';


//import { LazyLoadImageDirective } from 'ng2-lazyload-image';

import { ButtonService } from '../shared/button.service';
import { ProjectService } from '../shared/project.service';
import { Project } from '../shared/project';


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
  projects: Project[];
  listPush: string = '';


//  ph: string = 'http://placehold.it/10x10';
//  temp: string = 'https://placekitten.com/300/300';

  constructor(
    private buttonService: ButtonService,
    private projectService: ProjectService,
    private router: Router
  ) {
    this.buttonService.setButtons({
      home: [-0.5,-0.5],
      about: [1.5,0.5],
      folio: [0.5,0.5],
      framer: [0.5, 1.2]
    })
  };

  getProjects(): void {
    this.projectService.getProjects().then(projects => this.projects = projects);
  }

  ngOnInit(): void {
    this.getProjects();
  }

  goTo(project: Project): void {
    this.listPush = 'push';
    setTimeout(() =>this.router.navigate(['/work', project.id]), 600);

  }


}
