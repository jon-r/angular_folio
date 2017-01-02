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
var transition_service_1 = require('./transition.service');
var project_1 = require('../shared/project');
var TransitionComponent = (function () {
    function TransitionComponent(transitionService) {
        var _this = this;
        this.transitionService = transitionService;
        transitionService.tileOutput$.subscribe(function (n) {
            console.log(n);
            _this.tilePosition = n;
        });
    }
    __decorate([
        core_1.Input(),
        __metadata('design:type', project_1.Project)
    ], TransitionComponent.prototype, "project", void 0);
    TransitionComponent = __decorate([
        core_1.Component({
            selector: 'transition-helper',
            templateUrl: 'app/list/transition.component.html',
            styleUrls: ['app/list/list.component.css']
        }),
        __metadata('design:paramtypes', [transition_service_1.TransitionService])
    ], TransitionComponent);
    return TransitionComponent;
}());
exports.TransitionComponent = TransitionComponent;
//# sourceMappingURL=transition.component.js.map
