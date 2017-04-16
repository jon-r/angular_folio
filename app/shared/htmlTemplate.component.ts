import { Component, Sanitizer, OnInit, Input } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

@Component({
  selector: 'html-template',
  template: `<div [innerHtml]="myTemplate"></div>`
})
export class HtmlTemplateComponent {

  private _cached: string;
  private myTemplate: string;
  @Input() url: string;

  constructor(
    private http: Http,
    private sanitizer: Sanitizer,


  ) {




  };

  private getRaw(): Promise<string> {



    return this.http.get(this.url)
      .toPromise()
      .then(response => response.text())
      .catch(this.handleError)
  }

  private getCached() {

    this.getRaw()
    .then(response => {
      this._cached = response;

      this.myTemplate = this.sanitizer.bypassSecurityTrustHtml(response);

      return this._cached;
    });



  }

  // SAFE HTML = http://stackoverflow.com/a/41089093

  private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }


    ngOnInit(): void {



      this.getCached();
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
