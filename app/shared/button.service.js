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
var ButtonService = (function () {
    function ButtonService() {
        this.grid = null;
        this.counter = 0;
        this.buttons = null;
    }
    ButtonService.prototype.setGrid = function (window) {
        var width = window.innerWidth;
        var height = window.innerHeight;
        var squareDims = 20;
        var xCount = Math.floor(width / squareDims);
        var yCount = Math.floor(height / squareDims);
        this.grid = {
            squareDims: squareDims,
            count: [xCount, yCount]
        };
    };
    ButtonService.prototype.setLayout = function (coords) {
        var arrIn = coords.split(',');
        var arr = [];
        for (var i = 0; i < 2; i++) {
            var n = (+arrIn[i] > 0) ? +arrIn[i] : this.grid.count[i] - +arrIn[i];
            arr[i] = n * this.grid.squareDims;
        }
        return "translate(" + arr.join('px,') + "px)";
        //this.updatePositions();
    };
    ButtonService = __decorate([
        core_1.Injectable(),
        __metadata('design:paramtypes', [])
    ], ButtonService);
    return ButtonService;
}());
exports.ButtonService = ButtonService;
//  updatePositions() {
//
//    if (this.grid && this.buttons) {
//
//
//
//      for (let pos in this.buttonPositions) {
//        //this.buttonPositions[pos] = this.calcPosition(this.buttons[pos]);
//
//        let arrIn: string[] = pos.split(',');
//        let arr: number[] = [];
//
//        for (let i = 0; i < 2; i ++) {
//          let n = (+arrIn[i] > 0) ? +arrIn[i] : this.grid.count[i] - +arrIn[i];
//          arr[i] = n * this.grid.squareDims;
//        }
//
//        set[pos] = `translate(${arr.join('px,')}px)`;
//
//        this.buttonPositions[pos] = `translate(${arr.join('px,')}px)`;
//
//      }
//
//      console.log(set);
//
//      console.info(this.buttonPositions);
//
//    }
//
//
//  };
//}
/*
TO DO:

on init: setGrid, setPositions, updateTranslates;

on resize: setGrid, updateTranslates;

on newpage: setPositions, updateTranslates;


*/
//# sourceMappingURL=button.service.js.map
