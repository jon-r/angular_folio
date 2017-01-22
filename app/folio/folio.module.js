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
var common_1 = require('@angular/common');
var http_1 = require('@angular/http');
var folio_routing_module_1 = require('./folio-routing.module');
var folio_list_component_1 = require('./folio-list.component');
var folio_detail_component_1 = require('./folio-detail.component');
var folio_project_service_1 = require('./folio-project.service');
var FolioModule = (function () {
    function FolioModule() {
    }
    FolioModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                folio_routing_module_1.FolioRoutingModule,
                http_1.HttpModule
            ],
            declarations: [
                folio_list_component_1.FolioListComponent,
                folio_detail_component_1.FolioDetailComponent,
            ],
            providers: [
                folio_project_service_1.FolioProjectService
            ]
        }),
        __metadata('design:paramtypes', [])
    ], FolioModule);
    return FolioModule;
}());
exports.FolioModule = FolioModule;
//# sourceMappingURL=folio.module.js.map
