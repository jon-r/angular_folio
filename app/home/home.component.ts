import { Component } from '@angular/core';
import { ButtonService } from '../shared/button.service';

@Component({
  selector: 'page-home',
  templateUrl: 'app/home/home.component.html',
  styleUrls: ['app/home/home.component.css']
})
export class HomeComponent {

  constructor(private buttonService: ButtonService) {
    this.buttonService.setButtons({
      home: [-6,-3.5],
      about: [4.3,3.8],
      folio: [4.3,3],
      framer: [4, 1.5,1]
    })
  };

}
