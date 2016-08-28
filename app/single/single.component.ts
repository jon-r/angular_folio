import { Component, OnInit } from '@angular/core';
import { ButtonService } from '../shared/button.service';

@Component({
  selector: 'page-about',
  templateUrl: 'app/single/single.component.html',
  styleUrls: ['app/single/single.component.css']
})
export class SingleComponent implements OnInit {

  constructor(private buttonService: ButtonService) {
    this.buttonService.setButtons({
      home: [-0.5,0.5],
      about: [1.5,0.5],
      folio: [0.5,0.5],
      framer: [0.5, 1.2]
    })
  };

  ngOnInit(): void {



  }



}
