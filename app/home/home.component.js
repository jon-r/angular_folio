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
var button_service_1 = require('../home/button.service');
var HomeComponent = (function () {
    function HomeComponent(btnService) {
        this.btnService = btnService;
        this.btnService.setButtons({
            home: [-6, -3.5],
            about: [4.3, 3.8],
            folio: [4.3, 3],
            framer: [4, 1.5, 1]
        });
    }
    ;
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'page-home',
            templateUrl: 'app/home/home.component.html',
            styleUrls: ['app/home/home.component.css']
        }),
        __metadata('design:paramtypes', [button_service_1.ButtonService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map
