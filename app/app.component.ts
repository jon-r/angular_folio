import { Component } from '@angular/core';
import {Observable}  from 'rxjs/Observable';

import { Buttons } from './shared/buttons';
import { Project } from './shared/project';
import { GridService } from './shared/grid.service';
import { TransitionService } from './list/transition.service';


@Component({
 // moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  providers: [GridService, TransitionService]
})

export class AppComponent {

  constructor(
    private gridService: GridService,
    private transitionService: TransitionService
  ) {

    gridService.buttonOutput$
      .debounceTime(200)
      .subscribe(n => this.btnPos = n );

    transitionService.projectOutput$
      .subscribe(n => this.activeProject = n);


  };

//  router: any;
  isHome: string;
  isLoaded: boolean = false;
  btnPos: Buttons = {home: null,about: null,folio: null,framer: null};
  activeProject

  ngOnInit(): void {
    this.gridService.setGrid();

    Observable.fromEvent(window, 'resize')
      .debounceTime(200)
      .subscribe(e => {this.gridService.setGrid()});
  }
}
