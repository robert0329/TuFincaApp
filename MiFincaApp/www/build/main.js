webpackJsonp([13],{

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmpleadosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(20);
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
 * Generated class for the EmpleadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EmpleadosPage = /** @class */ (function () {
    function EmpleadosPage(fb, navCtrl, navParams) {
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.crearFormulario();
    }
    EmpleadosPage.prototype.crearFormulario = function () {
        this.form = this.fb.group({
            nombre: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            apellido: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            direccion: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            ciudad: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            sector: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            cedula: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            telefono: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            celular: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            cargo: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            salario: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            contraseña: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
        });
    };
    EmpleadosPage.prototype.guardar = function () {
    };
    EmpleadosPage.prototype.OnGoBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
        //this.navCtrl.popToRoot();
    };
    EmpleadosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EmpleadosPage');
    };
    EmpleadosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-empleados',template:/*ion-inline-start:"C:\Users\chico\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\empleados\empleados.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Agregar empleado\n    </ion-title>\n    <ion-buttons>\n      <button ion-button icon-only (click)="OnGoBack()">\n        <ion-icon name="md-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card-content>\n    <form [formGroup]="form" (ngSubmit)="guardar()" novalidate>\n      <ion-list>\n        <ion-item>\n          <ion-label color="primary" floating>Nombre</ion-label>\n          <ion-input formControlName="nombre"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="form.get(\'nombre\').errors && form.get(\'nombre\').touched">\n          <p *ngIf="form.get(\'nombre\').hasError(\'required\')">Es requerido</p>\n        </ion-item>\n\n        <ion-item>\n          <ion-label color="primary" floating>Apellido</ion-label>\n          <ion-input formControlName="apellido"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="form.get(\'apellido\').errors && form.get(\'apellido\').touched">\n          <p *ngIf="form.get(\'apellido\').hasError(\'required\')">Es requerido</p>\n        </ion-item>\n\n        <ion-item>\n          <ion-label color="primary" floating>Direccion</ion-label>\n          <ion-input formControlName="direccion"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="form.get(\'direccion\').errors && form.get(\'direccion\').touched">\n          <p *ngIf="form.get(\'direccion\').hasError(\'required\')">Es requerido</p>\n        </ion-item>\n\n        <ion-item>\n          <ion-label color="primary" floating>Ciudad</ion-label>\n          <ion-input formControlName="ciudad"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="form.get(\'ciudad\').errors && form.get(\'ciudad\').touched">\n          <p *ngIf="form.get(\'ciudad\').hasError(\'required\')">Es requerido</p>\n        </ion-item>\n\n        <ion-item>\n          <ion-label color="primary" floating>Sector</ion-label>\n          <ion-input formControlName="sector"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="form.get(\'sector\').errors && form.get(\'sector\').touched">\n          <p *ngIf="form.get(\'sector\').hasError(\'required\')">Es requerido</p>\n        </ion-item>\n\n        <ion-item>\n          <ion-label color="primary" floating>Cedula</ion-label>\n          <ion-input formControlName="cedula"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="form.get(\'cedula\').errors && form.get(\'cedula\').touched">\n          <p *ngIf="form.get(\'cedula\').hasError(\'required\')">Es requerido</p>\n        </ion-item>\n\n        <ion-item>\n          <ion-label color="primary" floating>Telefono</ion-label>\n          <ion-input formControlName="telefono"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="form.get(\'telefono\').errors && form.get(\'telefono\').touched">\n          <p *ngIf="form.get(\'telefono\').hasError(\'required\')">Es requerido</p>\n        </ion-item>\n\n        <ion-item>\n          <ion-label color="primary" floating>Celular</ion-label>\n          <ion-input formControlName="celular"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="form.get(\'celular\').errors && form.get(\'celular\').touched">\n          <p *ngIf="form.get(\'celular\').hasError(\'required\')">Es requerido</p>\n        </ion-item>\n\n        <ion-item>\n          <ion-label color="primary" floating>Cargo</ion-label>\n          <ion-select formControlName="cargo"></ion-select>\n        </ion-item>\n        <ion-item *ngIf="form.get(\'cargo\').errors && form.get(\'cargo\').touched">\n          <p *ngIf="form.get(\'cargo\').hasError(\'required\')">Es requerido</p>\n        </ion-item>\n      </ion-list>\n\n      <ion-item>\n        <ion-label color="primary" floating>Salario</ion-label>\n        <ion-input formControlName="salario"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="form.get(\'salario\').errors && form.get(\'salario\').touched">\n        <p *ngIf="form.get(\'salario\').hasError(\'required\')">Es requerido</p>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" floating>Email</ion-label>\n        <ion-input formControlName="email"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="form.get(\'email\').errors && form.get(\'email\').touched">\n        <p *ngIf="form.get(\'email\').hasError(\'required\')">Es requerido</p>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" floating>Contraseña</ion-label>\n        <ion-input formControlName="contraseña"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="form.get(\'contraseña\').errors && form.get(\'contraseña\').touched">\n        <p *ngIf="form.get(\'contraseña\').hasError(\'required\')">Es requerido</p>\n      </ion-item>\n      <button ion-button block type="submit" [disabled]="form.invalid">Guardar</button>\n    </form>\n  </ion-card-content>\n</ion-content>'/*ion-inline-end:"C:\Users\chico\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\empleados\empleados.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */]])
    ], EmpleadosPage);
    return EmpleadosPage;
}());

