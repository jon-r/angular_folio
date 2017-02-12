import { ActivatedRoute, Params } from '@angular/router';

import { Component, OnInit} from '@angular/core';
import { FolioProject } from './project';
import { FolioProjectService } from './project.service';

@Component({
  selector: 'page-about',
  templateUrl: 'app/folio/detail.component.html',
  styleUrls: ['app/folio/list.component.css']
})
export class FolioDetailComponent {

  constructor(
    private projectService: FolioProjectService,
    private route: ActivatedRoute
  ) {

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
