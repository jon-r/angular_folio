import { Component } from '@angular/core';
import { ButtonService } from '../shared/button.service';

@Component({
  selector: 'page-about',
  templateUrl: 'app/about/about.component.html',
  styleUrls: ['app/about/about.component.css']
})
export class AboutComponent {

  constructor(private buttonService: ButtonService) {
    this.buttonService.setButtons({
      home: [-0.5,-0.5],
      about: [0.5,0.5],
      folio: [1.5,0.5],
      framer: [0.5, 1.2]
    })
  };

}
