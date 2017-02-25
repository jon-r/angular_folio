import { Component } from '@angular/core';
import { ButtonService } from '../shared/button.service';

@Component({
  selector: 'page-home',
  templateUrl: 'app/home/home.component.html',
  styleUrls: ['app/home/home.component.css']
})
export class HomeComponent {

  constructor(private btnService: ButtonService) {
    this.btnService.setButtons({
      home: [-6,-3],
      about: [4,4],
      folio: [3.8,3],
      framer: [-8.2, 5, {rotate: 70} ]
    })
  };

}
