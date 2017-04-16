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
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/finally");
require("rxjs/add/operator/map");
require("rxjs/add/operator/share");
var SVGCache = SVGCache_1 = (function () {
    function SVGCache(_renderer, _http) {
        this._renderer = _renderer;
        this._http = _http;
        if (!SVGCache_1._cache) {
            SVGCache_1._cache = new Map();
        }
        if (!SVGCache_1._inProgressReqs) {
            SVGCache_1._inProgressReqs = new Map();
        }
    }
    SVGCache.prototype.getSVG = function (url, cache) {
        var _this = this;
        if (cache === void 0) { cache = true; }
        // Return cached copy if it exists
        if (cache && SVGCache_1._cache.has(url)) {
            return Observable_1.Observable.of(this._cloneSVG(SVGCache_1._cache.get(url)));
        }
        // Return existing fetch observable
        if (SVGCache_1._inProgressReqs.has(url)) {
            return SVGCache_1._inProgressReqs.get(url);
        }
        // Otherwise, make the HTTP call to fetch
        var req = this._http.get(url)
            .map(function (res) { return res.text(); })
            .catch(function (err) { return err; })
            .finally(function () {
            SVGCache_1._inProgressReqs.delete(url);
        })
            .share()
            .map(function (svgText) {
            var svgEl = _this._svgElementFromString(svgText);
            SVGCache_1._cache.set(url, svgEl);
            return _this._cloneSVG(svgEl);
        });
        SVGCache_1._inProgressReqs.set(url, req);
        return req;
    };
    /** @internal */
    SVGCache.prototype._svgElementFromString = function (str) {
        var div = this._renderer.createElement('DIV');
        div.innerHTML = str;
        var svg = div.querySelector('svg');
        if (!svg) {
            throw new Error('No SVG found in loaded contents');
        }
        return svg;
    };
    /** @internal */
    SVGCache.prototype._cloneSVG = function (svg) {
        return svg.cloneNode(true);
    };
    return SVGCache;
}());
SVGCache = SVGCache_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_1.Renderer2,
        http_1.Http])
], SVGCache);
exports.SVGCache = SVGCache;
var SVGCache_1;
//# sourceMappingURL=svg-cache.service.js.map