import { Component, OnInit} from '@angular/core';

import { Router } from '@angular/router';

//import { LazyLoadImageDirective } from 'ng2-lazyload-image';

import { GridService } from '../shared/grid.service';
import { ButtonService } from '../shared/button.service';
import { ProjectService } from '../shared/project.service';
import { Project } from '../shared/project';
import { TransitionService } from './transition.service';

@Component({
  selector: 'page-list',
  templateUrl: 'app/list/list.component.html',
  styleUrls: ['app/list/list.component.css']
})
export class ListComponent {
  projects: Project[] = [];
  activeProject: Project;
  scroller;

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
    this.scroller = document.getElementById('content');
  }

  goTo(project: Project, e: Event): void {
    this.listPush = 'push';

    this.transitionService.setProject(project, e.target);

    this.scroller.scrollTop = 0;

    setTimeout(() => this.router.navigate(['/work', project.id]), 300);

  }


}
