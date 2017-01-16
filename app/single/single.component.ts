import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ButtonService } from '../shared/button.service';
import { ProjectService } from '../shared/project.service';
import { Project } from '../shared/project';
import { TransitionService } from '../list/transition.service';

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
    private transitionService: TransitionService,
    private route: ActivatedRoute
  ) {
    this.btnService.setButtons({
      home: [-0.5,-0.5],
      about: [2,0.5],
      folio: [1,0.5],
      framer: [1, 1.2]
    })
  };


  goBack(): void {
    window.history.back();
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.projectService.getProject(id)
        .then(project => this.project = project)
    });

    setTimeout(() => this.transitionService.unsetProject(), 2000);


  }





}
