webpackJsonp([12],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CosechaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
 * Generated class for the CosechaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CosechaPage = /** @class */ (function () {
    function CosechaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CosechaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CosechaPage');
    };
    CosechaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cosecha',template:/*ion-inline-start:"C:\Users\chico\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\cosecha\cosecha.html"*/'<!--\n  Generated template for the CosechaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Cosecha</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\chico\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\cosecha\cosecha.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], CosechaPage);
    return CosechaPage;
}());

//# sourceMappingURL=cosecha.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FincasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
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
 * Generated class for the FincasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FincasPage = /** @class */ (function () {
    function FincasPage(fb, navCtrl, navParams) {
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.crearFormulario();
    }
    FincasPage.prototype.crearFormulario = function () {
        this.form = this.fb.group({
            id: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            nombre: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            descripcion: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            foto: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
    };
    FincasPage.prototype.guardarFinca = function () {
    };
    FincasPage.prototype.OnGoBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
        //this.navCtrl.popToRoot();
    };
    FincasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FincasPage');
    };
    FincasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-fincas',template:/*ion-inline-start:"C:\Users\chico\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\fincas\fincas.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Agregar fincas\n    </ion-title>\n    <ion-buttons>\n      <button ion-button icon-only (click)="OnGoBack()">\n        <ion-icon name="md-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card-content>\n    <form [formGroup]="form" (ngSubmit)="guardarFinca()" novalidate>\n      <ion-list>\n        <ion-item>\n          <ion-label color="primary" floating>Nombre</ion-label>\n          <ion-input formControlName="nombre"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="form.get(\'nombre\').errors && form.get(\'nombre\').touched">\n          <p *ngIf="form.get(\'nombre\').hasError(\'required\')">Es requerido</p>\n        </ion-item>\n\n        <ion-item>\n          <ion-label color="primary" floating>Descripcion</ion-label>\n          <ion-textarea formControlName="descripcion"></ion-textarea>\n        </ion-item>\n        <ion-item *ngIf="form.get(\'descripcion\').errors && form.get(\'descripcion\').touched">\n          <p *ngIf="form.get(\'descripcion\').hasError(\'required\')">Es requerido</p>\n        </ion-item>\n\n      </ion-list>\n      <button ion-button block type="submit" [disabled]="form.invalid">Guardar</button>\n    </form>\n  </ion-card-content>\n</ion-content>'/*ion-inline-end:"C:\Users\chico\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\fincas\fincas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]])
    ], FincasPage);
    return FincasPage;
}());

//# sourceMappingURL=fincas.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GastosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
 * Generated class for the GastosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GastosPage = /** @class */ (function () {
    function GastosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GastosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GastosPage');
    };
    GastosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-gastos',template:/*ion-inline-start:"C:\Users\chico\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\gastos\gastos.html"*/'<!--\n  Generated template for the GastosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Gastos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\chico\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\gastos\gastos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], GastosPage);
    return GastosPage;
}());

//# sourceMappingURL=gastos.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HerramientasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
 * Generated class for the HerramientasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HerramientasPage = /** @class */ (function () {
    function HerramientasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HerramientasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HerramientasPage');
    };
    HerramientasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-herramientas',template:/*ion-inline-start:"C:\Users\chico\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\herramientas\herramientas.html"*/'<!--\n  Generated template for the HerramientasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Herramientas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\chico\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\herramientas\herramientas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HerramientasPage);
    return HerramientasPage;
}());

