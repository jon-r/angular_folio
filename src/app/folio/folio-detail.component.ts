import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MotionService } from '../shared/motion.service';


@Component({
  selector: 'app-folio-detail',
  templateUrl: './folio-detail.component.html',
  styleUrls: ['./folio-detail.component.css'],
})
export class FolioDetailComponent implements OnInit, OnChanges {
  @Input() activeChild;

  projectTemplateUrl: string;

  constructor(
    private motionService: MotionService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {

  }

  ngOnChanges(changes) {
    if (changes.activeChild) {
      const slug = this.activeChild;
      this.projectTemplateUrl = `../assets/${slug}/template.json`;
    }
  }

}


// TODO: make a 'prev' and 'next' buttons?
// TODO: setup the dynamic templatey thing
