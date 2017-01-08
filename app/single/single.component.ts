import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ButtonService } from '../home/button.service';
import { ProjectService } from '../shared/project.service';
import { Project } from '../shared/project';

@Component({
  selector: 'page-about',
  templateUrl: 'app/single/single.component.html',
  styleUrls: ['app/single/single.component.css']
})
export class SingleComponent /*implements OnInit*/ {

  project: Project;

  constructor(
    private btnService: ButtonService,
    private projectService: ProjectService,
    private route: ActivatedRoute
  ) {
    this.btnService.setButtons({
      home: [-0.5,-0.5],
      about: [9,9],
      folio: [0.5,0.5],
      framer: [0.5, 1.2]
    })
  };

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.projectService.getProject(id)
        .then(project => this.project = project)
    })
  }

  goBack(): void {
    window.history.back();
  }



}