//# sourceMappingURL=herramientas.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaquinariaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
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
 * Generated class for the MaquinariaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MaquinariaPage = /** @class */ (function () {
    function MaquinariaPage(fb, navCtrl, navParams) {
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.crearFormulario();
    }
    MaquinariaPage.prototype.crearFormulario = function () {
        this.form = this.fb.group({
            descripcion: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            tipo: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            modelo: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            marca: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            finca: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            suplidor: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
        });
    };
    MaquinariaPage.prototype.Maquinaria = function () {
    };
    MaquinariaPage.prototype.OnGoBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
        //this.navCtrl.popToRoot();
    };
    MaquinariaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MaquinariaPage');
    };
    MaquinariaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-maquinaria',template:/*ion-inline-start:"C:\Users\chico\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\maquinaria\maquinaria.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>\n        Agregar Maquinaria\n      </ion-title>\n      <ion-buttons>\n        <button ion-button icon-only (click)="OnGoBack()">\n          <ion-icon name="md-arrow-back"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content>\n    <ion-card-content>\n      <form [formGroup]="form" (ngSubmit)="Maquinaria()" novalidate>\n        <ion-list>\n          <ion-item>\n            <ion-label color="primary" floating>Descripcion</ion-label>\n            <ion-input formControlName="descripcion"></ion-input>\n          </ion-item>\n          <ion-item *ngIf="form.get(\'descripcion\').errors && form.get(\'descripcion\').touched">\n            <p *ngIf="form.get(\'descripcion\').hasError(\'required\')">Es requerido</p>\n          </ion-item>\n  \n          <ion-item>\n            <ion-label color="primary" floating>Tipo</ion-label>\n            <ion-select formControlName="tipo"></ion-select>\n          </ion-item>\n          <ion-item *ngIf="form.get(\'tipo\').errors && form.get(\'tipo\').touched">\n            <p *ngIf="form.get(\'tipo\').hasError(\'required\')">Es requerido</p>\n          </ion-item>\n  \n          <ion-item>\n            <ion-label color="primary" floating>Modelo</ion-label>\n            <ion-input formControlName="modelo"></ion-input>\n          </ion-item>\n          <ion-item *ngIf="form.get(\'modelo\').errors && form.get(\'modelo\').touched">\n            <p *ngIf="form.get(\'modelo\').hasError(\'required\')">Es requerido</p>\n          </ion-item>\n\n          <ion-item>\n            <ion-label color="primary" floating>Marca</ion-label>\n            <ion-select formControlName="marca"></ion-select>\n          </ion-item>\n          <ion-item *ngIf="form.get(\'marca\').errors && form.get(\'marca\').touched">\n            <p *ngIf="form.get(\'marca\').hasError(\'required\')">Es requerido</p>\n          </ion-item>\n          <ion-item>\n            <ion-label color="primary" floating>Finca</ion-label>\n            <ion-select formControlName="finca"></ion-select>\n          </ion-item>\n          <ion-item *ngIf="form.get(\'finca\').errors && form.get(\'finca\').touched">\n            <p *ngIf="form.get(\'finca\').hasError(\'required\')">Es requerido</p>\n          </ion-item>\n          <ion-item>\n            <ion-label color="primary" floating>Suplidor</ion-label>\n            <ion-select formControlName="suplidor"></ion-select>\n          </ion-item>\n          <ion-item *ngIf="form.get(\'suplidor\').errors && form.get(\'suplidor\').touched">\n            <p *ngIf="form.get(\'suplidor\').hasError(\'required\')">Es requerido</p>\n          </ion-item>\n\n        </ion-list>\n        <button ion-button block type="submit" [disabled]="form.invalid">Guardar</button>\n      </form>\n    </ion-card-content>\n  </ion-content>'/*ion-inline-end:"C:\Users\chico\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\maquinaria\maquinaria.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]])
    ], MaquinariaPage);
    return MaquinariaPage;
}());

//# sourceMappingURL=maquinaria.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
 * Generated class for the PagosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PagosPage = /** @class */ (function () {
    function PagosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PagosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PagosPage');
    };
    PagosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pagos',template:/*ion-inline-start:"C:\Users\chico\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\pagos\pagos.html"*/'<!--\n  Generated template for the PagosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Pagos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\chico\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\pagos\pagos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], PagosPage);
    return PagosPage;
}());

//# sourceMappingURL=pagos.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParcelaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
 * Generated class for the ParcelaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ParcelaPage = /** @class */ (function () {
    function ParcelaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ParcelaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ParcelaPage');
    };
    ParcelaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-parcela',template:/*ion-inline-start:"C:\Users\chico\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\parcela\parcela.html"*/'<!--\n  Generated template for the ParcelaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Parcela</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\chico\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\parcela\parcela.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ParcelaPage);
    return ParcelaPage;
}());

//# sourceMappingURL=parcela.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
 * Generated class for the ProductosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductosPage = /** @class */ (function () {
    function ProductosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProductosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductosPage');
    };
    ProductosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-productos',template:/*ion-inline-start:"C:\Users\chico\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\productos\productos.html"*/'<!--\n  Generated template for the ProductosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Productos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\chico\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\productos\productos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ProductosPage);
    return ProductosPage;
}());

//# sourceMappingURL=productos.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiembraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
 * Generated class for the SiembraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SiembraPage = /** @class */ (function () {
    function SiembraPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SiembraPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SiembraPage');
    };
    SiembraPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-siembra',template:/*ion-inline-start:"C:\Users\chico\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\siembra\siembra.html"*/'<!--\n  Generated template for the SiembraPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Siembra</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\chico\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\siembra\siembra.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SiembraPage);
    return SiembraPage;
}());

