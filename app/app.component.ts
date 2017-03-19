import { Component } from '@angular/core';
import { Observable }  from 'rxjs/Observable';

import { Buttons } from './shared/buttons';
import { ButtonService } from './shared/button.service';

import { GridService } from './shared/grid.service';


@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  providers: [ButtonService]
})

export class AppComponent {

  private btnPos: Buttons;

  constructor(
    private btnService: ButtonService
  ) {
    btnService.buttonOutput$
      //.debounceTime(200)
      .subscribe(n => this.updatePos(n));

    this.btnPos = {home: null, framer: null};
  };



  updatePos(pos) {
    for (let el in this.btnPos) {
      let extra = pos[el][2] ?
          pos[el][2] : {reset: true};
      this.btnPos[el].setPos(pos[el], extra);
    }
  }



  ngOnInit(): void {

    ['home', 'framer']
      .forEach(el => this.btnPos[el] = new GridService());

  }
}
