import { Component, OnInit } from '@angular/core';
import { ButtonService } from '../shared/button.service';
import { PageSetService } from '../shared/page-set.service';

@Component({
  selector: 'page-about',
  templateUrl: 'app/single/single.component.html',
  styleUrls: ['app/single/single.component.css']
})
export class SingleComponent implements OnInit {

  constructor(private buttonService: ButtonService, private pageSetService: PageSetService) {
//    this.pageSetService.setClass('single');
        this.buttonService.setButtons({
      home: [-0.5,0],
      about: [1.5,0.5],
      folio: [0.5,0.5]
    })
  };

  ngOnInit(): void {



  }



}