//# sourceMappingURL=siembra.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuplidorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
 * Generated class for the SuplidorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SuplidorPage = /** @class */ (function () {
    function SuplidorPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SuplidorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SuplidorPage');
    };
    SuplidorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-suplidor',template:/*ion-inline-start:"C:\Users\chico\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\suplidor\suplidor.html"*/'<!--\n  Generated template for the SuplidorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Suplidor</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\chico\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\suplidor\suplidor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SuplidorPage);
    return SuplidorPage;
}());

//# sourceMappingURL=suplidor.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TareasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
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
 * Generated class for the TareasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TareasPage = /** @class */ (function () {
    function TareasPage(fb, navCtrl, navParams) {
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.crearFormulario();
    }
    TareasPage.prototype.crearFormulario = function () {
        this.form = this.fb.group({
            descripcion: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            empleado: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            finca: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            fecha: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
    };
    TareasPage.prototype.guardar = function () {
    };
    TareasPage.prototype.OnGoBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
        //this.navCtrl.popToRoot();
    };
    TareasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TareasPage');
    };
    TareasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-tareas',template:/*ion-inline-start:"C:\Users\chico\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\tareas\tareas.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Agregar tareas\n    </ion-title>\n    <ion-buttons>\n      <button ion-button icon-only (click)="OnGoBack()">\n        <ion-icon name="md-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card-content>\n    <form [formGroup]="form" (ngSubmit)="guardar()" novalidate>\n      <ion-list>\n        <ion-item>\n          <ion-label color="primary" floating>Descripcion</ion-label>\n          <ion-textarea formControlName="descripcion"></ion-textarea>\n        </ion-item>\n        <ion-item *ngIf="form.get(\'descripcion\').errors && form.get(\'descripcion\').touched">\n          <p *ngIf="form.get(\'descripcion\').hasError(\'required\')">Es requerido</p>\n        </ion-item>\n\n        <ion-item>\n          <ion-label color="primary" floating>Empleado</ion-label>\n          <ion-select formControlName="empleado"></ion-select>\n        </ion-item>\n        <ion-item *ngIf="form.get(\'empleado\').errors && form.get(\'empleado\').touched">\n          <p *ngIf="form.get(\'empleado\').hasError(\'required\')">Es requerido</p>\n        </ion-item>\n\n        <ion-item>\n          <ion-label color="primary" floating>Finca</ion-label>\n          <ion-select formControlName="finca"></ion-select>\n        </ion-item>\n        <ion-item *ngIf="form.get(\'finca\').errors && form.get(\'finca\').touched">\n          <p *ngIf="form.get(\'finca\').hasError(\'required\')">Es requerido</p>\n        </ion-item>\n\n        <ion-item>\n          <ion-label color="primary" floating>Fecha</ion-label>\n          <ion-datetime formControlName="fecha"></ion-datetime>\n        </ion-item>\n        <ion-item *ngIf="form.get(\'fecha\').errors && form.get(\'fecha\').touched">\n          <p *ngIf="form.get(\'fecha\').hasError(\'required\')">Es requerido</p>\n        </ion-item>\n\n      </ion-list>\n      <button ion-button block type="submit" [disabled]="form.invalid">Guardar</button>\n    </form>\n  </ion-card-content>\n</ion-content>'/*ion-inline-end:"C:\Users\chico\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\tareas\tareas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]])
    ], TareasPage);
    return TareasPage;
}());

//# sourceMappingURL=tareas.js.map

/***/ }),

