import { Component, OnInit } from '@angular/core';
import {NgStyle} from '@angular/common';
import {Observable}  from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';

import { Button } from './shared/button';
import { ButtonService } from './shared/button.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  providers: [ButtonService]
})
export class AppComponent {
  buttons: Button;

  constructor(private buttonService: ButtonService) {};

  getButtons() {
  //  this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    this.buttonService.init().then(buttons => this.buttons = buttons);
  }

  ngOnInit(): void {
//    this.links = this.buttonService.init();
    this.getButtons();

    console.info(this.buttons);
  }

}


/*  getButtons(): void {
    this.buttons = this.buttonService.init();
  }

  ngOnInit(): void {
   // this.getButtons();

    this.gridService.set(window);

    Observable.fromEvent(window, 'resize')
      .debounceTime(200)
      .subscribe(e => {this.gridService.set(e.target)});
  }


/*  onResize(event) {
    console.info(event);
  }
  */


/*  buttons = [
    new Button('Home','home',1,1),
    new Button('Work','folio',1,2),
    new Button('About','about',1,3)
  ];*/
