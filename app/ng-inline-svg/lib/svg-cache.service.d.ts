import { Renderer2 } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
export declare class SVGCache {
    private _renderer;
    private _http;
    constructor(_renderer: Renderer2, _http: Http);
    getSVG(url: string, cache?: boolean): Observable<SVGElement>;
}
