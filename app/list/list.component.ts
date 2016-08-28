import { Component, OnInit } from '@angular/core';
import { ButtonService } from '../shared/button.service';
import { ProjectService } from '../shared/project.service';
import { Project } from '../shared/project'

@Component({
  selector: 'page-list',
  templateUrl: 'app/list/list.component.html',
  styles: [`
  .projects li {
    display: inline-block;
    width: 20%;
    padding: 15px;
    text-align: center;
    vertical-align: top;
  }
  .projects figure {
    background-color: white;
    padding: 15px;
  }
  `]
})
export class ListComponent {
  projects: Project[];
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
