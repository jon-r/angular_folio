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
var svg_cache_service_1 = require("./svg-cache.service");
var InlineSVGDirective = (function () {
    function InlineSVGDirective(_renderer, _el, _svgCache) {
        this._renderer = _renderer;
        this._el = _el;
        this._svgCache = _svgCache;
        this.replaceContents = true;
        this.prepend = false;
        this.cacheSVG = true;
        this.forceEvalStyles = false;
        this.evalScripts = 'always';
        this.onSVGInserted = new core_1.EventEmitter();
        this.onSVGFailed = new core_1.EventEmitter();
        /** @internal */
        this._supportsSVG = true;
        /** @internal */
        this._ranScripts = {};
    }
    InlineSVGDirective.prototype.ngOnInit = function () {
        this._insertSVG();
    };
    InlineSVGDirective.prototype.ngOnChanges = function (changes) {
        if (changes['inlineSVG']) {
            this._insertSVG();
        }
    };
    /** @internal */
    InlineSVGDirective.prototype._insertSVG = function () {
        var _this = this;
        if (!this._supportsSVG) {
            return;
        }
        // Check if the browser supports embed SVGs
        if (!this._checkSVGSupport()) {
            this._fail('Embed SVG not supported by browser');
            this._supportsSVG = false;
            return;
        }
        // Check if a URL was actually passed into the directive
        if (!this.inlineSVG) {
            this._fail('No URL passed to [inlineSVG]');
            return;
        }
        // Support for symbol IDs
        if (this.inlineSVG.charAt(0) === '#' || this.inlineSVG.indexOf('.svg#') > -1) {
            var elSvg = this._renderer.createElement('svg', 'svg');
            var elSvgUse = this._renderer.createElement('use', 'svg');
            this._renderer.setAttribute(elSvgUse, 'href', this.inlineSVG, 'xlink');
            this._renderer.appendChild(elSvg, elSvgUse);
            this._insertEl(elSvg);
            this.onSVGInserted.emit(elSvg);
            return;
        }
        // Get absolute URL, and check if it's actually new
        var absUrl = this._getAbsoluteUrl(this.inlineSVG);
        if (absUrl !== this._absUrl) {
            this._absUrl = absUrl;
            // Fetch SVG via cache mechanism
            this._svgCache.getSVG(this._absUrl, this.cacheSVG)
                .subscribe(function (svg) {
                // Insert SVG
                if (svg && _this._el.nativeElement) {
                    if (_this.removeSVGAttributes) {
                        _this._removeAttributes(svg, _this.removeSVGAttributes);
                    }
                    _this._insertEl(svg);
                    // Script evaluation
                    _this._evalScripts(svg, absUrl);
                    // Force evaluation of <style> tags since IE doesn't do it.
                    // Reference: https://github.com/arkon/ng-inline-svg/issues/17
                    if (_this.forceEvalStyles) {
                        var styleTags = svg.querySelectorAll('style');
                        Array.prototype.forEach.call(styleTags, function (tag) { return tag.textContent += ''; });
                    }
                    _this.onSVGInserted.emit(svg);
                }
            }, function (err) {
                _this._fail(err);
            });
        }
    };
    /** @internal */
    InlineSVGDirective.prototype._getAbsoluteUrl = function (url) {
        var base = this._renderer.createElement('BASE');
        base.href = url;
        return base.href;
    };
    /** @internal */
    InlineSVGDirective.prototype._removeAttributes = function (svg, attrs) {
        var innerEls = svg.getElementsByTagName('*');
        for (var i = 0; i < innerEls.length; i++) {
            var elAttrs = innerEls[i].attributes;
            for (var j = 0; j < elAttrs.length; j++) {
                if (attrs.indexOf(elAttrs[j].name.toLowerCase()) > -1) {
                    innerEls[i].removeAttribute(elAttrs[j].name);
                }
            }
        }
    };
    /** @internal */
    InlineSVGDirective.prototype._insertEl = function (el) {
        if (this.replaceContents && !this.prepend) {
            this._renderer.setProperty(this._el.nativeElement, 'innerHTML', '');
        }
        if (this.prepend) {
            this._renderer.insertBefore(this._el.nativeElement, el, this._el.nativeElement.firstChild);
        }
        else {
            this._renderer.appendChild(this._el.nativeElement, el);
        }
    };
    // Based off code from https://github.com/iconic/SVGInjector
    /** @internal */
    InlineSVGDirective.prototype._evalScripts = function (svg, url) {
        var scripts = svg.querySelectorAll('script');
        var scriptsToEval = [];
        var script, scriptType;
        // Fetch scripts from SVG
        for (var i = 0; i < scripts.length; i++) {
            scriptType = scripts[i].getAttribute('type');
            if (!scriptType || scriptType === 'application/ecmascript' || scriptType === 'application/javascript') {
                script = scripts[i].innerText || scripts[i].textContent;
                scriptsToEval.push(script);
                svg.removeChild(scripts[i]);
            }
        }
        // Run scripts in closure as needed
        if (scriptsToEval.length > 0 && (this.evalScripts === 'always' ||
            (this.evalScripts === 'once' && !this._ranScripts[url]))) {
            for (var i = 0; i < scriptsToEval.length; i++) {
                new Function(scriptsToEval[i])(window);
            }
            this._ranScripts[url] = true;
        }
    };
    /** @internal */
    InlineSVGDirective.prototype._checkSVGSupport = function () {
        return typeof SVGRect !== 'undefined';
    };
    /** @internal */
    InlineSVGDirective.prototype._fail = function (msg) {
        this.onSVGFailed.emit(msg);
        // Insert fallback image, if specified
        if (this.fallbackImgUrl) {
            var elImg = this._renderer.createElement('IMG');
            elImg.src = this.fallbackImgUrl;
            this._insertEl(elImg);
        }
    };
    return InlineSVGDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], InlineSVGDirective.prototype, "inlineSVG", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], InlineSVGDirective.prototype, "replaceContents", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], InlineSVGDirective.prototype, "prepend", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], InlineSVGDirective.prototype, "cacheSVG", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], InlineSVGDirective.prototype, "removeSVGAttributes", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], InlineSVGDirective.prototype, "forceEvalStyles", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], InlineSVGDirective.prototype, "evalScripts", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], InlineSVGDirective.prototype, "fallbackImgUrl", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], InlineSVGDirective.prototype, "onSVGInserted", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], InlineSVGDirective.prototype, "onSVGFailed", void 0);
InlineSVGDirective = __decorate([
    core_1.Directive({
        selector: '[inlineSVG]',
        providers: [svg_cache_service_1.SVGCache]
    }),
    __metadata("design:paramtypes", [core_1.Renderer2,
        core_1.ElementRef,
        svg_cache_service_1.SVGCache])
], InlineSVGDirective);
exports.InlineSVGDirective = InlineSVGDirective;
//# sourceMappingURL=inline-svg.directive.js.map