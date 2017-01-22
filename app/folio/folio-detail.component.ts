import { ActivatedRoute, Params } from '@angular/router';

import { Component, OnInit} from '@angular/core';
import { ButtonService } from '../shared/button.service';
import { FolioProject } from './folio-project';
import { FolioProjectService } from './folio-project.service';

@Component({
  selector: 'page-about',
  templateUrl: 'app/folio/folio-detail.component.html',
  styleUrls: ['app/folio/folio-detail.component.css']
})
export class FolioDetailComponent {

  constructor(
    private btnService: ButtonService,
    private projectService: FolioProjectService,
    private route: ActivatedRoute
  ) {
    this.btnService.setButtons({
      home: [-0.5,-0.5],
      about: [2,0.5],
      folio: [1,0.5],
      framer: [1, 1.2]
    })
  };

  project: FolioProject;

  goBack(): void {
    window.history.back();
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.projectService.getProject(id)
        .then(project => this.project = project)
    });
  }

}
