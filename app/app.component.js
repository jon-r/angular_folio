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
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/observable/fromEvent');
var button_service_1 = require('./shared/button.service');
var page_set_service_1 = require('./shared/page-set.service');
var AppComponent = (function () {
    function AppComponent(buttonService, pageSetService) {
        var _this = this;
        this.buttonService = buttonService;
        this.pageSetService = pageSetService;
        this.btnPos = { home: null, about: null, folio: null };
        buttonService.buttonOutput$.subscribe(function (n) {
            console.log(n);
            _this.btnPos = n;
        });
        pageSetService.pgClassOutput$.subscribe(function (n) { _this.pageClass = n; });
    }
    ;
    //  btnStyle(el) {
    //    return
    //  }
    //  setBtns(btn: Buttons) {
    //    this.btnPos = {
    //      home : { 'transform': btn.home, '-webkit-transform': btn.home },
    //      about : { 'transform': btn.about, '-webkit-transform': btn.about },
    //      folio : { 'transform': btn.folio, '-webkit-transform': btn.folio }
    //    }
    //  }
    AppComponent.prototype.ngOnInit = function () {
        //    this.pageClass = '';
        var _this = this;
        this.buttonService.setGrid();
        Observable_1.Observable.fromEvent(window, 'resize')
            .debounceTime(200)
            .subscribe(function (e) { _this.buttonService.setGrid(); });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            styleUrls: ['app/app.component.css'],
            providers: [button_service_1.ButtonService, page_set_service_1.PageSetService]
        }),
        __metadata('design:paramtypes', [button_service_1.ButtonService, page_set_service_1.PageSetService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
// this.buttonService.setGrid(window);
//    this.buttonService.setLayout({
//      home: '0,0',
//      folio: '1,1',
//      about: '1,2'
//    })
////    this.links = this.buttonService.init();
//
//    this.buttonService.setLayout({
//      home: '0,0',
//      folio: '1,1',
//      about: '1,2'
//    })
//
//    this.getButtons();
//
//    console.info(this.buttons);
//
//
//
//
/*  getButtons(): void {
    this.buttons = this.buttonService.init();
  }

  ngOnInit(): void {
   // this.getButtons();

    this.gridService.set(window);

    Observable.fromEvent(window, 'resize')
      .debounceTime(200)
      .subscribe(e => {this.gridService.set(e.target)});
  }


/*  onResize(event) {
    console.info(event);
  }
  */
/*  buttons = [
    new Button('Home','home',1,1),
    new Button('Work','folio',1,2),
    new Button('About','about',1,3)
  ];*/
//# sourceMappingURL=app.component.js.map
