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
//import { Component, OnInit } from '@angular/core';
//import {NgStyle, NgClass} from '@angular/common';
//import {} from '@angular/common';
var Observable_1 = require('rxjs/Observable');
var grid_service_1 = require('./shared/grid.service');
var AppComponent = (function () {
    function AppComponent(gridService) {
        var _this = this;
        this.gridService = gridService;
        this.isLoaded = false;
        this.btnPos = { home: null, about: null, folio: null, framer: null };
        gridService.buttonOutput$
            .debounceTime(200)
            .subscribe(function (n) { return _this.btnPos = n; });
        /*    this.router = Router;

            router.events
              .debounceTime(200)
              .subscribe(e => {
                this.isHome = (e instanceof NavigationEnd && e.urlAfterRedirects == '/home') ? 'home-page' : '';
            });*/
    }
    ;
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gridService.setGrid();
        Observable_1.Observable.fromEvent(window, 'resize')
            .debounceTime(200)
            .subscribe(function (e) { _this.gridService.setGrid(); });
    };
    AppComponent = __decorate([
        core_1.Component({
            // moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            styleUrls: ['app/app.component.css'],
            providers: [grid_service_1.GridService]
        }),
        __metadata('design:paramtypes', [grid_service_1.GridService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
