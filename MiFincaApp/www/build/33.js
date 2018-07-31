webpackJsonp([33],{

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultarSuplidorPageModule", function() { return ConsultarSuplidorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__consultar_suplidor__ = __webpack_require__(456);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConsultarSuplidorPageModule = /** @class */ (function () {
    function ConsultarSuplidorPageModule() {
    }
    ConsultarSuplidorPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__consultar_suplidor__["a" /* ConsultarSuplidorPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__consultar_suplidor__["a" /* ConsultarSuplidorPage */]),
            ],
        })
    ], ConsultarSuplidorPageModule);
    return ConsultarSuplidorPageModule;
}());

//# sourceMappingURL=consultar-suplidor.module.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsultarSuplidorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ConsultarSuplidorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConsultarSuplidorPage = /** @class */ (function () {
    function ConsultarSuplidorPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Array = [];
        this.searchTerm = '';
        this.items = [];
        this.searching = false;
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]();
    }
    ConsultarSuplidorPage.prototype.openModal = function () {
    };
    ConsultarSuplidorPage.prototype.OnGoBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
    };
    ConsultarSuplidorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConsultarSuplidorPage');
    };
    ConsultarSuplidorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-consultar-suplidor',template:/*ion-inline-start:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\consultar-suplidor\consultar-suplidor.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Consultar los frutos</ion-title>\n    <ion-buttons>\n        <button ion-button icon-only (click)="OnGoBack()">\n          <ion-icon name="md-arrow-back"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-searchbar [(ngModel)]="searchTerm" [formControl]="searchControl" (ionInput)="openModal()"></ion-searchbar>\n    <div *ngIf="searching" class="spinner-container">\n      <ion-spinner></ion-spinner>\n    </div>\n  <ion-list>\n    <ion-item-sliding  *ngFor="let grocery of Array">\n      <!-- <ion-item> {{grocery.descripcion}}</ion-item>\n      <ion-item> {{grocery.descripcion}} {{grocery.fecha}}</ion-item> -->\n\n      <ion-item-options>\n        <button ion-button icon-only light (click)="openModal()">\n          <ion-icon name="paper"></ion-icon>\n          <ion-icon name="md-done-all"></ion-icon>\n        </button>\n        <button ion-button icon-only light (click)="openModal()">\n          <ion-icon name="delete"></ion-icon>\n          <ion-icon name="md-done-all"></ion-icon>\n        </button>\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n  \n</ion-content>'/*ion-inline-end:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\consultar-suplidor\consultar-suplidor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */]])
    ], ConsultarSuplidorPage);
    return ConsultarSuplidorPage;
}());

//# sourceMappingURL=consultar-suplidor.js.map

/***/ })

});
//# sourceMappingURL=33.js.map