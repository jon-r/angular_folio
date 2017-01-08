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
//import { Subject } from 'rxjs/Subject';
//import { Observable } from 'rxjs/Observable';
var GridItemService = (function () {
    function GridItemService(coords) {
        this.el = {
            coords: coords,
            rotation: '',
            extraStyle: {}
        };
        this.style = {};
    }
    GridItemService.prototype.setPos = function (coords, extra) {
        this.el.coords = coords;
        if (extra) {
            if ('reset' in extra) {
                this.el.extraStyle = {};
                this.el.rotation = '';
                this.style = {};
            }
            else {
                this.el.extraStyle = extra;
                if ('rotate' in extra) {
                    this.el.rotation = "rotate(" + extra.rotate + "deg)";
                }
            }
        }
        if (this.grid)
            this.update();
    };
    GridItemService.prototype.setGrid = function (grid) {
        this.grid = grid;
        this.update();
    };
    GridItemService.prototype.update = function () {
        var arr = [0, 0], coordStr;
        for (var i = 0; i < 2; i++) {
            arr[i] = this.grid[i] * this.el.coords[i];
        }
        coordStr = "translate(" + arr[0] + "px, " + arr[1] + "px) " + this.el.rotation;
        this.style.transform = coordStr;
        for (var attr in this.el.extraStyle) {
            this.style[attr] = this.el.extraStyle[attr];
        }
    };
    GridItemService = __decorate([
        core_1.Injectable(),
        __metadata('design:paramtypes', [Object])
    ], GridItemService);
    return GridItemService;
}());
exports.GridItemService = GridItemService;
//# sourceMappingURL=grid-item.service.js.map