/***/ 120:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cosecha/cosecha.module": [
		280,
		11
	],
	"../pages/cultivos/cultivos.module": [
		281,
		0
	],
	"../pages/fincas/fincas.module": [
		282,
		10
	],
	"../pages/gastos/gastos.module": [
		283,
		9
	],
	"../pages/herramientas/herramientas.module": [
		284,
		8
	],
	"../pages/maquinaria/maquinaria.module": [
		285,
		7
	],
	"../pages/pagos/pagos.module": [
		286,
		6
	],
	"../pages/parcela/parcela.module": [
		287,
		5
	],
	"../pages/productos/productos.module": [
		288,
		4
	],
	"../pages/siembra/siembra.module": [
		289,
		3
	],
	"../pages/suplidor/suplidor.module": [
		290,
		2
	],
	"../pages/tareas/tareas.module": [
		291,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_fincas_fincas__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_cosecha_cosecha__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_gastos_gastos__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_herramientas_herramientas__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_maquinaria_maquinaria__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_pagos_pagos__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_parcela_parcela__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_productos_productos__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_siembra_siembra__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_suplidor_suplidor__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_tareas_tareas__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_fincas_fincas__["a" /* FincasPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_cosecha_cosecha__["a" /* CosechaPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_gastos_gastos__["a" /* GastosPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_herramientas_herramientas__["a" /* HerramientasPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_maquinaria_maquinaria__["a" /* MaquinariaPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_pagos_pagos__["a" /* PagosPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_parcela_parcela__["a" /* ParcelaPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_productos_productos__["a" /* ProductosPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_siembra_siembra__["a" /* SiembraPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_suplidor_suplidor__["a" /* SuplidorPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_tareas_tareas__["a" /* TareasPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cosecha/cosecha.module#CosechaPageModule', name: 'CosechaPage', segment: 'cosecha', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cultivos/cultivos.module#CultivosPageModule', name: 'CultivosPage', segment: 'cultivos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fincas/fincas.module#FincasPageModule', name: 'FincasPage', segment: 'fincas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gastos/gastos.module#GastosPageModule', name: 'GastosPage', segment: 'gastos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/herramientas/herramientas.module#HerramientasPageModule', name: 'HerramientasPage', segment: 'herramientas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/maquinaria/maquinaria.module#MaquinariaPageModule', name: 'MaquinariaPage', segment: 'maquinaria', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pagos/pagos.module#PagosPageModule', name: 'PagosPage', segment: 'pagos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/parcela/parcela.module#ParcelaPageModule', name: 'ParcelaPage', segment: 'parcela', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/productos/productos.module#ProductosPageModule', name: 'ProductosPage', segment: 'productos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/siembra/siembra.module#SiembraPageModule', name: 'SiembraPage', segment: 'siembra', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/suplidor/suplidor.module#SuplidorPageModule', name: 'SuplidorPage', segment: 'suplidor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tareas/tareas.module#TareasPageModule', name: 'TareasPage', segment: 'tareas', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */], __WEBPACK_IMPORTED_MODULE_8__pages_fincas_fincas__["a" /* FincasPage */], __WEBPACK_IMPORTED_MODULE_9__pages_cosecha_cosecha__["a" /* CosechaPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_gastos_gastos__["a" /* GastosPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_herramientas_herramientas__["a" /* HerramientasPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_maquinaria_maquinaria__["a" /* MaquinariaPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_pagos_pagos__["a" /* PagosPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_parcela_parcela__["a" /* ParcelaPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_productos_productos__["a" /* ProductosPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_siembra_siembra__["a" /* SiembraPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_suplidor_suplidor__["a" /* SuplidorPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_tareas_tareas__["a" /* TareasPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_fincas_fincas__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_cosecha_cosecha__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_gastos_gastos__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_herramientas_herramientas__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_maquinaria_maquinaria__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_pagos_pagos__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_parcela_parcela__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_productos_productos__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_siembra_siembra__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_suplidor_suplidor__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_tareas_tareas__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { ListPage } from '../pages/list/list';











var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Fincas', component: __WEBPACK_IMPORTED_MODULE_5__pages_fincas_fincas__["a" /* FincasPage */] },
            { title: 'Cosecha', component: __WEBPACK_IMPORTED_MODULE_6__pages_cosecha_cosecha__["a" /* CosechaPage */] },
            { title: 'Gastos', component: __WEBPACK_IMPORTED_MODULE_7__pages_gastos_gastos__["a" /* GastosPage */] },
            { title: 'Herramientas', component: __WEBPACK_IMPORTED_MODULE_8__pages_herramientas_herramientas__["a" /* HerramientasPage */] },
            { title: 'Maquinaria', component: __WEBPACK_IMPORTED_MODULE_9__pages_maquinaria_maquinaria__["a" /* MaquinariaPage */] },
            { title: 'Pagos', component: __WEBPACK_IMPORTED_MODULE_10__pages_pagos_pagos__["a" /* PagosPage */] },
            { title: 'Parcela', component: __WEBPACK_IMPORTED_MODULE_11__pages_parcela_parcela__["a" /* ParcelaPage */] },
            { title: 'Productos', component: __WEBPACK_IMPORTED_MODULE_12__pages_productos_productos__["a" /* ProductosPage */] },
            { title: 'Siembra', component: __WEBPACK_IMPORTED_MODULE_13__pages_siembra_siembra__["a" /* SiembraPage */] },
            { title: 'Tareas', component: __WEBPACK_IMPORTED_MODULE_15__pages_tareas_tareas__["a" /* TareasPage */] },
            { title: 'Suplidor', component: __WEBPACK_IMPORTED_MODULE_14__pages_suplidor_suplidor__["a" /* SuplidorPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\chico\Documents\GitHub\TuFincaApp\MiFincaApp\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\chico\Documents\GitHub\TuFincaApp\MiFincaApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\chico\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\chico\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\chico\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\chico\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map