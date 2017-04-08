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
var router_1 = require('@angular/router');
var core_1 = require('@angular/core');
var button_service_1 = require('../shared/button.service');
var project_service_1 = require('./project.service');
var FolioDetailComponent = (function () {
    function FolioDetailComponent(btnService, projectService, route) {
        this.btnService = btnService;
        this.projectService = projectService;
        this.route = route;
        this.btnService.setButtons({
            home: [-.5, -.5],
            framer: [-7, 1]
        });
    }
    ;
    FolioDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    FolioDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.projectService.getProject(id)
                .then(function (project) { return _this.project = project; });
        });
    };
    FolioDetailComponent = __decorate([
        core_1.Component({
            selector: 'page-about',
            templateUrl: 'app/folio/detail.component.html',
            styleUrls: ['app/folio/list.component.css']
        }), 
        __metadata('design:paramtypes', [button_service_1.ButtonService, project_service_1.FolioProjectService, router_1.ActivatedRoute])
    ], FolioDetailComponent);
    return FolioDetailComponent;
}());
exports.FolioDetailComponent = FolioDetailComponent;
//# sourceMappingURL=detail.component.js.map