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
//import { LazyLoadImageDirective } from 'ng2-lazyload-image';
var grid_service_1 = require('../shared/grid.service');
var button_service_1 = require('../home/button.service');
var project_service_1 = require('../shared/project.service');
var transition_service_1 = require('./transition.service');
var ListComponent = (function () {
    //  ph: string = 'http://placehold.it/10x10';
    //  temp: string = 'https://placekitten.com/300/300';
    function ListComponent(gridService, btnService, projectService, transitionService, router) {
        this.gridService = gridService;
        this.btnService = btnService;
        this.projectService = projectService;
        this.transitionService = transitionService;
        this.router = router;
        this.projects = [];
        this.listPush = '';
        this.btnService.setButtons({
            home: [-0.5, -0.5],
            about: [2, 0.5],
            folio: [1, 0.5],
            framer: [1, 1.2]
        });
    }
    ;
    ListComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getProjects()
            .then(function (projects) { return _this.projects = projects; });
        //      while (projects.length > 0) {
        //        this.projects.push(projects.splice(0, 6));
        //      }
        // });
    };
    //  setTilePos(project : Project) {
    //    project.tilePos = {
    //      'background-image' : `url(app/lib/${project.img.name})`,
    //      'background-position' : project.img.centre
    //    }
    //    return project;
    //  }
    ListComponent.prototype.ngOnInit = function () {
        this.getProjects();
        this.scroller = document.getElementById('content');
    };
    ListComponent.prototype.goTo = function (project, e) {
        var _this = this;
        this.listPush = 'push';
        this.transitionService.setProject(project, e.target);
        this.scroller.scrollTop = 0;
        setTimeout(function () { return _this.router.navigate(['/work', project.id]); }, 300);
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
        __metadata('design:paramtypes', [grid_service_1.GridService, button_service_1.ButtonService, project_service_1.ProjectService, transition_service_1.TransitionService, router_1.Router])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map
