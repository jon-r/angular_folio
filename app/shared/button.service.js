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
var ButtonService = (function () {
    function ButtonService() {
        this.btnSrc = new Subject_1.Subject();
        this.buttonOutput$ = this.btnSrc.asObservable();
    }
    ButtonService.prototype.setGrid = function () {
        this.grid = [window.innerWidth / 10, window.innerHeight / 10];
        if (this.btnStore) {
            this.setButtons(this.btnStore);
        }
    };
    ButtonService.prototype.setButtons = function (buttons) {
        var out = { home: null, about: null, folio: null, framer: null };
        this.btnStore = buttons;
        for (var btn in buttons) {
            out[btn] = this.calcPos(buttons[btn]);
        }
        this.btnSrc.next(out);
        // setTimeout(() => this.btnSrc.next(out), 200);
    };
    ButtonService.prototype.calcPos = function (coords) {
        var _this = this;
        var arr = [], rotate = '', barLength = null;
        if (coords.length > 2) {
            rotate = 'rotate(90deg)';
            barLength = '60vh';
        }
        coords.forEach(function (el, i) { return arr[i] = _this.grid[i] * el; });
        return {
            'transform': "translate(" + arr[0] + "px, " + arr[1] + "px) " + rotate,
            'width': barLength
        };
    };
    ButtonService = __decorate([
        core_1.Injectable(),
        __metadata('design:paramtypes', [])
    ], ButtonService);
    return ButtonService;
}());
exports.ButtonService = ButtonService;
//# sourceMappingURL=button.service.js.map
