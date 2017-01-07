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
var grid_service_1 = require('./shared/grid.service');
var grid_item_service_1 = require('./shared/grid-item.service');
//import { NewGridService } from './shared/newgrid.service';
var transition_service_1 = require('./list/transition.service');
var AppComponent = (function () {
    function AppComponent(gridService, newGridService, transitionService) {
        var _this = this;
        this.gridService = gridService;
        this.newGridService = newGridService;
        this.transitionService = transitionService;
        this.isLoaded = false;
        this.btnPos = { home: null, about: null, folio: null, framer: null };
        newGridService.gridOutput$
            .debounceTime(200)
            .subscribe(function (n) { return _this.updateGrid(n); });
        newGridService.buttonOutput$
            .debounceTime(200)
            .subscribe(function (n) { return _this.updatePos(n); });
        transitionService.projectOutput$
            .subscribe(function (n) { return _this.activeProject = n; });
    }
    ;
    //  router: any;
    //btnPos;
    AppComponent.prototype.updateGrid = function (coords) {
        for (var el in this.btnPos) {
            this.btnPos[el].setGrid(coords);
        }
    };
    AppComponent.prototype.updatePos = function (pos) {
        for (var el in this.btnPos) {
            this.btnPos[el].setPos(pos[el]);
        }
        console.log(this.btnPos.home);
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gridService.setGrid();
        this.newGridService.setGrid();
        ['home', 'about', 'folio', 'framer']
            .forEach(function (el) { return _this.btnPos[el] = new grid_item_service_1.GridItemService([0, 0]); });
        /*    this.els = {
              home : new GridItemService(),
              about : new GridItemService(),
              folio : new GridItemService(),
              framer : new GridItemService()
            }*/
        console.log(this.btnPos);
        Observable_1.Observable.fromEvent(window, 'resize')
            .debounceTime(200)
            .subscribe(function (e) {
            _this.gridService.setGrid();
            _this.newGridService.setGrid();
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            // moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            styleUrls: ['app/app.component.css'],
            providers: [grid_service_1.NewGridService, grid_service_1.GridService, transition_service_1.TransitionService]
        }),
        __metadata('design:paramtypes', [grid_service_1.GridService, grid_service_1.NewGridService, transition_service_1.TransitionService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
