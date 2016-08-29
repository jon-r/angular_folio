import { Component, OnInit, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import {NgStyle} from '@angular/common';

import { LazyLoadImageDirective } from 'ng2-lazyload-image';

import { ButtonService } from '../shared/button.service';
import { ProjectService } from '../shared/project.service';
import { Project } from '../shared/project'

@Component({
  selector: 'page-list',
  templateUrl: 'app/list/list.component.html',
  directives: [ LazyLoadImageDirective ],
  animations: [
    trigger('pageView', [
      state('in', style({transform: 'transform: translateY(0)' })),
      transition('void => *', [
        animate('600ms ease-out', keyframes([
          style({opacity: 0, transform: 'translateY(100%)', offset: 0}),
          style({opacity: 1, transform: 'translateY(-10%)', offset: 0.7}),
          style({opacity: 1, transform: 'translateY(0)', offset: 1}),
        ]))
      ])
    ])
  ],
  styleUrls: ['app/list/list.component.css']
/*  styles: [`
.projects li {
  display: inline-block;
  width: 20%;
  padding: 15px;
  text-align: center;
  vertical-align: top;
  animation: 1s fadeUp;
  animation-fill-mode: backwards;
}
.projects figure {
  background-color: white;
  padding: 15px;
}
.projects img {
  width: 100%;
  height: auto;
  transition: opacity 1s;
  opacity: 0;
}
.projects img.ng2-lazyloaded {
  opacity: 1;
}
@keyframes fadeUp {
  0% { opacity:0; transform: translateY(100%); }
  50% { opacity:1; transform: translateY(-10%); }
  100% { opacity:1; transform: translateY(0); }
}
  `]*/
})
export class ListComponent {
  projects: Project[];
  ph: string = '';
  temp: string = 'https://placekitten.com/300/300';

  constructor(
    private buttonService: ButtonService,
    private projectService: ProjectService
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



}
