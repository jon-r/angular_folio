"use strict";
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
        this._supportsSVG = true;
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
    InlineSVGDirective.prototype._insertSVG = function () {
        var _this = this;
        if (!this._supportsSVG) {
            return;
        }
        if (!this._checkSVGSupport()) {
            this._fail('Embed SVG not supported by browser');
            this._supportsSVG = false;
            return;
        }
        if (!this.inlineSVG) {
            this._fail('No URL passed to [inlineSVG]');
            return;
        }
        if (this.inlineSVG.charAt(0) === '#' || this.inlineSVG.indexOf('.svg#') > -1) {
            var elSvg = this._renderer.createElement('svg', 'svg');
            var elSvgUse = this._renderer.createElement('use', 'svg');
            this._renderer.setAttribute(elSvgUse, 'href', this.inlineSVG, 'xlink');
            this._renderer.appendChild(elSvg, elSvgUse);
            this._insertEl(elSvg);
            this.onSVGInserted.emit(elSvg);
            return;
        }
        var absUrl = this._getAbsoluteUrl(this.inlineSVG);
        if (absUrl !== this._absUrl) {
            this._absUrl = absUrl;
            this._svgCache.getSVG(this._absUrl, this.cacheSVG)
                .subscribe(function (svg) {
                if (svg && _this._el.nativeElement) {
                    if (_this.removeSVGAttributes) {
                        _this._removeAttributes(svg, _this.removeSVGAttributes);
                    }
                    _this._insertEl(svg);
                    _this._evalScripts(svg, absUrl);
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
    InlineSVGDirective.prototype._getAbsoluteUrl = function (url) {
        var base = this._renderer.createElement('BASE');
        base.href = url;
        return base.href;
    };
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
    InlineSVGDirective.prototype._evalScripts = function (svg, url) {
        var scripts = svg.querySelectorAll('script');
        var scriptsToEval = [];
        var script, scriptType;
        for (var i = 0; i < scripts.length; i++) {
            scriptType = scripts[i].getAttribute('type');
            if (!scriptType || scriptType === 'application/ecmascript' || scriptType === 'application/javascript') {
                script = scripts[i].innerText || scripts[i].textContent;
                scriptsToEval.push(script);
                svg.removeChild(scripts[i]);
            }
        }
        if (scriptsToEval.length > 0 && (this.evalScripts === 'always' ||
            (this.evalScripts === 'once' && !this._ranScripts[url]))) {
            for (var i = 0; i < scriptsToEval.length; i++) {
                new Function(scriptsToEval[i])(window);
            }
            this._ranScripts[url] = true;
        }
    };
    InlineSVGDirective.prototype._checkSVGSupport = function () {
        return typeof SVGRect !== 'undefined';
    };
    InlineSVGDirective.prototype._fail = function (msg) {
        this.onSVGFailed.emit(msg);
        if (this.fallbackImgUrl) {
            var elImg = this._renderer.createElement('IMG');
            elImg.src = this.fallbackImgUrl;
            this._insertEl(elImg);
        }
    };
    return InlineSVGDirective;
}());
InlineSVGDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[inlineSVG]',
                providers: [svg_cache_service_1.SVGCache]
            },] },
];
InlineSVGDirective.ctorParameters = function () { return [
    { type: core_1.Renderer2, },
    { type: core_1.ElementRef, },
    { type: svg_cache_service_1.SVGCache, },
]; };
InlineSVGDirective.propDecorators = {
    'inlineSVG': [{ type: core_1.Input },],
    'replaceContents': [{ type: core_1.Input },],
    'prepend': [{ type: core_1.Input },],
    'cacheSVG': [{ type: core_1.Input },],
    'removeSVGAttributes': [{ type: core_1.Input },],
    'forceEvalStyles': [{ type: core_1.Input },],
    'evalScripts': [{ type: core_1.Input },],
    'fallbackImgUrl': [{ type: core_1.Input },],
    'onSVGInserted': [{ type: core_1.Output },],
    'onSVGFailed': [{ type: core_1.Output },],
};
exports.InlineSVGDirective = InlineSVGDirective;
