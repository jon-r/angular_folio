import { Component } from '@angular/core';
import {Observable}  from 'rxjs/Observable';

import { Buttons } from './shared/buttons';
import { Project } from './shared/project';
import { GridItem } from './shared/grid-item';
import { GridService } from './shared/grid.service';
import { GridItemService } from './shared/grid-item.service'
//import { NewGridService } from './shared/newgrid.service';
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

    gridService.gridOutput$
      .debounceTime(200)
      .subscribe(n => this.updateGrid(n));

    gridService.buttonOutput$
      .debounceTime(200)
      .subscribe(n => this.updatePos(n) );

    transitionService.projectOutput$
      .subscribe(n => this.activeProject = n);

  };

//  router: any;

  //btnPos;

  updateGrid(coords) {
    for (let el in this.btnPos) {
      this.btnPos[el].setGrid(coords);
    }
  }

  updatePos(pos) {
    for (let el in this.btnPos) {
      this.btnPos[el].setPos(pos[el]);
    }
    console.log(this.btnPos.home);
  }


  isLoaded: boolean = false;
  btnPos: Buttons = {home: null,about: null,folio: null,framer: null};
  activeProject

  ngOnInit(): void {
    this.gridService.setGrid();

    ['home', 'about','folio','framer']
      .forEach(el => this.btnPos[el] = new GridItemService([0,0]));

/*    this.els = {
      home : new GridItemService(),
      about : new GridItemService(),
      folio : new GridItemService(),
      framer : new GridItemService()
    }*/



    console.log(this.btnPos);

    Observable.fromEvent(window, 'resize')
      .debounceTime(200)
      .subscribe(e => this.gridService.setGrid());
  }
}
