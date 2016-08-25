import { Component, OnInit } from '@angular/core';
import { ButtonService } from '../shared/button.service';

@Component({
  selector: 'page-list',
  templateUrl: 'app/list/list.component.html',
  styleUrls: ['app/list/list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private buttonService: ButtonService) {};

  ngOnInit(): void {
    this.buttonService.setButtons({
      home: '1,1',
      about: '-1,2',
      folio: '1,-3'
    })
  }



}
