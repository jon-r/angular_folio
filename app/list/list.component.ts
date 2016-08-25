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

  }



}