//# sourceMappingURL=empleados.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CosechaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CosechaPage);
    return CosechaPage;
}());

//# sourceMappingURL=cosecha.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FincasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(20);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */]])
    ], FincasPage);
    return FincasPage;
}());

//# sourceMappingURL=fincas.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GastosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], GastosPage);
    return GastosPage;
}());

//# sourceMappingURL=gastos.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HerramientasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(20);
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
    function HerramientasPage(fb, navCtrl, navParams) {
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.crearFormulario();
    }
    HerramientasPage.prototype.crearFormulario = function () {
        this.form = this.fb.group({
            herramientas: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            cantidad: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            suplidor: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
    };
    HerramientasPage.prototype.guardar = function () {
    };
    HerramientasPage.prototype.OnGoBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
        //this.navCtrl.popToRoot();
    };
    HerramientasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HerramientasPage');
    };
    HerramientasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-herramientas',template:/*ion-inline-start:"C:\Users\chico\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\herramientas\herramientas.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Agregar Herramientas\n    </ion-title>\n    <ion-buttons>\n      <button ion-button icon-only (click)="OnGoBack()">\n        <ion-icon name="md-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>  \n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card-content>\n    <form [formGroup]="form" (ngSubmit)="guardar()" novalidate>\n      <ion-list>\n        <ion-item>\n          <ion-label color="primary" floating>Herramienta</ion-label>\n          <ion-input formControlName="herramientas"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="form.get(\'herramientas\').errors && form.get(\'herramientas\').touched">\n          <p *ngIf="form.get(\'herramientas\').hasError(\'required\')">Es requerido</p>\n        </ion-item>\n\n        <ion-item>\n          <ion-label color="primary" floating>Cantidad</ion-label>\n          <ion-select formControlName="cantidad"></ion-select>\n        </ion-item>\n        <ion-item *ngIf="form.get(\'cantidad\').errors && form.get(\'cantidad\').touched">\n          <p *ngIf="form.get(\'cantidad\').hasError(\'required\')">Es requerido</p>\n        </ion-item>\n\n        <ion-item>\n          <ion-label color="primary" floating>Suplidor</ion-label>\n          <ion-select formControlName="suplidor"></ion-select>\n        </ion-item>\n        <ion-item *ngIf="form.get(\'suplidor\').errors && form.get(\'suplidor\').touched">\n          <p *ngIf="form.get(\'suplidor\').hasError(\'required\')">Es requerido</p>\n        </ion-item>\n\n      </ion-list>\n      <button ion-button block type="submit" [disabled]="form.invalid">Guardar</button>\n    </form>\n  </ion-card-content>\n</ion-content>'/*ion-inline-end:"C:\Users\chico\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\herramientas\herramientas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */]])
    ], HerramientasPage);
    return HerramientasPage;
}());

//# sourceMappingURL=herramientas.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaquinariaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(20);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */]])
    ], MaquinariaPage);
    return MaquinariaPage;
}());

//# sourceMappingURL=maquinaria.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], PagosPage);
    return PagosPage;
}());

