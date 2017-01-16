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
var Observable_1 = require('rxjs/Observable');
var button_service_1 = require('./home/button.service');
var transition_service_1 = require('./list/transition.service');
var grid_service_1 = require('./shared/grid.service');
var AppComponent = (function () {
    function AppComponent(btnService, transitionService) {
        var _this = this;
        this.btnService = btnService;
        this.transitionService = transitionService;
        this.isLoaded = false;
        this.btnPos = { home: null, about: null, folio: null, framer: null };
        btnService.buttonOutput$
            .debounceTime(200)
            .subscribe(function (n) { return _this.updatePos(n); });
        transitionService.projectOutput$
            .subscribe(function (n) { return _this.activeProject = n; });
    }
    ;
    //  router: any;
    //btnPos;
    //
    AppComponent.prototype.updateGrid = function () {
        for (var el in this.btnPos) {
            this.btnPos[el].update();
        }
    };
    AppComponent.prototype.updatePos = function (pos) {
        for (var el in this.btnPos) {
            var extra = pos[el][2] ?
                pos[el][2] : { reset: true };
            this.btnPos[el].setPos(pos[el], extra);
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        ['home', 'about', 'folio', 'framer']
            .forEach(function (el) { return _this.btnPos[el] = new grid_service_1.GridService(); });
        Observable_1.Observable.fromEvent(window, 'resize')
            .debounceTime(200)
            .subscribe(function (e) { return _this.updateGrid(); });
    };
    AppComponent = __decorate([
        core_1.Component({
            // moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            styleUrls: ['app/app.component.css'],
            providers: [transition_service_1.TransitionService, button_service_1.ButtonService]
        }),
        __metadata('design:paramtypes', [button_service_1.ButtonService, transition_service_1.TransitionService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
