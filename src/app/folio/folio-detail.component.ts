import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { TemplateContent } from '../shared/template-content';

import { MotionService } from '../shared/motion.service';
import { CachedHttpService } from '../shared/cached-http.service';

@Component({
  selector: 'app-folio-detail',
  templateUrl: './folio-detail.component.html',
  styleUrls: ['./folio-detail.component.css'],
  providers: [CachedHttpService],
})
export class FolioDetailComponent implements OnInit {

  projectTemplate: TemplateContent;

  constructor(
    private motionService: MotionService,
    private activatedRoute: ActivatedRoute,
    private cachedHttpService: CachedHttpService,
  ) { }

  ngOnInit() {
    this.motionService.updatePosition({
      home: [-.5, -.5],
      framer: [5, 1.5]
    });
    this.activatedRoute.params
      .switchMap(params => {
        const url = `../assets/${params.slug}/template.json`;
        return this.cachedHttpService.getFrom(url).data;
      })
      .subscribe(template => this.projectTemplate = template);
  }

}


// TODO: make a 'prev' and 'next' buttons?
// TODO: setup the dynamic templatey thing
