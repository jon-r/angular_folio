import { Component, OnInit} from '@angular/core';
//import { Router } from '@angular/router';

import { ButtonService } from '../shared/button.service';

import { FolioProject } from './folio-project';
import { FolioProjectService } from './folio-project.service';

@Component({
  selector: 'page-list',
  templateUrl: 'app/list/list.component.html',
  styleUrls: ['app/list/list.component.css']
})
export class folioListComponent {

  constructor(
    private btnService: ButtonService,
    private projectService: FolioProjectService,
    private projects: FolioProject[],
    private activeProject: FolioProject,
   // private router: Router,
    private listPush: string
  ) {
    this.btnService.setButtons({
      home: [-0.5,-0.5],
      about: [2,0.5],
      folio: [1,0.5],
      framer: [1, 1.2]
    });
  };

  getProjects(): void {
    this.projectService.getProjects()
      .then(projects => this.projects = projects);
  }

/*  goTo(project: Project, e: Event): void {
    //this.listPush = 'push';

    //this.transitionService.setProject(project, e.target);
    //document.getElementById('content').scrollTop = 0;

    //setTimeout(() => this.router.navigate(['/work', project.id]), 300);
  }*/

  ngOnInit(): void {
    this.getProjects();
  }

}
