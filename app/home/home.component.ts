import { Component, OnInit } from '@angular/core';
import { ButtonService } from '../shared/button.service';
import { PageSetService } from '../shared/page-set.service';

@Component({
  selector: 'page-home',
  templateUrl: 'app/home/home.component.html',
  styleUrls: ['app/home/home.component.css']

})
export class HomeComponent implements OnInit {

  constructor(private buttonService: ButtonService, private pageSetService: PageSetService) {
//    this.pageSetService.setClass('home');
    this.buttonService.setButtons({
      home: [-5,4],
      about: [5,4.5],
      folio: [5,5.5]
    })
  };

  ngOnInit(): void {



  }



}
