import { Component } from '@angular/core';
import { ButtonService } from '../shared/button.service';

@Component({
  selector: 'page-about',
  templateUrl: 'app/about/about.component.html',
  styleUrls: ['app/about/about.component.css']
})
export class AboutComponent {

  constructor(private btnService: ButtonService) {
    this.btnService.setButtons({
      home: [-.5,-.5],
      framer: [-7, 1]
    })
  };

}
