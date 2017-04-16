import { ActivatedRoute, Params } from '@angular/router';


import { Component, OnInit, Sanitizer} from '@angular/core';
import { ButtonService } from '../shared/button.service';
import { FolioProject } from './project';
import { FolioProjectService } from './project.service';

import { HtmlTemplateComponent } from '../shared/htmlTemplate.component';


@Component({
  selector: 'page-detail',
  templateUrl: 'app/folio/detail.component.html',
  styleUrls: ['app/folio/detail.component.css']
})
export class FolioDetailComponent {

  constructor(
    private btnService: ButtonService,
    private projectService: FolioProjectService,
    private route: ActivatedRoute,
  ) {
    this.btnService.setButtons({
      home: [-.5,-.5],
      framer: [5, 1]
    });

    this.temp = '/static/arc/index.html';

  };

  temp: string

  project: FolioProject;


  goBack(): void {
    window.history.back();
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.projectService.getProject(id)
      .then(project => this.project = project);
    });
  }

}
