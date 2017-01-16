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
var Subject_1 = require('rxjs/Subject');
var TransitionService = (function () {
    function TransitionService() {
        this.projectSrc = new Subject_1.Subject();
        this.tileStyle = new Subject_1.Subject();
        this.projectOutput$ = this.projectSrc.asObservable();
        this.tileOutput$ = this.tileStyle.asObservable();
    }
    TransitionService.prototype.setProject = function (project, el) {
        var out = {
            "transform": "translate(" + el.offsetLeft + "px, " + el.offsetTop + "px)",
            "width.px": el.offsetWidth
        };
        this.tileStyle.next(out);
        this.projectSrc.next(project);
    };
    TransitionService.prototype.unsetProject = function () {
        this.projectSrc.next(null);
    };
    TransitionService = __decorate([
        core_1.Injectable(),
        __metadata('design:paramtypes', [])
    ], TransitionService);
    return TransitionService;
}());
exports.TransitionService = TransitionService;
//# sourceMappingURL=transition.service.js.map
