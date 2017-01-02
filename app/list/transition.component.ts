import { Component, Input } from '@angular/core';
import { GridService } from '../shared/grid.service';
import { TransitionService } from './transition.service';

import { ProjectService } from '../shared/project.service';
import { Project } from '../shared/project';

@Component({
  selector: 'transition-helper',
  templateUrl: 'app/list/transition.component.html',
  styleUrls: ['app/list/list.component.css']
})
export class TransitionComponent {

  tilePosition: Object;

  constructor(private transitionService: TransitionService) {
    transitionService.tileOutput$.subscribe(n => {
      console.log(n);
      this.tilePosition = n
    });

  }



  @Input() project: Project;







//       transitionService.projectOutput$
//      .subscribe(n => this.activeProject = n);

}
