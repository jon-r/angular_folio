import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { DynamicTemplateComponent } from '../dynamic-template/dynamic-template.component';
import { TemplateContent } from '../dynamic-template/template-content';

import { AppMotionService } from '../app-motion.service';
import { CachedHttpService } from '../shared/cached-http.service';
// import { FolioProject } from './folio-project';

@Component({
  selector: 'app-folio-detail',
  templateUrl: './folio-detail.component.html',
  styleUrls: ['./folio-detail.component.css']

})
export class FolioDetailComponent implements OnInit {

  id: number;
  sub;

  projectTemplate: TemplateContent;

  constructor(
    private motionService: AppMotionService,
    private activatedRoute: ActivatedRoute,
    private cachedHttpService: CachedHttpService,
    // private router: Router
  ) { }


  ngOnInit() {
    this.motionService.updatePosition({
      home: [-.5, -.5],
      framer: [5, 1.5]
    });
    this.sub = this.activatedRoute.params
    .switchMap(params => this.cachedHttpService.getTemplate(params))
    .subscribe(template => this.projectTemplate = template);
  }

}


// TODO: make a 'prev' and 'next' buttons?
// TODO: setup the dynamic templatey thing
