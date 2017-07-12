import { Component, OnInit } from '@angular/core';

import About from './about';

import { RouteCommsService } from '../shared/route-comms.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {

  about = About;

  constructor(
    private routeCommsService: RouteCommsService,
  ) { }

  ngOnInit() {
    this.routeCommsService.emit({ sidebarState: 'closed', currentPage: 'about' });
  }

}
