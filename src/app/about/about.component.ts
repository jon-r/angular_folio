import { Component, OnInit } from '@angular/core';

import About from './about';
import { RouteCommsService } from '../shared/route-comms.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css', '../shared/content-style.css'],
})
export class AboutComponent implements OnInit {

  about;

  constructor(
    private routeCommsService: RouteCommsService,
  ) { }

  ngOnInit() {
    this.routeCommsService.setScrollTo(0);

    this.about = About;
  }

}
