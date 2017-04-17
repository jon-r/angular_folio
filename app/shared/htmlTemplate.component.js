"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/observable/of");
require("rxjs/add/operator/share");
require("rxjs/add/operator/map");
// class HTMLcached {
//   constructor(
//     public url: string,
//     public value: string
//   ) {}
// }
var HtmlTemplateComponent = (function () {
    function HtmlTemplateComponent(http, sanitizer) {
        this.http = http;
        this.sanitizer = sanitizer;
    }
    ;
    // private getRaw(): Promise<string> {
    //
    //   return this.http.get(this.url)
    //     .toPromise()
    //     .then(response => response.text())
    //     .catch(this.handleError)
    // }
    HtmlTemplateComponent.prototype.getCached = function () {
        var _this = this;
        console.log(this.cached);
        if (this.cached) {
            return Observable_1.Observable.of(this.cached);
        }
        if (this.observable) {
            return this.observable;
        }
        this.observable = this.http.get(this.url)
            .map(function (response) {
            _this.observable = null;
            if (response.status == 400)
                return "FAILURE";
            if (response.status == 200)
                _this.cached = response.text();
            return _this.cached;
        })
            .share();
        return this.observable;
    };
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
    HtmlTemplateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getCached().subscribe(function (data) {
            _this.myTemplate = _this.sanitizer.bypassSecurityTrustHtml(data);
            console.log(_this.myTemplate);
        });
    };
    return HtmlTemplateComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], HtmlTemplateComponent.prototype, "url", void 0);
HtmlTemplateComponent = __decorate([
    core_1.Component({
        selector: 'html-template',
        template: "<div [innerHtml]=\"myTemplate\"></div>"
    }),
    __metadata("design:paramtypes", [http_1.Http,
        platform_browser_1.DomSanitizer])
], HtmlTemplateComponent);
exports.HtmlTemplateComponent = HtmlTemplateComponent;
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
//# sourceMappingURL=htmlTemplate.component.js.map