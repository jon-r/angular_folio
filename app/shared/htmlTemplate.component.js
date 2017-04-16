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
var http_1 = require("@angular/http");
var HtmlTemplateComponent = (function () {
    function HtmlTemplateComponent(http, sanitizer) {
        this.http = http;
        this.sanitizer = sanitizer;
    }
    ;
    HtmlTemplateComponent.prototype.getRaw = function () {
        return this.http.get(this.url)
            .toPromise()
            .then(function (response) { return response.text(); })
            .catch(this.handleError);
    };
    HtmlTemplateComponent.prototype.getCached = function () {
        var _this = this;
        this.getRaw()
            .then(function (response) {
            _this._cached = response;
            _this.myTemplate = _this.sanitizer.bypassSecurityTrustHtml(response);
            return _this._cached;
        });
    };
    // SAFE HTML = http://stackoverflow.com/a/41089093
    HtmlTemplateComponent.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    HtmlTemplateComponent.prototype.ngOnInit = function () {
        this.getCached();
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
        core_1.Sanitizer])
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