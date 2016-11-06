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
//import { Component, OnInit, trigger, state, style, transition, animate, keyframes } from '@angular/core';
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
//import {NgStyle} from '@angular/common';
//import { LazyLoadImageDirective } from 'ng2-lazyload-image';
var button_service_1 = require('../shared/button.service');
var project_service_1 = require('../shared/project.service');
var ListComponent = (function () {
    //  ph: string = 'http://placehold.it/10x10';
    //  temp: string = 'https://placekitten.com/300/300';
    function ListComponent(buttonService, projectService, router) {
        this.buttonService = buttonService;
        this.projectService = projectService;
        this.router = router;
        this.listPush = '';
        this.buttonService.setButtons({
            home: [-0.5, -0.5],
            about: [1.5, 0.5],
            folio: [0.5, 0.5],
            framer: [0.5, 1.2]
        });
    }
    ;
    ListComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getProjects().then(function (projects) { return _this.projects = projects; });
    };
    ListComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    ListComponent.prototype.goTo = function (project) {
        var _this = this;
        this.listPush = 'push';
        setTimeout(function () { return _this.router.navigate(['/work', project.id]); }, 600);
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: 'page-list',
            templateUrl: 'app/list/list.component.html',
            //  directives: [ LazyLoadImageDirective ],
            //  animations: [
            //    trigger('pageView', [
            //      state('in', style({transform: 'transform: translateY(0)' })),
            //      transition('void => *', [
            //        animate('600ms ease-out', keyframes([
            //          style({opacity: 0, transform: 'translateY(100%)', offset: 0}),
            //          style({opacity: 1, transform: 'translateY(-10%)', offset: 0.7}),
            //          style({opacity: 1, transform: 'translateY(0)', offset: 1}),
            //        ]))
            //      ])
            //    ])
            //  ],
            styleUrls: ['app/list/list.component.css']
        }),
        __metadata('design:paramtypes', [button_service_1.ButtonService, project_service_1.ProjectService, router_1.Router])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map
