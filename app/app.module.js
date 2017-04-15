"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//rxjs
require("./rxjs-extensions");
//angular
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var folio_module_1 = require("./folio/folio.module");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var about_component_1 = require("./about/about.component");
var home_component_1 = require("./home/home.component");
var button_service_1 = require("./shared/button.service");
var grid_service_1 = require("./shared/grid.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule,
            folio_module_1.FolioModule
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            about_component_1.AboutComponent,
        ],
        providers: [
            button_service_1.ButtonService,
            grid_service_1.GridService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map