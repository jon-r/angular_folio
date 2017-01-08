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

  constructor(private transitionService: TransitionService) {
    transitionService.tileOutput$.subscribe(n => {


      this.tilePosition = n;


      setTimeout(() => {this.fillOut(n)}, 500);

    });
    this.tileTransition = new GridService();
  }

  tilePosition;
  tileTransition;

  @Input() project: Project;

  fillOut(n) {

    this.tileTransition.setPos([1,2], {'width.px' : n['width.px']});

    this.tilePosition = this.tileTransition.style;

  }

}
