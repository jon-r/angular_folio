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
    ButtonService.prototype.getButtons = function () {
        return Promise.resolve(button_list_1.BUTTONS);
    };
    ButtonService = __decorate([
        core_1.Injectable(),
        __metadata('design:paramtypes', [])
    ], ButtonService);
    return ButtonService;
}());
exports.ButtonService = ButtonService;
//
//import { Injectable } from '@angular/core';
//import { HEROES } from './mock-heroes';
//import { Hero } from './hero';
//
//@Injectable()
//export class HeroService {
//  getHeroes() {
//    return Promise.resolve(HEROES);
//  }
//
//  getHero(id: number): Promise<Hero> {
//    return this.getHeroes()
//      .then(heroes => heroes.find(hero => hero.id === id));
//  }
//}
//# sourceMappingURL=button.service.js.map
