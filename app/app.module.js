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
//rxjs
require('./rxjs-extensions');
//angular
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var app_routing_module_1 = require('./app-routing.module');
var app_component_1 = require('./app.component');
var grid_pipe_1 = require('./shared/grid.pipe');
var about_component_1 = require('./about/about.component');
var list_component_1 = require('./list/list.component');
var transition_component_1 = require('./list/transition.component');
var single_component_1 = require('./single/single.component');
var home_component_1 = require('./home/home.component');
var button_service_1 = require('./home/button.service');
var grid_service_1 = require('./shared/grid.service');
var project_service_1 = require('./shared/project.service');
var transition_service_1 = require('./list/transition.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                about_component_1.AboutComponent,
                list_component_1.ListComponent,
                transition_component_1.TransitionComponent,
                single_component_1.SingleComponent,
                grid_pipe_1.ScreenGridPipe
            ],
            providers: [
                button_service_1.ButtonService,
                grid_service_1.GridService,
                transition_service_1.TransitionService,
                project_service_1.ProjectService
            ],
            bootstrap: [app_component_1.AppComponent]
        }),
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
