import { Component, OnInit} from '@angular/core';
//import { Router } from '@angular/router';

import { ButtonService } from '../shared/button.service';

import { FolioProject } from './folio-project';
import { FolioProjectService } from './folio-project.service';

@Component({
  selector: 'page-list',
  templateUrl: 'app/folio/folio-list.component.html',
  styleUrls: ['app/folio/folio-list.component.css']
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
  };

  projects = [];

  getProjects(): void {
    this.projectService.getProjects()
      .then(projects => this.projects = projects);
  }


  ngOnInit(): void {
    this.getProjects();
  }

}
