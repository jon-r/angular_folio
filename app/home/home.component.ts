import { Component } from '@angular/core';
import { ButtonService } from '../home/button.service';

@Component({
  selector: 'page-home',
  templateUrl: 'app/home/home.component.html',
  styleUrls: ['app/home/home.component.css']
})
export class HomeComponent {

  constructor(private btnService: ButtonService) {
    this.btnService.setButtons({
      home: [-6.4,-3],
      about: [3.8,4],
      folio: [3.8,3],
      framer: [3.7, 2, {rotate: 90, 'width.vh': 60} ]
    })
  };

}
