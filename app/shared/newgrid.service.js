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
var NewGridService = (function () {
    function NewGridService() {
        this.grid = new Subject_1.Subject();
        this.gridOutput$ = this.grid.asObservable();
    }
    NewGridService.prototype.setGrid = function () {
        var out = [window.innerWidth / 10, window.innerHeight / 10];
        this.grid.next(out);
    };
    NewGridService = __decorate([
        core_1.Injectable(),
        __metadata('design:paramtypes', [])
    ], NewGridService);
    return NewGridService;
}());
exports.NewGridService = NewGridService;
//# sourceMappingURL=newgrid.service.js.map
