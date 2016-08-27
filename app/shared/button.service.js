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
//import { Positions } from './positions';
//import { BUTTONS } from './button-list';
var ButtonService = (function () {
    function ButtonService() {
        // private buttonPositions: Buttons = {home: '',about: '',folio: ''}
        this.btnSrc = new Subject_1.Subject();
        this.buttonOutput$ = this.btnSrc.asObservable();
    }
    ButtonService.prototype.setGrid = function () {
        /*    let squareDims = 20;
            let xCount =
            let yCount = window.innerHeight / 10;*/
        //    this.grid.x = 10;
        this.grid = [window.innerWidth / 10, window.innerHeight / 10];
        if (this.btnStore) {
            this.setButtons(this.btnStore);
        }
    };
    ButtonService.prototype.setButtons = function (buttons) {
        var _this = this;
        var out = { home: null, about: null, folio: null };
        this.btnStore = buttons;
        for (var btn in buttons) {
            out[btn] = this.calcPos(buttons[btn]);
        }
        setTimeout(function () { return _this.btnSrc.next(out); }, 200);
    };
    ButtonService.prototype.calcPos = function (coords) {
        var _this = this;
        var arr = [];
        coords.forEach(function (el, i) { return arr[i] = _this.grid[i] * el; });
        return { 'transform': "translate(" + arr.join('px,') + "px)" };
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
