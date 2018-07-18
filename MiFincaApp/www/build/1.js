webpackJsonp([1],{

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CultivosPageModule", function() { return CultivosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cultivos__ = __webpack_require__(438);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CultivosPageModule = /** @class */ (function () {
    function CultivosPageModule() {
    }
    CultivosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cultivos__["a" /* CultivosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cultivos__["a" /* CultivosPage */]),
            ],
        })
    ], CultivosPageModule);
    return CultivosPageModule;
}());

//# sourceMappingURL=cultivos.module.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CultivosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(14);
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
 * Generated class for the CultivosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CultivosPage = /** @class */ (function () {
    function CultivosPage(fb, navCtrl, navParams) {
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.crearFormulario();
    }
    CultivosPage.prototype.crearFormulario = function () {
        this.form = this.fb.group({
            tipo: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            descripcion: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]
        });
    };
    CultivosPage.prototype.guardar = function () {
    };
    CultivosPage.prototype.OnGoBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
        //this.navCtrl.popToRoot();
    };
    CultivosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CultivosPage');
    };
    CultivosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-cultivos',template:/*ion-inline-start:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\cultivos\cultivos.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Agregar cultivos\n\n    </ion-title>\n\n    <ion-buttons>\n\n      <button ion-button icon-only (click)="OnGoBack()">\n\n        <ion-icon name="md-arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-card-content>\n\n    <form [formGroup]="form" (ngSubmit)="guardar()" novalidate>\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Tipo</ion-label>\n\n          <ion-select formControlName="tipo"></ion-select>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'tipo\').errors && form.get(\'tipo\').touched">\n\n          <p *ngIf="form.get(\'tipo\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Descripcion</ion-label>\n\n          <ion-textarea formControlName="descripcion"></ion-textarea>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'descripcion\').errors && form.get(\'descripcion\').touched">\n\n          <p *ngIf="form.get(\'descripcion\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n\n\n        \n\n\n\n      </ion-list>\n\n      <button ion-button block type="submit" [disabled]="form.invalid">Guardar</button>\n\n    </form>\n\n  </ion-card-content>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\cultivos\cultivos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */]])
    ], CultivosPage);
    return CultivosPage;
}());

//# sourceMappingURL=cultivos.js.map

/***/ })

});
//# sourceMappingURL=1.js.map