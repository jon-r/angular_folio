import { Component, OnInit } from '@angular/core';

import About from './about';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {

  about = About;

  constructor() { }

  ngOnInit() { }

}
