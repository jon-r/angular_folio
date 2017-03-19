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
      framer: [-8, 5, {rotate: 70} ]
    })
  };

}
