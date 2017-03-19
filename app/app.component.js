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
var button_service_1 = require('./shared/button.service');
var grid_service_1 = require('./shared/grid.service');
var AppComponent = (function () {
    function AppComponent(btnService) {
        var _this = this;
        this.btnService = btnService;
        btnService.buttonOutput$
            .subscribe(function (n) { return _this.updatePos(n); });
        this.btnPos = { home: null, framer: null };
    }
    ;
    AppComponent.prototype.updatePos = function (pos) {
        for (var el in this.btnPos) {
            var extra = pos[el][2] ?
                pos[el][2] : { reset: true };
            this.btnPos[el].setPos(pos[el], extra);
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        ['home', 'framer']
            .forEach(function (el) { return _this.btnPos[el] = new grid_service_1.GridService(); });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            styleUrls: ['app/app.component.css'],
            providers: [button_service_1.ButtonService]
        }),
        __metadata('design:paramtypes', [button_service_1.ButtonService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
