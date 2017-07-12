import { Component, OnInit } from '@angular/core';

import { RouteCommsService } from '../shared/route-comms.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(
    private routeCommsService: RouteCommsService,
  ) { }

  ngOnInit() {


    this.routeCommsService.emitStates({ sidebar: 'open', page: 'home' });

  }

}
