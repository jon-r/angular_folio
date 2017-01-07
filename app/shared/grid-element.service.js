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
var newgrid_service_1 = require('./newgrid.service');
var GridElementService = (function () {
    function GridElementService(gridService) {
        var _this = this;
        this.gridService = gridService;
        gridService.gridOutput$
            .debounceTime(200)
            .subscribe(function (n) { return _this.setGrid(n); });
    }
    GridElementService.prototype.setPos = function (coords, extra) {
        this.el.coords = coords;
        if (extra) {
            this.el.extraStyle = extra;
            this.el.rotation = ('rotate' in extra)
                ? "rotate(" + extra.rotate + "deg)" : '';
        }
        this.update();
    };
    GridElementService.prototype.setGrid = function (grid) {
        this.grid = grid;
        this.update();
    };
    GridElementService.prototype.update = function () {
        var arr, coordStr;
        for (var i = 0; i < 2; i++) {
            arr[i] = this.grid[i] * this.el.coords[i];
        }
        coordStr = "translate(" + arr[0] + "px, " + arr[1] + "px) " + this.el.rotation;
        this.el.finalStyle.transform = coordStr;
        for (var attr in this.el.extraStyle) {
            this.el.finalStyle[attr] = this.el.extraStyle[attr];
        }
    };
    GridElementService = __decorate([
        core_1.Injectable(),
        __metadata('design:paramtypes', [newgrid_service_1.NewGridService])
    ], GridElementService);
    return GridElementService;
}());
exports.GridElementService = GridElementService;
//# sourceMappingURL=grid-element.service.js.map
