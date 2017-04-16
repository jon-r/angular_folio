"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var inline_svg_directive_1 = require("./inline-svg.directive");
var InlineSVGModule = (function () {
    function InlineSVGModule() {
    }
    return InlineSVGModule;
}());
InlineSVGModule = __decorate([
    core_1.NgModule({
        declarations: [inline_svg_directive_1.InlineSVGDirective],
        imports: [http_1.HttpModule],
        exports: [inline_svg_directive_1.InlineSVGDirective]
    })
], InlineSVGModule);
exports.InlineSVGModule = InlineSVGModule;
//# sourceMappingURL=inline-svg.module.js.map