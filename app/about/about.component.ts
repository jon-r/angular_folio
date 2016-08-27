import { Component, OnInit } from '@angular/core';
import { ButtonService } from '../shared/button.service';
import { PageSetService } from '../shared/page-set.service';

@Component({
  selector: 'page-about',
  templateUrl: 'app/about/about.component.html',
  styleUrls: ['app/about/about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private buttonService: ButtonService, private pageSetService: PageSetService) {
//    this.pageSetService.setClass('about');
        this.buttonService.setButtons({
      home: [-0.5,0],
      about: [0.5,0.5],
      folio: [1.5,0.5]
    })
  };

  ngOnInit(): void {



  }



}
