"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/finally");
require("rxjs/add/operator/map");
require("rxjs/add/operator/share");
var SVGCache = (function () {
    function SVGCache(_renderer, _http) {
        this._renderer = _renderer;
        this._http = _http;
        if (!SVGCache._cache) {
            SVGCache._cache = new Map();
        }
        if (!SVGCache._inProgressReqs) {
            SVGCache._inProgressReqs = new Map();
        }
    }
    SVGCache.prototype.getSVG = function (url, cache) {
        var _this = this;
        if (cache === void 0) { cache = true; }
        if (cache && SVGCache._cache.has(url)) {
            return Observable_1.Observable.of(this._cloneSVG(SVGCache._cache.get(url)));
        }
        if (SVGCache._inProgressReqs.has(url)) {
            return SVGCache._inProgressReqs.get(url);
        }
        var req = this._http.get(url)
            .map(function (res) { return res.text(); })
            .catch(function (err) { return err; })
            .finally(function () {
            SVGCache._inProgressReqs.delete(url);
        })
            .share()
            .map(function (svgText) {
            var svgEl = _this._svgElementFromString(svgText);
            SVGCache._cache.set(url, svgEl);
            return _this._cloneSVG(svgEl);
        });
        SVGCache._inProgressReqs.set(url, req);
        return req;
    };
    SVGCache.prototype._svgElementFromString = function (str) {
        var div = this._renderer.createElement('DIV');
        div.innerHTML = str;
        var svg = div.querySelector('svg');
        if (!svg) {
            throw new Error('No SVG found in loaded contents');
        }
        return svg;
    };
    SVGCache.prototype._cloneSVG = function (svg) {
        return svg.cloneNode(true);
    };
    return SVGCache;
}());
SVGCache.decorators = [
    { type: core_1.Injectable },
];
SVGCache.ctorParameters = function () { return [
    { type: core_1.Renderer2, },
    { type: http_1.Http, },
]; };
exports.SVGCache = SVGCache;
