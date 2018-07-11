webpackJsonp([0],{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CultivosPageModule", function() { return CultivosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cultivos__ = __webpack_require__(296);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cultivos__["a" /* CultivosPage */]),
            ],
        })
    ], CultivosPageModule);
    return CultivosPageModule;
}());

//# sourceMappingURL=cultivos.module.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CultivosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(10);
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
            tipo: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            descripcion: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
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
            selector: 'page-cultivos',template:/*ion-inline-start:"C:\Users\chico\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\cultivos\cultivos.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Agregar cultivos\n    </ion-title>\n    <ion-buttons>\n      <button ion-button icon-only (click)="OnGoBack()">\n        <ion-icon name="md-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card-content>\n    <form [formGroup]="form" (ngSubmit)="guardar()" novalidate>\n      <ion-list>\n        <ion-item>\n          <ion-label color="primary" floating>Tipo</ion-label>\n          <ion-select formControlName="tipo"></ion-select>\n        </ion-item>\n        <ion-item *ngIf="form.get(\'tipo\').errors && form.get(\'tipo\').touched">\n          <p *ngIf="form.get(\'tipo\').hasError(\'required\')">Es requerido</p>\n        </ion-item>\n\n        <ion-item>\n          <ion-label color="primary" floating>Descripcion</ion-label>\n          <ion-textarea formControlName="descripcion"></ion-textarea>\n        </ion-item>\n        <ion-item *ngIf="form.get(\'descripcion\').errors && form.get(\'descripcion\').touched">\n          <p *ngIf="form.get(\'descripcion\').hasError(\'required\')">Es requerido</p>\n        </ion-item>\n\n        \n\n      </ion-list>\n      <button ion-button block type="submit" [disabled]="form.invalid">Guardar</button>\n    </form>\n  </ion-card-content>\n</ion-content>'/*ion-inline-end:"C:\Users\chico\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\cultivos\cultivos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]])
    ], CultivosPage);
    return CultivosPage;
}());

//# sourceMappingURL=cultivos.js.map

/***/ })

});
//# sourceMappingURL=0.js.map