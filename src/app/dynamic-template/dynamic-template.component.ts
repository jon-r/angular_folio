import { Component, OnInit, Input } from '@angular/core';
// import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/switchMap';

// import { TemplateBlockComponent } from './template-block.component';
import { TemplateService } from './template.service';
import { TemplateContent } from './template-content';


@Component({
  selector: 'app-dynamic-template',
  templateUrl: './dynamic-template.component.html',
  styleUrls: ['./dynamic-template.component.css'],
  providers: [TemplateService]
})
export class DynamicTemplateComponent implements OnInit {
  @Input() template: TemplateContent;


  constructor(
    private templateService: TemplateService
  ) { }


  ngOnInit() {



    // .map(template => {
    //     console.log(template);
    //     this.template = template;
    //   });
  }

};
