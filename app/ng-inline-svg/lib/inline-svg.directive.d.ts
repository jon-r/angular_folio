import { ElementRef, EventEmitter, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { SVGCache } from './svg-cache.service';
export declare class InlineSVGDirective implements OnInit, OnChanges {
    private _renderer;
    private _el;
    private _svgCache;
    inlineSVG: string;
    replaceContents: boolean;
    prepend: boolean;
    cacheSVG: boolean;
    removeSVGAttributes: Array<string>;
    forceEvalStyles: boolean;
    evalScripts: 'always' | 'once' | 'never';
    fallbackImgUrl: string;
    onSVGInserted: EventEmitter<SVGElement>;
    onSVGFailed: EventEmitter<any>;
    constructor(_renderer: Renderer2, _el: ElementRef, _svgCache: SVGCache);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
