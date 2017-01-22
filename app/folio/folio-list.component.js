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
//import { Router } from '@angular/router';
var button_service_1 = require('../shared/button.service');
var folio_project_service_1 = require('./folio-project.service');
var FolioListComponent = (function () {
    function FolioListComponent(btnService, projectService) {
        this.btnService = btnService;
        this.projectService = projectService;
        this.projects = [];
        this.btnService.setButtons({
            home: [-0.5, -0.5],
            about: [2, 0.5],
            folio: [1, 0.5],
            framer: [1, 1.2]
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
    };
    FolioListComponent = __decorate([
        core_1.Component({
            selector: 'page-list',
            templateUrl: 'app/folio/folio-list.component.html',
            styleUrls: ['app/folio/folio-list.component.css']
        }),
        __metadata('design:paramtypes', [button_service_1.ButtonService, folio_project_service_1.FolioProjectService])
    ], FolioListComponent);
    return FolioListComponent;
}());
exports.FolioListComponent = FolioListComponent;
//# sourceMappingURL=folio-list.component.js.map