//# sourceMappingURL=pagos.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParcelaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ParcelaPage);
    return ParcelaPage;
}());

//# sourceMappingURL=parcela.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ProductosPage);
    return ProductosPage;
}());

//# sourceMappingURL=productos.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiembraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SiembraPage);
    return SiembraPage;
}());

//# sourceMappingURL=siembra.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuplidorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SuplidorPage);
    return SuplidorPage;
}());

//# sourceMappingURL=suplidor.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TareasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(222);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
    function TareasPage(alertCtrl, database, fb, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.database = database;
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.crearFormulario();
        this.tasksRef = this.database.list('tasks');
        this.tasks = this.tasksRef.snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
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
    TareasPage.prototype.createTask = function () {
        var _this = this;
        var newTaskModal = this.alertCtrl.create({
            title: 'New Task',
            message: "Enter a title for your new task",
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Title'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.tasksRef.push({
                            title: data.title,
                            done: false
                        });
                    }
                }
            ]
        });
        newTaskModal.present(newTaskModal);
    };
    TareasPage.prototype.updateTask = function (task) {
        this.tasksRef.update(task.key, {
            title: task.title,
            done: !task.done
        });
    };
    TareasPage.prototype.removeTask = function (task) {
        console.log(task);
        this.tasksRef.remove(task.key);
    };
    TareasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TareasPage');
    };
    TareasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-tareas',template:/*ion-inline-start:"C:\Users\chico\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\tareas\tareas.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Tasks\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="createTask()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item-sliding *ngFor=\'let task of tasks | async\'>\n      <ion-item>\n        <ion-label></ion-label>\n        <ion-checkbox (ionChange)="updateTask( task )" [checked]="task.done"></ion-checkbox>\n      </ion-item>\n       <ion-item-options>\n        <button ion-button color="danger" (click)="removeTask( task )">\n          Delete\n        </button>\n       </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\chico\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\tareas\tareas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */]])
    ], TareasPage);
    return TareasPage;
}());

//# sourceMappingURL=tareas.js.map

/***/ }),

