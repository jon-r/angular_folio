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
var router_1 = require('@angular/router');
var button_service_1 = require('../shared/button.service');
var project_service_1 = require('../shared/project.service');
var SingleComponent = (function () {
    function SingleComponent(buttonService, projectService, route) {
        this.buttonService = buttonService;
        this.projectService = projectService;
        this.route = route;
        this.buttonService.setButtons({
            home: [-0.5, 0.5],
            about: [1.5, 0.5],
            folio: [0.5, 0.5],
            framer: [0.5, 1.2]
        });
    }
    ;
    SingleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.projectService.getProject(id)
                .then(function (project) { return _this.project = project; });
        });
    };
    SingleComponent.prototype.goBack = function () {
        window.history.back();
    };
    SingleComponent = __decorate([
        core_1.Component({
            selector: 'page-about',
            templateUrl: 'app/single/single.component.html',
            styleUrls: ['app/single/single.component.css']
        }),
        __metadata('design:paramtypes', [button_service_1.ButtonService, project_service_1.ProjectService, router_1.ActivatedRoute])
    ], SingleComponent);
    return SingleComponent;
}());
exports.SingleComponent = SingleComponent;
//# sourceMappingURL=single.component.js.map
