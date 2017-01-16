import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Project } from '../shared/project';

@Injectable()
export class TransitionService {

  private projectSrc = new Subject<Project>();
  private tileStyle = new Subject();

  projectOutput$ = this.projectSrc.asObservable();
  tileOutput$ = this.tileStyle.asObservable();


  setProject(project:Project, el) {
    let out = {
      "transform": `translate(${el.offsetLeft}px, ${el.offsetTop}px)`,
      "width.px" : el.offsetWidth
    }


    this.tileStyle.next(out);

    this.projectSrc.next(project);
  }

  unsetProject() {
    this.projectSrc.next(null);
  }



}
