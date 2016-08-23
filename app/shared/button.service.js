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
var button_list_1 = require('./button-list');
var ButtonService = (function () {
    function ButtonService() {
    }
    ButtonService.prototype.init = function () {
        return Promise.resolve(button_list_1.BUTTONS);
    };
    ButtonService.prototype.setGrid = function (window) {
        var width = window.target.innerWidth;
        var height = window.target.innerHeight;
        var squareDims = 20;
        var xCount = Math.floor(width / squareDims);
        var yCount = Math.floor(height / squareDims);
        this.grid = {
            squareDims: squareDims,
            count: [xCount, yCount]
        };
    };
    ButtonService.prototype.setPositions = function (posGroup) {
        for (var pos in posGroup) {
            this.buttons[pos] = this.setPosition(posGroup[pos]);
        }
    };
    ;
    ButtonService.prototype.setPosition = function (position) {
        var arr;
        for (var i = 0; i < 2; i++) {
            var n = (position[i] > 0) ? position[i] : this.grid.count[i] - position[i];
            arr[i] = n * this.grid.squareDims;
        }
        return "translate(" + arr.join('px,') + "px)";
    };
    ButtonService.prototype.update = function () {
    };
    ButtonService = __decorate([
        core_1.Injectable(),
        __metadata('design:paramtypes', [])
    ], ButtonService);
    return ButtonService;
}());
exports.ButtonService = ButtonService;
/*
TO DO:

on init: setGrid, setPositions, updateTranslates;

on resize: setGrid, updateTranslates;

on newpage: setPositions, updateTranslates;


*/
//# sourceMappingURL=button.service.js.map
