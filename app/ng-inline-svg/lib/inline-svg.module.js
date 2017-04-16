"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var inline_svg_directive_1 = require("./inline-svg.directive");
var InlineSVGModule = (function () {
    function InlineSVGModule() {
    }
    return InlineSVGModule;
}());
InlineSVGModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [inline_svg_directive_1.InlineSVGDirective],
                imports: [http_1.HttpModule],
                exports: [inline_svg_directive_1.InlineSVGDirective]
            },] },
];
InlineSVGModule.ctorParameters = function () { return []; };
exports.InlineSVGModule = InlineSVGModule;
