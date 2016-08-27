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
var button_service_1 = require('../shared/button.service');
var page_set_service_1 = require('../shared/page-set.service');
var ListComponent = (function () {
    function ListComponent(buttonService, pageSetService) {
        //    this.pageSetService.setClass('list');
        this.buttonService = buttonService;
        this.pageSetService = pageSetService;
        this.buttonService.setButtons({
            home: [-0.5, 0],
            about: [1.5, 0.5],
            folio: [0.5, 0.5]
        });
    }
    ;
    ListComponent.prototype.ngOnInit = function () {
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: 'page-list',
            templateUrl: 'app/list/list.component.html',
            styleUrls: ['app/list/list.component.css']
        }),
        __metadata('design:paramtypes', [button_service_1.ButtonService, page_set_service_1.PageSetService])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map
