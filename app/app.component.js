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
var router_1 = require('@angular/router');
var button_service_1 = require('./shared/button.service');
var AppComponent = (function () {
    function AppComponent(buttonService, router) {
        var _this = this;
        this.buttonService = buttonService;
        this.btnPos = { home: null, about: null, folio: null, framer: null };
        buttonService.buttonOutput$
            .debounceTime(200)
            .subscribe(function (n) { return _this.btnPos = n; });
        this.router = router_1.Router;
        router.events
            .debounceTime(200)
            .subscribe(function (e) {
            _this.pageClass = (e instanceof router_1.NavigationEnd && e.urlAfterRedirects == '/home') ? 'home-page' : '';
        });
        //   router.events.
        //  router.changes.subscribe(console.log(router));
    }
    ;
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.buttonService.setGrid();
        document.getElementById('js_headerLogo').classList.add('blah');
        Observable_1.Observable.fromEvent(window, 'resize')
            .debounceTime(200)
            .subscribe(function (e) { _this.buttonService.setGrid(); });
    };
    AppComponent = __decorate([
        core_1.Component({
            // moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            styleUrls: ['app/app.component.css'],
            providers: [button_service_1.ButtonService]
        }),
        __metadata('design:paramtypes', [button_service_1.ButtonService, router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
