import { Component } from '@angular/core';
import { Observable }  from 'rxjs/Observable';

import { WindowRefService }   from './shared/window-ref.service';


@Component({
 // moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})

export class AppComponent {

  private _window: Window;
  private folio;

  constructor(private windowRef: WindowRefService) {
    this._window = windowRef.nativeWindow;
  };


  ngOnInit(): void {

  }
}
