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
var project_service_1 = require('../shared/project.service');
var ListComponent = (function () {
    function ListComponent(buttonService, projectService) {
        this.buttonService = buttonService;
        this.projectService = projectService;
        this.temp = 'https://placekitten.com/300/300';
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
    ListComponent = __decorate([
        core_1.Component({
            selector: 'page-list',
            templateUrl: 'app/list/list.component.html',
            animations: [
                core_1.trigger('pageView', [
                    core_1.state('in', core_1.style({ transform: 'transform: translateY(0)' })),
                    core_1.transition('void => *', [
                        core_1.animate('600ms 200ms ease-out', core_1.keyframes([
                            core_1.style({ opacity: 0, transform: 'translateY(100%)', offset: 0 }),
                            core_1.style({ opacity: 1, transform: 'translateY(-10%)', offset: 0.7 }),
                            core_1.style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
                        ]))
                    ])
                ])
            ],
            styles: ["\n.projects li {\n  display: inline-block;\n  width: 20%;\n  padding: 15px;\n  text-align: center;\n  vertical-align: top;\n}\n.projects figure {\n  background-color: white;\n  padding: 15px;\n}\n/*:host {\n  transition: translate ease-in 0.6s;\n}\n:host(.ng-enter) {\n  transform: translateY(100%);\n}\n:host(.ng-enter-active) {\n  transform: translateY(0);\n}*/\n  "]
        }),
        __metadata('design:paramtypes', [button_service_1.ButtonService, project_service_1.ProjectService])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map