/***/ 176:
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
webpackEmptyAsyncContext.id = 176;

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cosecha/cosecha.module": [
		712,
		12
	],
	"../pages/cultivos/cultivos.module": [
		713,
		0
	],
	"../pages/empleados/empleados.module": [
		714,
		11
	],
	"../pages/fincas/fincas.module": [
		715,
		10
	],
	"../pages/gastos/gastos.module": [
		716,
		9
	],
	"../pages/herramientas/herramientas.module": [
		717,
		8
	],
	"../pages/maquinaria/maquinaria.module": [
		718,
		7
	],
	"../pages/pagos/pagos.module": [
		719,
		6
	],
	"../pages/parcela/parcela.module": [
		720,
		5
	],
	"../pages/productos/productos.module": [
		721,
		4
	],
	"../pages/siembra/siembra.module": [
		722,
		3
	],
	"../pages/suplidor/suplidor.module": [
		723,
		2
	],
	"../pages/tareas/tareas.module": [
		724,
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
webpackAsyncContext.id = 221;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(373);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_empleados_empleados__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_fincas_fincas__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_cosecha_cosecha__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_gastos_gastos__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_herramientas_herramientas__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_maquinaria_maquinaria__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_pagos_pagos__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_parcela_parcela__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_productos_productos__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_siembra_siembra__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_suplidor_suplidor__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_tareas_tareas__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angularfire2_database__ = __webpack_require__(222);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var firebaseConfig = {
    apiKey: "AIzaSyAvYzM1bqFjoVi-VGMHeDbN0XwFsYDtLQ0",
    authDomain: "demo104-60efc.firebaseapp.com",
    databaseURL: "https://demo104-60efc.firebaseio.com",
    projectId: "demo104-60efc",
    storageBucket: "demo104-60efc.appspot.com",
    messagingSenderId: "903778168776"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_fincas_fincas__["a" /* FincasPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_cosecha_cosecha__["a" /* CosechaPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_gastos_gastos__["a" /* GastosPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_herramientas_herramientas__["a" /* HerramientasPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_maquinaria_maquinaria__["a" /* MaquinariaPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_pagos_pagos__["a" /* PagosPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_parcela_parcela__["a" /* ParcelaPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_productos_productos__["a" /* ProductosPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_siembra_siembra__["a" /* SiembraPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_suplidor_suplidor__["a" /* SuplidorPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_tareas_tareas__["a" /* TareasPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */], __WEBPACK_IMPORTED_MODULE_0__pages_empleados_empleados__["a" /* EmpleadosPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cosecha/cosecha.module#CosechaPageModule', name: 'CosechaPage', segment: 'cosecha', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cultivos/cultivos.module#CultivosPageModule', name: 'CultivosPage', segment: 'cultivos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/empleados/empleados.module#EmpleadosPageModule', name: 'EmpleadosPage', segment: 'empleados', priority: 'low', defaultHistory: [] },
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
                __WEBPACK_IMPORTED_MODULE_20_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig, 'demo104'),
                __WEBPACK_IMPORTED_MODULE_21_angularfire2_database__["b" /* AngularFireDatabaseModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */], __WEBPACK_IMPORTED_MODULE_9__pages_fincas_fincas__["a" /* FincasPage */], __WEBPACK_IMPORTED_MODULE_10__pages_cosecha_cosecha__["a" /* CosechaPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_gastos_gastos__["a" /* GastosPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_herramientas_herramientas__["a" /* HerramientasPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_maquinaria_maquinaria__["a" /* MaquinariaPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_pagos_pagos__["a" /* PagosPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_parcela_parcela__["a" /* ParcelaPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_productos_productos__["a" /* ProductosPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_siembra_siembra__["a" /* SiembraPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_suplidor_suplidor__["a" /* SuplidorPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_tareas_tareas__["a" /* TareasPage */], __WEBPACK_IMPORTED_MODULE_0__pages_empleados_empleados__["a" /* EmpleadosPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_empleados_empleados__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_fincas_fincas__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_cosecha_cosecha__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_gastos_gastos__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_herramientas_herramientas__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_maquinaria_maquinaria__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_pagos_pagos__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_parcela_parcela__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_productos_productos__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_siembra_siembra__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_suplidor_suplidor__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_tareas_tareas__ = __webpack_require__(165);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
            { title: 'Registro Fincas', component: __WEBPACK_IMPORTED_MODULE_6__pages_fincas_fincas__["a" /* FincasPage */] },
            { title: 'Registro Cosecha', component: __WEBPACK_IMPORTED_MODULE_7__pages_cosecha_cosecha__["a" /* CosechaPage */] },
            { title: 'Gastos', component: __WEBPACK_IMPORTED_MODULE_8__pages_gastos_gastos__["a" /* GastosPage */] },
            { title: 'Registro Herramientas', component: __WEBPACK_IMPORTED_MODULE_9__pages_herramientas_herramientas__["a" /* HerramientasPage */] },
            { title: 'Registro Maquinaria', component: __WEBPACK_IMPORTED_MODULE_10__pages_maquinaria_maquinaria__["a" /* MaquinariaPage */] },
            { title: 'Pagos', component: __WEBPACK_IMPORTED_MODULE_11__pages_pagos_pagos__["a" /* PagosPage */] },
            { title: 'Parcela', component: __WEBPACK_IMPORTED_MODULE_12__pages_parcela_parcela__["a" /* ParcelaPage */] },
            { title: 'Productos', component: __WEBPACK_IMPORTED_MODULE_13__pages_productos_productos__["a" /* ProductosPage */] },
            { title: 'Siembra', component: __WEBPACK_IMPORTED_MODULE_14__pages_siembra_siembra__["a" /* SiembraPage */] },
            { title: 'Registro Tareas', component: __WEBPACK_IMPORTED_MODULE_16__pages_tareas_tareas__["a" /* TareasPage */] },
            { title: 'Suplidor', component: __WEBPACK_IMPORTED_MODULE_15__pages_suplidor_suplidor__["a" /* SuplidorPage */] },
            { title: 'Registro Empleados', component: __WEBPACK_IMPORTED_MODULE_0__pages_empleados_empleados__["a" /* EmpleadosPage */] }
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\chico\Documents\GitHub\TuFincaApp\MiFincaApp\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\chico\Documents\GitHub\TuFincaApp\MiFincaApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ })

},[368]);
//# sourceMappingURL=main.js.map