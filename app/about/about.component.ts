import { Component } from '@angular/core';
import { ButtonService } from '../home/button.service';

@Component({
  selector: 'page-about',
  templateUrl: 'app/about/about.component.html',
  styleUrls: ['app/about/about.component.css']
})
export class AboutComponent {

  constructor(private btnService: ButtonService) {
    this.btnService.setButtons({
      home: [-0.5,-0.5],
      about: [2,0.5],
      folio: [1,0.5],
      framer: [1, 1.2]
    })
  };

}
