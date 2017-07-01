import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MotionService } from '../shared/motion.service';


@Component({
  selector: 'app-folio-detail',
  templateUrl: './folio-detail.component.html',
  styleUrls: ['./folio-detail.component.css'],
})
export class FolioDetailComponent implements OnInit {

  projectTemplateUrl: string;

  constructor(
    private motionService: MotionService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    // this.motionService.updatePosition({
    //   home: [-.5, -.5],
    //   framer: [5, 1.5]
    // });
    this.activatedRoute.params
      .subscribe(params =>
        this.projectTemplateUrl = `../assets/${params.slug}/template.json`
      );
  }

}


// TODO: make a 'prev' and 'next' buttons?
// TODO: setup the dynamic templatey thing
