import { Component, OnInit } from '@angular/core';
import {NgStyle} from '@angular/common';
import {Observable}  from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';

import { Buttons } from './shared/button';
import { ButtonService } from './shared/button.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],

})
export class AppComponent {

  constructor(private buttonService: ButtonService) {
    buttonService.buttonOutput$.subscribe(
      n => {
        console.log(n);
      }
    )
  };


  buttons: Buttons;

  ngOnInit(): void {

    this.buttonService.setGrid()

    Observable.fromEvent(window, 'resize')
      .debounceTime(200)
      .subscribe(e => { this.buttonService.setGrid()});

  }

}


   // this.buttonService.setGrid(window);

//    this.buttonService.setLayout({
//      home: '0,0',
//      folio: '1,1',
//      about: '1,2'
//    })

////    this.links = this.buttonService.init();
//
//    this.buttonService.setLayout({
//      home: '0,0',
//      folio: '1,1',
//      about: '1,2'
//    })
//
//    this.getButtons();
//
//    console.info(this.buttons);
//
//
//
//

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
