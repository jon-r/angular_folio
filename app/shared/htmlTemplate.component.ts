import { Component, OnInit, Input} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'
import { Headers, Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/observable/of';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';

// class HTMLcached {
//   constructor(
//     public url: string,
//     public value: string
//   ) {}
// }

@Component({
  selector: 'html-template',
  template: `<div [innerHtml]="myTemplate"></div>`
})
export class HtmlTemplateComponent {

  constructor(
    private http: Http,
    private sanitizer: DomSanitizer
  ) {};

  private cached: string;
  private observable: Observable<any>;

  private myTemplate;
  @Input() url: string;


  // private getRaw(): Promise<string> {
  //
  //   return this.http.get(this.url)
  //     .toPromise()
  //     .then(response => response.text())
  //     .catch(this.handleError)
  // }

  private getCached() {

    console.log(this.cached);


    if (this.cached) {
      return Observable.of(this.cached);
    }
    if (this.observable) {
      return this.observable;
    }

    this.observable = this.http.get(this.url)
    .map(response => {

      this.observable = null;

      if (response.status == 400) return "FAILURE";

      if(response.status == 200) this.cached = response.text();

      return this.cached;

    })
    .share();

    return this.observable;

  }



    // this.getRaw()
    //   .then(response => {
    //     let responseHtml = response;
    //
    //
    //     //console.log(response);
    //
    //     return response;
    //   });
    // }

  //
  // private strToHtml(str, filterTag?): HTMLElement {
  //   let el = document.createElement('ul');
  //   el.insertAdjacentHTML('afterbegin', str);
  //
  //   return filterTag ? el.getElementsByTagName(filterTag)[0] : el;
  // }

  // SAFE HTML = http://stackoverflow.com/a/41089093
  //
  // private handleError(error: any): Promise<any> {
  //     console.error('An error occurred', error); // for demo purposes only
  //     return Promise.reject(error.message || error);
  //   }


    ngOnInit(): void {

      this.getCached().subscribe(data => {
        this.myTemplate = this.sanitizer.bypassSecurityTrustHtml(data);

        console.log(this.myTemplate);

      })

    }

}


// @Input() evalScripts: 'always' | 'once' | 'never' = 'always';
//
// private _evalScripts(svg: SVGElement, url: string) {
//   const scripts = svg.querySelectorAll('script');
//   const scriptsToEval = [];
//   let script, scriptType;
//
//   // Fetch scripts from SVG
//   for (let i = 0; i < scripts.length; i++) {
//     scriptType = scripts[i].getAttribute('type');
//
//     if (!scriptType || scriptType === 'application/ecmascript' || scriptType === 'application/javascript') {
//       script = scripts[i].innerText || scripts[i].textContent;
//       scriptsToEval.push(script);
//       svg.removeChild(scripts[i]);
//     }
//   }
//
//   // Run scripts in closure as needed
//   if (scriptsToEval.length > 0 && (this.evalScripts === 'always' ||
//       (this.evalScripts === 'once' && !this._ranScripts[url]))) {
//     for (let i = 0; i < scriptsToEval.length; i++) {
//       new Function(scriptsToEval[i])(window);
//     }
//
//     this._ranScripts[url] = true;
//   }
// }
//
// private _ranScripts: { [url: string]: boolean } = {};
