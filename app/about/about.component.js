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
var core_1 = require('@angular/core');
var button_service_1 = require('../shared/button.service');
var AboutComponent = (function () {
    function AboutComponent(buttonService) {
        this.buttonService = buttonService;
        this.buttonService.setButtons({
            home: [-0.5, 0.5],
            about: [0.5, 0.5],
            folio: [1.5, 0.5],
            framer: [0.5, 1.2]
        });
    }
    ;
    AboutComponent = __decorate([
        core_1.Component({
            selector: 'page-about',
            templateUrl: 'app/about/about.component.html',
            styleUrls: ['app/about/about.component.css']
        }),
        __metadata('design:paramtypes', [button_service_1.ButtonService])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map