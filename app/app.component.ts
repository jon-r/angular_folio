import { Component } from '@angular/core';
import {Observable}  from 'rxjs/Observable';

import { Buttons } from './home/buttons';
import { ButtonService } from './home/button.service';

import { Project } from './shared/project';
import { TransitionService } from './list/transition.service';

import { GridService } from './shared/grid.service';


@Component({
 // moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  providers: [TransitionService, ButtonService]
})

export class AppComponent {

  constructor(
    private btnService: ButtonService,
    private transitionService: TransitionService
  ) {



    btnService.buttonOutput$
      .debounceTime(200)
      .subscribe(n => this.updatePos(n));

    transitionService.projectOutput$
      .subscribe(n => this.activeProject = n);

  };

//  router: any;

  //btnPos;

  updateGrid() {
    for (let el in this.btnPos) {
      this.btnPos[el].update();
    }
  }

  updatePos(pos) {
    for (let el in this.btnPos) {
      let extra = pos[el][2] ?
          pos[el][2] : {reset: true};
      this.btnPos[el].setPos(pos[el], extra);
    }
  }


  isLoaded: boolean = false;
  btnPos: Buttons = {home: null,about: null,folio: null,framer: null};
  activeProject

  ngOnInit(): void {

    new slimScroll(document.getElementById('content'));
    console.log(document.getElementById('content'));

    ['home', 'about','folio','framer']
      .forEach(el => this.btnPos[el] = new GridService());


    Observable.fromEvent(window, 'resize')
      .debounceTime(200)
      .subscribe(e => this.updateGrid());
  }
}
