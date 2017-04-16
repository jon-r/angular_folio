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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var HTMLGetService = (function () {
    function HTMLGetService(http) {
        this.http = http;
    }
    HTMLGetService.prototype.getRaw = function (path) {
        return this.http.get(path)
            .toPromise()
            .then(function (response) { return response.text(); })
            .catch(this.handleError);
    };
    // SAFE HTML = http://stackoverflow.com/a/41089093
    HTMLGetService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return HTMLGetService;
}());
HTMLGetService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HTMLGetService);
exports.HTMLGetService = HTMLGetService;
// import { Injectable } from '@angular/core';
// import { Headers, Http } from '@angular/http';
//
// import 'rxjs/add/operator/toPromise';
//
// import { FolioProject } from './project';
//
// @Injectable()
// export class FolioProjectService {
//
//   private dataUrl = 'static/projects-list.json';
//
//   constructor(private http: Http) {}
//
//   getProjects(): Promise<FolioProject[]> {
//     return this.http.get(this.dataUrl)
//       .toPromise()
//       .then(response => response.json().data as FolioProject[])
//       .catch(this.handleError);
//   }
//
//   getProject(id: number): Promise<FolioProject> {
//     return this.getProjects()
//       .then(projects => projects.find(project => project.id === id));
//   }
//
//   private handleError(error: any): Promise<any> {
//     console.error('An error occurred', error); // for demo purposes only
//     return Promise.reject(error.message || error);
//   }
//
// }
//# sourceMappingURL=htmlGet.service.js.map