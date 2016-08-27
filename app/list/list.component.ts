import { Component, OnInit } from '@angular/core';
import { ButtonService } from '../shared/button.service';
import { PageSetService } from '../shared/page-set.service';

@Component({
  selector: 'page-list',
  templateUrl: 'app/list/list.component.html',
  styleUrls: ['app/list/list.component.css']
})
export class ListComponent implements OnInit {

  constructor(
    private buttonService: ButtonService,
    private pageSetService: PageSetService
  ) {

//    this.pageSetService.setClass('list');

    this.buttonService.setButtons({
      home: [-0.5,0],
      about: [1.5,0.5],
      folio: [0.5,0.5]
    })





  };

  ngOnInit(): void {


  }



}
