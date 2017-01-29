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
//import 'npm:simplebar/umd/simplebar';
//import { Router } from '@angular/router';
//import { Component, OnInit, Input, ElementRef, Directive, ContentChildren, QueryList, HostListener } from '@angular/core';
var router_1 = require('@angular/router');
var button_service_1 = require('../shared/button.service');
var project_service_1 = require('./project.service');
var FolioListComponent = (function () {
    function FolioListComponent(btnService, projectService, router) {
        var _this = this;
        this.btnService = btnService;
        this.projectService = projectService;
        this.router = router;
        this.projects = [];
        this.btnService.setButtons({
            home: [-0.5, -0.5],
            about: [2, 0.5],
            folio: [1, 0.5],
            framer: [1, 1.2]
        });
        this.sub = router.events
            .filter(function (event) { return event instanceof router_1.NavigationEnd; })
            .subscribe(function (event) {
            if (event.url.endsWith('work')) {
                _this.resetActive();
            }
            else {
                _this.setActive(false);
            }
        });
    }
    ;
    FolioListComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getProjects()
            .then(function (projects) { return _this.projects = projects; });
    };
    FolioListComponent.prototype.ngOnInit = function () {
        this.getProjects();
        this.resetActive();
    };
    FolioListComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    FolioListComponent.prototype.resetActive = function () {
        this.projectPosition = {
            display: 'none'
        };
    };
    FolioListComponent.prototype.clickEvent = function (e) {
        this.setActive(e.target);
    };
    FolioListComponent.prototype.setActive = function (origin) {
        if (origin) {
            var scrolled = this.list.nativeElement.scrollTop;
            this.projectPosition = {
                "transform": "translate(" + origin.offsetLeft + "px, " + (origin.offsetTop - scrolled) + "px)",
                "width.px": origin.offsetWidth
            };
        }
        else {
            this.projectPosition.display = 'block';
        }
        //    this.router.navigate(['work', id]);
        //this.transitionService.setProject(project, e.target);
    };
    __decorate([
        core_1.ViewChild('folioList'),
        __metadata('design:type', core_1.ElementRef)
    ], FolioListComponent.prototype, "list", void 0);
    FolioListComponent = __decorate([
        core_1.Component({
            selector: 'page-list',
            templateUrl: 'app/folio/list.component.html',
            styleUrls: ['app/folio/list.component.css']
        }),
        __metadata('design:paramtypes', [button_service_1.ButtonService, project_service_1.FolioProjectService, router_1.Router])
    ], FolioListComponent);
    return FolioListComponent;
}());
exports.FolioListComponent = FolioListComponent;
//# sourceMappingURL=list.component.js.map
