import { Component, OnInit } from '@angular/core';
import {NgStyle} from '@angular/common';

import { Button } from './shared/button';
import { ButtonService } from './shared/button.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  providers: [ButtonService]
})
export class AppComponent implements OnInit {
  buttons: Button[];

  constructor(private buttonService: ButtonService) { };

  getButtons(): void {
    this.buttonService.getButtons()
      .then(buttons => this.buttons = buttons);
  }
  ngOnInit(): void {
    this.getButtons();
  }

/*  buttons = [
    new Button('Home','home',1,1),
    new Button('Work','folio',1,2),
    new Button('About','about',1,3)
  ];*/
}
