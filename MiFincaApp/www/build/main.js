webpackJsonp([16],{

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditFincaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Service_Finca_Service__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lista_fincas_lista_fincas__ = __webpack_require__(68);
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
 * Generated class for the EditFincaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditFincaPage = /** @class */ (function () {
    function EditFincaPage(FincaServicio, viewCtrl, navCtrl, navParams, fb) {
        this.FincaServicio = FincaServicio;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.Formulario();
        console.log(this.navParams.data);
        this.nombre = this.navParams.data.nombre;
        this.descripcion = this.navParams.data.descripcion;
        this.id = this.navParams.data.id;
    }
    EditFincaPage.prototype.Formulario = function () {
        this.form = this.fb.group({
            id: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            nombre: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            descripcion: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
    };
    EditFincaPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    EditFincaPage.prototype.ionViewDidLoad = function () {
    };
    EditFincaPage.prototype.Modificar = function () {
        var _this = this;
        this.FincaServicio.AddUpdate(this.form.value).subscribe(function (res) {
            _this.viewCtrl.dismiss();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__lista_fincas_lista_fincas__["a" /* ListaFincasPage */]);
        });
        //this.limpiar();
    };
    EditFincaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-finca',template:/*ion-inline-start:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\Finca-Component\edit-finca\edit-finca.html"*/'<ion-header>\n<ion-navbar>\n  <ion-title>ModalPage</ion-title>\n  <ion-buttons end>\n    <button ion-button (click)="closeModal()">Close</button>\n  </ion-buttons>\n</ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card-content>\n    <form [formGroup]="form" (ngSubmit)="Modificar()" novalidate>\n      <ion-list>\n\n        <ion-item>\n          <ion-label color="primary" floating>Id</ion-label>\n          <ion-input [(ngModel)]="id" formControlName="id"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label color="primary" floating>Nombre</ion-label>\n          <ion-input [(ngModel)]="nombre" formControlName="nombre"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label color="primary" floating>Descripcion</ion-label>\n          <ion-input [(ngModel)]="descripcion"formControlName="descripcion"></ion-input>\n        </ion-item>\n\n      </ion-list>\n      <button ion-button block type="submit">Modificar</button>\n    </form>\n  </ion-card-content>\n</ion-content>'/*ion-inline-end:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\Finca-Component\edit-finca\edit-finca.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__Service_Finca_Service__["a" /* FincaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Service_Finca_Service__["a" /* FincaService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _e || Object])
    ], EditFincaPage);
    return EditFincaPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=edit-finca.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CosechaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the CosechaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CosechaPage = /** @class */ (function () {
    function CosechaPage(fb, navCtrl, navParams) {
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.crearFormulario();
    }
    CosechaPage.prototype.crearFormulario = function () {
        this.form = this.fb.group({
            id: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            descripcion: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            fecha: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            idsiembra: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            cantidad: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
    };
    CosechaPage.prototype.guardarCosecha = function () {
    };
    CosechaPage.prototype.OnGoBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
    };
    CosechaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CosechaPage');
    };
    CosechaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-cosecha',template:/*ion-inline-start:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\cosecha\cosecha.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Agregar Cosechas\n\n    </ion-title>\n\n    <ion-buttons>\n\n      <button ion-button icon-only (click)="OnGoBack()">\n\n        <ion-icon name="md-arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-card-content>\n\n    <form [formGroup]="form" (ngSubmit)="guardarCosecha()" novalidate>\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Id</ion-label>\n\n          <ion-input formControlName="id"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'id\').errors && form.get(\'id\').touched">\n\n          <p *ngIf="form.get(\'id\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Descripcion</ion-label>\n\n          <ion-input formControlName="descripcion"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'descripcion\').errors && form.get(\'descripcion\').touched">\n\n          <p *ngIf="form.get(\'descripcion\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Fecha</ion-label>\n\n          <ion-input formControlName="fecha"></ion-input>\n\n          <ion-item class=“listItem item-input” id=“dateSight”></ion-item>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'fecha\').errors && form.get(\'fecha\').touched">\n\n          <p *ngIf="form.get(\'fecha\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Id Siembra</ion-label>\n\n          <ion-textarea formControlName="idsiembra"></ion-textarea>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'idsiembra\').errors && form.get(\'idsiembra\').touched">\n\n          <p *ngIf="form.get(\'idsiembra\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Cantidad</ion-label>\n\n          <ion-textarea formControlName="cantidad"></ion-textarea>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'cantidad\').errors && form.get(\'cantidad\').touched">\n\n          <p *ngIf="form.get(\'cantidad\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n\n\n      </ion-list>\n\n      <button ion-button block type="submit" [disabled]="form.invalid">Guardar</button>\n\n    </form>\n\n  </ion-card-content>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\cosecha\cosecha.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
    ], CosechaPage);
    return CosechaPage;
}());

//# sourceMappingURL=cosecha.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmpleadosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
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
            selector: 'page-empleados',template:/*ion-inline-start:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\empleados\empleados.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Agregar empleado\n\n    </ion-title>\n\n    <ion-buttons>\n\n      <button ion-button icon-only (click)="OnGoBack()">\n\n        <ion-icon name="md-arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-card-content>\n\n    <form [formGroup]="form" (ngSubmit)="guardar()" novalidate>\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Nombre</ion-label>\n\n          <ion-input formControlName="nombre"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'nombre\').errors && form.get(\'nombre\').touched">\n\n          <p *ngIf="form.get(\'nombre\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Apellido</ion-label>\n\n          <ion-input formControlName="apellido"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'apellido\').errors && form.get(\'apellido\').touched">\n\n          <p *ngIf="form.get(\'apellido\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Direccion</ion-label>\n\n          <ion-input formControlName="direccion"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'direccion\').errors && form.get(\'direccion\').touched">\n\n          <p *ngIf="form.get(\'direccion\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Ciudad</ion-label>\n\n          <ion-input formControlName="ciudad"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'ciudad\').errors && form.get(\'ciudad\').touched">\n\n          <p *ngIf="form.get(\'ciudad\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Sector</ion-label>\n\n          <ion-input formControlName="sector"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'sector\').errors && form.get(\'sector\').touched">\n\n          <p *ngIf="form.get(\'sector\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Cedula</ion-label>\n\n          <ion-input formControlName="cedula"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'cedula\').errors && form.get(\'cedula\').touched">\n\n          <p *ngIf="form.get(\'cedula\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Telefono</ion-label>\n\n          <ion-input formControlName="telefono"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'telefono\').errors && form.get(\'telefono\').touched">\n\n          <p *ngIf="form.get(\'telefono\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Celular</ion-label>\n\n          <ion-input formControlName="celular"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'celular\').errors && form.get(\'celular\').touched">\n\n          <p *ngIf="form.get(\'celular\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Cargo</ion-label>\n\n          <ion-select formControlName="cargo"></ion-select>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'cargo\').errors && form.get(\'cargo\').touched">\n\n          <p *ngIf="form.get(\'cargo\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n      </ion-list>\n\n\n\n      <ion-item>\n\n        <ion-label color="primary" floating>Salario</ion-label>\n\n        <ion-input formControlName="salario"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="form.get(\'salario\').errors && form.get(\'salario\').touched">\n\n        <p *ngIf="form.get(\'salario\').hasError(\'required\')">Es requerido</p>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="primary" floating>Email</ion-label>\n\n        <ion-input formControlName="email"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="form.get(\'email\').errors && form.get(\'email\').touched">\n\n        <p *ngIf="form.get(\'email\').hasError(\'required\')">Es requerido</p>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="primary" floating>Contraseña</ion-label>\n\n        <ion-input formControlName="contraseña"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="form.get(\'contraseña\').errors && form.get(\'contraseña\').touched">\n\n        <p *ngIf="form.get(\'contraseña\').hasError(\'required\')">Es requerido</p>\n\n      </ion-item>\n\n      <button ion-button block type="submit" [disabled]="form.invalid">Guardar</button>\n\n    </form>\n\n  </ion-card-content>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\empleados\empleados.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
    ], EmpleadosPage);
    return EmpleadosPage;
}());

//# sourceMappingURL=empleados.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GastosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
            selector: 'page-gastos',template:/*ion-inline-start:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\gastos\gastos.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Agregar Gastos\n\n    </ion-title>\n\n    <ion-buttons>\n\n      <button ion-button icon-only (click)="OnGoBack()">\n\n        <ion-icon name="md-arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-card-content>\n\n    <form [formGroup]="form" (ngSubmit)="guardarGastos()" novalidate>\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Id</ion-label>\n\n          <ion-input formControlName="id"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'id\').errors && form.get(\'id\').touched">\n\n          <p *ngIf="form.get(\'id\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Descripcion</ion-label>\n\n          <ion-input formControlName="descripcion"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'descripcion\').errors && form.get(\'descripcion\').touched">\n\n          <p *ngIf="form.get(\'descripcion\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n<!--(aqui va select item)\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Fecha</ion-label>\n\n          <ion-input formControlName="fecha"></ion-input>\n\n          <ion-item class=“listItem item-input” id=“dateSight”></ion-item>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'fecha\').errors && form.get(\'fecha\').touched">\n\n          <p *ngIf="form.get(\'fecha\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n      -->\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Id Finca</ion-label>\n\n          <ion-textarea formControlName="idsiembra"></ion-textarea>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'idfinca\').errors && form.get(\'idfinca\').touched">\n\n          <p *ngIf="form.get(\'idfinca\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n\n\n      </ion-list>\n\n      <button ion-button block type="submit" [disabled]="form.invalid">Guardar</button>\n\n    </form>\n\n  </ion-card-content>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\gastos\gastos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], GastosPage);
    return GastosPage;
}());

//# sourceMappingURL=gastos.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HerramientasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
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
            selector: 'page-herramientas',template:/*ion-inline-start:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\herramientas\herramientas.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Agregar Herramientas\n\n    </ion-title>\n\n    <ion-buttons>\n\n      <button ion-button icon-only (click)="OnGoBack()">\n\n        <ion-icon name="md-arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>  \n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-card-content>\n\n    <form [formGroup]="form" (ngSubmit)="guardar()" novalidate>\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Herramienta</ion-label>\n\n          <ion-input formControlName="herramientas"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'herramientas\').errors && form.get(\'herramientas\').touched">\n\n          <p *ngIf="form.get(\'herramientas\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Cantidad</ion-label>\n\n          <ion-select formControlName="cantidad"></ion-select>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'cantidad\').errors && form.get(\'cantidad\').touched">\n\n          <p *ngIf="form.get(\'cantidad\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Suplidor</ion-label>\n\n          <ion-select formControlName="suplidor"></ion-select>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'suplidor\').errors && form.get(\'suplidor\').touched">\n\n          <p *ngIf="form.get(\'suplidor\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n\n\n      </ion-list>\n\n      <button ion-button block type="submit" [disabled]="form.invalid">Guardar</button>\n\n    </form>\n\n  </ion-card-content>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\herramientas\herramientas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
    ], HerramientasPage);
    return HerramientasPage;
}());

//# sourceMappingURL=herramientas.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(fb, navCtrl, navParams) {
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.crearFormulario();
    }
    LoginPage.prototype.crearFormulario = function () {
        this.form = this.fb.group({
            usuario: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            contraseña: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
    };
    LoginPage.prototype.Login = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
        //this.navCtrl.popToRoot();
    };
    LoginPage.prototype.OnGoBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
        //this.navCtrl.popToRoot();
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Logueate a tu fincaApp\n\n    </ion-title>\n\n    \n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-card-content>\n\n    <form [formGroup]="form" (ngSubmit)="Login()" novalidate>\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Usuario</ion-label>\n\n          <ion-textarea formControlName="usuario"></ion-textarea>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'usuario\').errors && form.get(\'usuario\').touched">\n\n          <p *ngIf="form.get(\'usuario\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Contraseña</ion-label>\n\n          <ion-input formControlName="contraseña"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'contraseña\').errors && form.get(\'contraseña\').touched">\n\n          <p *ngIf="form.get(\'contraseña\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n\n\n      </ion-list>\n\n      <button ion-button block type="submit" [disabled]="form.invalid">Login</button>\n\n    </form>\n\n  </ion-card-content>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaquinariaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
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
            selector: 'page-maquinaria',template:/*ion-inline-start:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\maquinaria\maquinaria.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>\n\n        Agregar Maquinaria\n\n      </ion-title>\n\n      <ion-buttons>\n\n        <button ion-button icon-only (click)="OnGoBack()">\n\n          <ion-icon name="md-arrow-back"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  <ion-content>\n\n    <ion-card-content>\n\n      <form [formGroup]="form" (ngSubmit)="Maquinaria()" novalidate>\n\n        <ion-list>\n\n          <ion-item>\n\n            <ion-label color="primary" floating>Descripcion</ion-label>\n\n            <ion-input formControlName="descripcion"></ion-input>\n\n          </ion-item>\n\n          <ion-item *ngIf="form.get(\'descripcion\').errors && form.get(\'descripcion\').touched">\n\n            <p *ngIf="form.get(\'descripcion\').hasError(\'required\')">Es requerido</p>\n\n          </ion-item>\n\n  \n\n          <ion-item>\n\n            <ion-label color="primary" floating>Tipo</ion-label>\n\n            <ion-select formControlName="tipo"></ion-select>\n\n          </ion-item>\n\n          <ion-item *ngIf="form.get(\'tipo\').errors && form.get(\'tipo\').touched">\n\n            <p *ngIf="form.get(\'tipo\').hasError(\'required\')">Es requerido</p>\n\n          </ion-item>\n\n  \n\n          <ion-item>\n\n            <ion-label color="primary" floating>Modelo</ion-label>\n\n            <ion-input formControlName="modelo"></ion-input>\n\n          </ion-item>\n\n          <ion-item *ngIf="form.get(\'modelo\').errors && form.get(\'modelo\').touched">\n\n            <p *ngIf="form.get(\'modelo\').hasError(\'required\')">Es requerido</p>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-label color="primary" floating>Marca</ion-label>\n\n            <ion-select formControlName="marca"></ion-select>\n\n          </ion-item>\n\n          <ion-item *ngIf="form.get(\'marca\').errors && form.get(\'marca\').touched">\n\n            <p *ngIf="form.get(\'marca\').hasError(\'required\')">Es requerido</p>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label color="primary" floating>Finca</ion-label>\n\n            <ion-select formControlName="finca"></ion-select>\n\n          </ion-item>\n\n          <ion-item *ngIf="form.get(\'finca\').errors && form.get(\'finca\').touched">\n\n            <p *ngIf="form.get(\'finca\').hasError(\'required\')">Es requerido</p>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label color="primary" floating>Suplidor</ion-label>\n\n            <ion-select formControlName="suplidor"></ion-select>\n\n          </ion-item>\n\n          <ion-item *ngIf="form.get(\'suplidor\').errors && form.get(\'suplidor\').touched">\n\n            <p *ngIf="form.get(\'suplidor\').hasError(\'required\')">Es requerido</p>\n\n          </ion-item>\n\n\n\n        </ion-list>\n\n        <button ion-button block type="submit" [disabled]="form.invalid">Guardar</button>\n\n      </form>\n\n    </ion-card-content>\n\n  </ion-content>'/*ion-inline-end:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\maquinaria\maquinaria.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
    ], MaquinariaPage);
    return MaquinariaPage;
}());

//# sourceMappingURL=maquinaria.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
            selector: 'page-pagos',template:/*ion-inline-start:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\pagos\pagos.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Agregar Pagos\n\n    </ion-title>\n\n    <ion-buttons>\n\n      <button ion-button icon-only (click)="OnGoBack()">\n\n        <ion-icon name="md-arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-card-content>\n\n    <form [formGroup]="form" (ngSubmit)="guardarPagos()" novalidate>\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Id</ion-label>\n\n          <ion-input formControlName="id"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'id\').errors && form.get(\'id\').touched">\n\n          <p *ngIf="form.get(\'id\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n<!--\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Descripcion</ion-label>\n\n          <ion-input formControlName="descripcion"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'descripcion\').errors && form.get(\'descripcion\').touched">\n\n          <p *ngIf="form.get(\'descripcion\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n      -->\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Monto</ion-label>\n\n          <ion-textarea formControlName="monto"></ion-textarea>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'monto\').errors && form.get(\'monto\').touched">\n\n          <p *ngIf="form.get(\'monto\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Id Empleado</ion-label>\n\n          <ion-textarea formControlName="idempleado"></ion-textarea>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'idempleado\').errors && form.get(\'idempleado\').touched">\n\n          <p *ngIf="form.get(\'idempleado\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n\n\n      </ion-list>\n\n      <button ion-button block type="submit" [disabled]="form.invalid">Guardar</button>\n\n    </form>\n\n  </ion-card-content>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\pagos\pagos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], PagosPage);
    return PagosPage;
}());

//# sourceMappingURL=pagos.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParcelaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
            selector: 'page-parcela',template:/*ion-inline-start:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\parcela\parcela.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Agregar Parcela\n\n    </ion-title>\n\n    <ion-buttons>\n\n      <button ion-button icon-only (click)="OnGoBack()">\n\n        <ion-icon name="md-arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-card-content>\n\n    <form [formGroup]="form" (ngSubmit)="guardarParcela()" novalidate>\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Id</ion-label>\n\n          <ion-input formControlName="id"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'id\').errors && form.get(\'id\').touched">\n\n          <p *ngIf="form.get(\'id\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Descripcion</ion-label>\n\n          <ion-input formControlName="descripcion"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'descripcion\').errors && form.get(\'descripcion\').touched">\n\n          <p *ngIf="form.get(\'descripcion\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Localizacion</ion-label>\n\n          <ion-textarea formControlName="localizacion"></ion-textarea>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'localizacion\').errors && form.get(\'localizacion\').touched">\n\n          <p *ngIf="form.get(\'localizacion\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Id Finca</ion-label>\n\n          <ion-textarea formControlName="idfinca"></ion-textarea>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'idfinca\').errors && form.get(\'idfinca\').touched">\n\n          <p *ngIf="form.get(\'idfinca\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n\n\n      </ion-list>\n\n      <button ion-button block type="submit" [disabled]="form.invalid">Guardar</button>\n\n    </form>\n\n  </ion-card-content>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\parcela\parcela.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ParcelaPage);
    return ParcelaPage;
}());

//# sourceMappingURL=parcela.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
            selector: 'page-productos',template:/*ion-inline-start:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\productos\productos.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Agregar Productos\n\n    </ion-title>\n\n    <ion-buttons>\n\n      <button ion-button icon-only (click)="OnGoBack()">\n\n        <ion-icon name="md-arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-card-content>\n\n    <form [formGroup]="form" (ngSubmit)="guardarProductos()" novalidate>\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Id</ion-label>\n\n          <ion-input formControlName="id"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'id\').errors && form.get(\'id\').touched">\n\n          <p *ngIf="form.get(\'id\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>.\n\n\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Producto</ion-label>\n\n          <ion-input formControlName="producto"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'producto\').errors && form.get(\'producto\').touched">\n\n          <p *ngIf="form.get(\'producto\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n        \n\n      <ion-item>\n\n        <ion-label color="primary" floating>Descripcion</ion-label>\n\n        <ion-input formControlName="descripcion"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="form.get(\'descripcion\').errors && form.get(\'descripcion\').touched">\n\n        <p *ngIf="form.get(\'descripcion\').hasError(\'required\')">Es requerido</p>\n\n      </ion-item>\n\n\n\n<!--\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Descripcion</ion-label>\n\n          <ion-input formControlName="descripcion"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'descripcion\').errors && form.get(\'descripcion\').touched">\n\n          <p *ngIf="form.get(\'descripcion\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n      -->\n\n      \n\n        <ion-item>\n\n          <ion-label color="primary" floating>Id Suplidor</ion-label>\n\n          <ion-textarea formControlName="idsuplidor"></ion-textarea>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'idsuplidor\').errors && form.get(\'idsuplidor\').touched">\n\n          <p *ngIf="form.get(\'idsuplidor\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n\n\n      </ion-list>\n\n      <button ion-button block type="submit" [disabled]="form.invalid">Guardar</button>\n\n    </form>\n\n  </ion-card-content>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\productos\productos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ProductosPage);
    return ProductosPage;
}());

//# sourceMappingURL=productos.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiembraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
            selector: 'page-siembra',template:/*ion-inline-start:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\siembra\siembra.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Agregar Siembra\n\n    </ion-title>\n\n    <ion-buttons>\n\n      <button ion-button icon-only (click)="OnGoBack()">\n\n        <ion-icon name="md-arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-card-content>\n\n    <form [formGroup]="form" (ngSubmit)="guardarSiembra()" novalidate>\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Id</ion-label>\n\n          <ion-input formControlName="id"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'id\').errors && form.get(\'id\').touched">\n\n          <p *ngIf="form.get(\'id\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>.\n\n\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Descripcion</ion-label>\n\n          <ion-input formControlName="descripcion"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'descripcion\').errors && form.get(\'descripcion\').touched">\n\n          <p *ngIf="form.get(\'descripcion\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n        \n\n      <ion-item>\n\n        <ion-label color="primary" floating>Id Parcela</ion-label>\n\n        <ion-input formControlName="idparcela"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="form.get(\'idparcela\').errors && form.get(\'idparcela\').touched">\n\n        <p *ngIf="form.get(\'idparcela\').hasError(\'required\')">Es requerido</p>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label color="primary" floating>Fecha</ion-label>\n\n        <ion-input formControlName="fecha"></ion-input>\n\n        <ion-item class=“listItem item-input” id=“dateSight”></ion-item>\n\n      </ion-item>\n\n      <ion-item *ngIf="form.get(\'fecha\').errors && form.get(\'fecha\').touched">\n\n        <p *ngIf="form.get(\'fecha\').hasError(\'required\')">Es requerido</p>\n\n      </ion-item>\n\n\n\n      \n\n        <ion-item>\n\n          <ion-label color="primary" floating>Id Cultivo</ion-label>\n\n          <ion-textarea formControlName="idcultivo"></ion-textarea>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'idcultivo\').errors && form.get(\'idcultivo\').touched">\n\n          <p *ngIf="form.get(\'idcultivo\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Cantidad</ion-label>\n\n          <ion-textarea formControlName="cantidad"></ion-textarea>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'cantidad\').errors && form.get(\'cantidad\').touched">\n\n          <p *ngIf="form.get(\'cantidad\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n\n\n      </ion-list>\n\n      <button ion-button block type="submit" [disabled]="form.invalid">Guardar</button>\n\n    </form>\n\n  </ion-card-content>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\siembra\siembra.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SiembraPage);
    return SiembraPage;
}());

//# sourceMappingURL=siembra.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuplidorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
            selector: 'page-suplidor',template:/*ion-inline-start:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\suplidor\suplidor.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Agregar Suplidor\n\n    </ion-title>\n\n    <ion-buttons>\n\n      <button ion-button icon-only (click)="OnGoBack()">\n\n        <ion-icon name="md-arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-card-content>\n\n    <form [formGroup]="form" (ngSubmit)="guardarSuplidor()" novalidate>\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Id</ion-label>\n\n          <ion-input formControlName="id"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'id\').errors && form.get(\'id\').touched">\n\n          <p *ngIf="form.get(\'id\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>.\n\n\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Nombre</ion-label>\n\n          <ion-input formControlName="nombre"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'nombre\').errors && form.get(\'nombre\').touched">\n\n          <p *ngIf="form.get(\'nombre\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n        \n\n      <ion-item>\n\n        <ion-label color="primary" floating>Telefono</ion-label>\n\n        <ion-input formControlName="telefono"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="form.get(\'telefono\').errors && form.get(\'telefono\').touched">\n\n        <p *ngIf="form.get(\'telefono\').hasError(\'required\')">Es requerido</p>\n\n      </ion-item>\n\n      \n\n        <ion-item>\n\n          <ion-label color="primary" floating>Direccion</ion-label>\n\n          <ion-textarea formControlName="direccion"></ion-textarea>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'direccion\').errors && form.get(\'direccion\').touched">\n\n          <p *ngIf="form.get(\'direccion\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Celular</ion-label>\n\n          <ion-textarea formControlName="celular"></ion-textarea>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'celular\').errors && form.get(\'celular\').touched">\n\n          <p *ngIf="form.get(\'celular\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n\n\n      </ion-list>\n\n      <button ion-button block type="submit" [disabled]="form.invalid">Guardar</button>\n\n    </form>\n\n  </ion-card-content>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\suplidor\suplidor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SuplidorPage);
    return SuplidorPage;
}());

//# sourceMappingURL=suplidor.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TareasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
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
            selector: 'page-tareas',template:/*ion-inline-start:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\tareas\tareas.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Agregar tareas\n\n    </ion-title>\n\n    <ion-buttons>\n\n      <button ion-button icon-only (click)="OnGoBack()">\n\n        <ion-icon name="md-arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-card-content>\n\n    <form [formGroup]="form" (ngSubmit)="guardar()" novalidate>\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Descripcion</ion-label>\n\n          <ion-textarea formControlName="descripcion"></ion-textarea>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'descripcion\').errors && form.get(\'descripcion\').touched">\n\n          <p *ngIf="form.get(\'descripcion\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Empleado</ion-label>\n\n          <ion-select formControlName="empleado"></ion-select>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'empleado\').errors && form.get(\'empleado\').touched">\n\n          <p *ngIf="form.get(\'empleado\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Finca</ion-label>\n\n          <ion-select formControlName="finca"></ion-select>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'finca\').errors && form.get(\'finca\').touched">\n\n          <p *ngIf="form.get(\'finca\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Fecha</ion-label>\n\n          <ion-datetime formControlName="fecha"></ion-datetime>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'fecha\').errors && form.get(\'fecha\').touched">\n\n          <p *ngIf="form.get(\'fecha\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n\n\n      </ion-list>\n\n      <button ion-button block type="submit" [disabled]="form.invalid">Guardar</button>\n\n    </form>\n\n  </ion-card-content>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\tareas\tareas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
    ], TareasPage);
    return TareasPage;
}());

//# sourceMappingURL=tareas.js.map

/***/ }),

/***/ 153:
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
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/Finca-Component/Add-fincas/fincas.module": [
		418,
		15
	],
	"../pages/Finca-Component/edit-finca/edit-finca.module": [
		419,
		14
	],
	"../pages/Finca-Component/lista-fincas/lista-fincas.module": [
		420,
		13
	],
	"../pages/cosecha/cosecha.module": [
		415,
		12
	],
	"../pages/cultivos/cultivos.module": [
		416,
		0
	],
	"../pages/empleados/empleados.module": [
		417,
		11
	],
	"../pages/gastos/gastos.module": [
		421,
		10
	],
	"../pages/herramientas/herramientas.module": [
		422,
		9
	],
	"../pages/login/login.module": [
		423,
		8
	],
	"../pages/maquinaria/maquinaria.module": [
		424,
		7
	],
	"../pages/pagos/pagos.module": [
		425,
		6
	],
	"../pages/parcela/parcela.module": [
		426,
		5
	],
	"../pages/productos/productos.module": [
		427,
		4
	],
	"../pages/siembra/siembra.module": [
		428,
		3
	],
	"../pages/suplidor/suplidor.module": [
		429,
		2
	],
	"../pages/tareas/tareas.module": [
		430,
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
webpackAsyncContext.id = 197;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(265);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_Finca_Component_edit_finca_edit_finca__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_empleados_empleados__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_Finca_Component_Add_fincas_fincas__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_cosecha_cosecha__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_gastos_gastos__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_Finca_Component_lista_fincas_lista_fincas__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_herramientas_herramientas__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_maquinaria_maquinaria__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_pagos_pagos__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_parcela_parcela__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_productos_productos__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_siembra_siembra__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_suplidor_suplidor__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_tareas_tareas__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_login_login__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_sqlite__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__Service_Finca_Service__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_common_http__ = __webpack_require__(214);
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
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_Finca_Component_Add_fincas_fincas__["a" /* FincasPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_cosecha_cosecha__["a" /* CosechaPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_gastos_gastos__["a" /* GastosPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_herramientas_herramientas__["a" /* HerramientasPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_maquinaria_maquinaria__["a" /* MaquinariaPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_pagos_pagos__["a" /* PagosPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_parcela_parcela__["a" /* ParcelaPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_productos_productos__["a" /* ProductosPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_siembra_siembra__["a" /* SiembraPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_suplidor_suplidor__["a" /* SuplidorPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_tareas_tareas__["a" /* TareasPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */], __WEBPACK_IMPORTED_MODULE_1__pages_empleados_empleados__["a" /* EmpleadosPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_login_login__["a" /* LoginPage */], __WEBPACK_IMPORTED_MODULE_13__pages_Finca_Component_lista_fincas_lista_fincas__["a" /* ListaFincasPage */], __WEBPACK_IMPORTED_MODULE_0__pages_Finca_Component_edit_finca_edit_finca__["a" /* EditFincaPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cosecha/cosecha.module#CosechaPageModule', name: 'CosechaPage', segment: 'cosecha', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cultivos/cultivos.module#CultivosPageModule', name: 'CultivosPage', segment: 'cultivos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/empleados/empleados.module#EmpleadosPageModule', name: 'EmpleadosPage', segment: 'empleados', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Finca-Component/Add-fincas/fincas.module#FincasPageModule', name: 'FincasPage', segment: 'fincas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Finca-Component/edit-finca/edit-finca.module#EditFincaPageModule', name: 'EditFincaPage', segment: 'edit-finca', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Finca-Component/lista-fincas/lista-fincas.module#ListaFincasPageModule', name: 'ListaFincasPage', segment: 'lista-fincas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gastos/gastos.module#GastosPageModule', name: 'GastosPage', segment: 'gastos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/herramientas/herramientas.module#HerramientasPageModule', name: 'HerramientasPage', segment: 'herramientas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/maquinaria/maquinaria.module#MaquinariaPageModule', name: 'MaquinariaPage', segment: 'maquinaria', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pagos/pagos.module#PagosPageModule', name: 'PagosPage', segment: 'pagos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/parcela/parcela.module#ParcelaPageModule', name: 'ParcelaPage', segment: 'parcela', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/productos/productos.module#ProductosPageModule', name: 'ProductosPage', segment: 'productos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/siembra/siembra.module#SiembraPageModule', name: 'SiembraPage', segment: 'siembra', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/suplidor/suplidor.module#SuplidorPageModule', name: 'SuplidorPage', segment: 'suplidor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tareas/tareas.module#TareasPageModule', name: 'TareasPage', segment: 'tareas', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_25__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */], __WEBPACK_IMPORTED_MODULE_10__pages_Finca_Component_Add_fincas_fincas__["a" /* FincasPage */], __WEBPACK_IMPORTED_MODULE_11__pages_cosecha_cosecha__["a" /* CosechaPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_gastos_gastos__["a" /* GastosPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_herramientas_herramientas__["a" /* HerramientasPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_maquinaria_maquinaria__["a" /* MaquinariaPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_pagos_pagos__["a" /* PagosPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_parcela_parcela__["a" /* ParcelaPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_productos_productos__["a" /* ProductosPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_siembra_siembra__["a" /* SiembraPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_suplidor_suplidor__["a" /* SuplidorPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_tareas_tareas__["a" /* TareasPage */], __WEBPACK_IMPORTED_MODULE_1__pages_empleados_empleados__["a" /* EmpleadosPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_login_login__["a" /* LoginPage */], __WEBPACK_IMPORTED_MODULE_13__pages_Finca_Component_lista_fincas_lista_fincas__["a" /* ListaFincasPage */], __WEBPACK_IMPORTED_MODULE_0__pages_Finca_Component_edit_finca_edit_finca__["a" /* EditFincaPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_24__Service_Finca_Service__["a" /* FincaService */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_sqlite__["a" /* SQLite */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Home</ion-title>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h3>Ionic Menu Starter</h3>\n\n\n\n  <p>\n\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n\n  </p>\n\n\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Finca; });
var Finca = /** @class */ (function () {
    function Finca(id, nombre, descripcion) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.id = (id) ? id : 0;
        this.nombre = nombre;
        this.descripcion = descripcion;
    }
    return Finca;
}());

//# sourceMappingURL=Finca.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_Finca_Component_lista_fincas_lista_fincas__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_login_login__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_empleados_empleados__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_Finca_Component_Add_fincas_fincas__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_cosecha_cosecha__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_gastos_gastos__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_herramientas_herramientas__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_maquinaria_maquinaria__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_pagos_pagos__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_parcela_parcela__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_productos_productos__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_siembra_siembra__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_suplidor_suplidor__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_tareas_tareas__ = __webpack_require__(142);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_1__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */] },
            { title: 'Registro Fincas', component: __WEBPACK_IMPORTED_MODULE_8__pages_Finca_Component_Add_fincas_fincas__["a" /* FincasPage */] },
            { title: 'Registro Cosecha', component: __WEBPACK_IMPORTED_MODULE_9__pages_cosecha_cosecha__["a" /* CosechaPage */] },
            { title: 'Gastos', component: __WEBPACK_IMPORTED_MODULE_10__pages_gastos_gastos__["a" /* GastosPage */] },
            { title: 'Registro Herramientas', component: __WEBPACK_IMPORTED_MODULE_11__pages_herramientas_herramientas__["a" /* HerramientasPage */] },
            { title: 'Registro Maquinaria', component: __WEBPACK_IMPORTED_MODULE_12__pages_maquinaria_maquinaria__["a" /* MaquinariaPage */] },
            { title: 'Pagos', component: __WEBPACK_IMPORTED_MODULE_13__pages_pagos_pagos__["a" /* PagosPage */] },
            { title: 'Parcela', component: __WEBPACK_IMPORTED_MODULE_14__pages_parcela_parcela__["a" /* ParcelaPage */] },
            { title: 'Productos', component: __WEBPACK_IMPORTED_MODULE_15__pages_productos_productos__["a" /* ProductosPage */] },
            { title: 'Siembra', component: __WEBPACK_IMPORTED_MODULE_16__pages_siembra_siembra__["a" /* SiembraPage */] },
            { title: 'Registro Tareas', component: __WEBPACK_IMPORTED_MODULE_18__pages_tareas_tareas__["a" /* TareasPage */] },
            { title: 'Suplidor', component: __WEBPACK_IMPORTED_MODULE_17__pages_suplidor_suplidor__["a" /* SuplidorPage */] },
            { title: 'Registro Empleados', component: __WEBPACK_IMPORTED_MODULE_2__pages_empleados_empleados__["a" /* EmpleadosPage */] },
            { title: 'Listado', component: __WEBPACK_IMPORTED_MODULE_0__pages_Finca_Component_lista_fincas_lista_fincas__["a" /* ListaFincasPage */] }
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
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-end>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FincasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_Clases_Finca__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Service_Finca_Service__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lista_fincas_lista_fincas__ = __webpack_require__(68);
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
    function FincasPage(FincaServicio, fb, navCtrl, navParams) {
        this.FincaServicio = FincaServicio;
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        //arreglos
        this.FincaArray = [];
        this.FincaFilter = [];
        this.nombre = '';
        this.dess = '';
        this.createMyForm();
        this.finca = new __WEBPACK_IMPORTED_MODULE_3__app_Clases_Finca__["a" /* Finca */]();
    }
    FincasPage.prototype.createMyForm = function () {
        return this.form = this.fb.group({
            id: ['0', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            nombre: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            descripcion: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    };
    FincasPage.prototype.OnGoBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__lista_fincas_lista_fincas__["a" /* ListaFincasPage */]);
    };
    FincasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FincasPage');
    };
    FincasPage.prototype.addFinca = function () {
        this.FincaServicio.addFinca(this.form.value).subscribe(function (res) {
            console.log(res);
        });
        this.limpiar();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__lista_fincas_lista_fincas__["a" /* ListaFincasPage */]);
    };
    FincasPage.prototype.getVecino = function (id) {
        this.FincaServicio.getFincas(1).subscribe(function (res) {
            console.log(res.nombre);
        });
    };
    FincasPage.prototype.buscarSolicitud = function () {
        var _this = this;
        this.FincaServicio.getFinca().subscribe(function (find) {
            _this.FincaArray = find;
            _this.FincaFilter = _this.FincaArray;
        });
    };
    FincasPage.prototype.filtrar = function () {
        var _this = this;
        this.FincaFilter = this.FincaArray.filter(function (veci) { return veci.nombre.includes(_this.nombre); });
        console.log(this.FincaArray);
    };
    FincasPage.prototype.limpiar = function () {
        return this.form = this.fb.group({
            id: ['0', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            nombre: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            descripcion: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    };
    FincasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fincas',template:/*ion-inline-start:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\Finca-Component\Add-fincas\fincas.html"*/'<ion-header Access-Control-Allow-Origin>\n\n  <ion-navbar>\n\n      <ion-title>ModalPage</ion-title>\n\n   \n\n     <ion-buttons>\n\n      <button ion-button icon-only (click)="OnGoBack()">\n\n        <ion-icon name="md-arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-card-content>\n\n    <form [formGroup]="form" (ngSubmit)="addFinca()" novalidate>\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Nombre</ion-label>\n\n          <ion-input name="nombreinput" id="nombreinput" formControlName="nombre"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'nombre\').errors && form.get(\'nombre\').touched">\n\n          <p *ngIf="form.get(\'nombre\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n\n\n          <ion-item>\n\n          <ion-label color="primary" floating>Descripcion</ion-label>\n\n          <ion-input name="descripcioninput" id="descripcioninput" formControlName="descripcion"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'descripcion\').errors && form.get(\'descripcion\').touched">\n\n          <p *ngIf="form.get(\'descripcion\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n\n\n      </ion-list>\n\n      <button ion-button block type="submit">Guardar</button>\n\n    </form>\n\n  </ion-card-content>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\Finca-Component\Add-fincas\fincas.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__Service_Finca_Service__["a" /* FincaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__Service_Finca_Service__["a" /* FincaService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _d || Object])
    ], FincasPage);
    return FincasPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=fincas.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaFincasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Finca_Component_edit_finca_edit_finca__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Add_fincas_fincas__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Service_Finca_Service__ = __webpack_require__(99);
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
 * Generated class for the ListaFincasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListaFincasPage = /** @class */ (function () {
    function ListaFincasPage(modalCtrl, alertCtrl, FincaServicio, navCtrl, navParams) {
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.FincaServicio = FincaServicio;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.notes = [];
        this.FincaArray = [];
        this.searchTerm = '';
        this.searching = false;
        this.buscarSolicitud();
    }
    ListaFincasPage_1 = ListaFincasPage;
    ListaFincasPage.prototype.openModal = function (id, nombre, descripcion) {
        var data = { id: id, nombre: nombre, descripcion: descripcion };
        var modalPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_0__Finca_Component_edit_finca_edit_finca__["a" /* EditFincaPage */], data);
        modalPage.present();
    };
    ListaFincasPage.prototype.getVecino = function (id) {
        this.FincaServicio.getFincas(1).subscribe(function (res) {
            console.log(res.nombre);
        });
    };
    ListaFincasPage.prototype.buscarSolicitud = function () {
        var _this = this;
        this.FincaServicio.getFinca().subscribe(function (res) {
            _this.FincaArray = res;
        });
    };
    ListaFincasPage.prototype.deleteNote = function (id) {
        var _this = this;
        console.log(id);
        this.FincaServicio.getDelete(id).subscribe(function (res) {
            _this.navCtrl.setRoot(ListaFincasPage_1);
        });
    };
    ListaFincasPage.prototype.ionViewDidLoad = function () {
        this.setFilteredItems();
        this.buscarSolicitud();
    };
    ListaFincasPage.prototype.onSearchInput = function () {
        this.searching = true;
    };
    ListaFincasPage.prototype.setFilteredItems = function () {
        this.items = this.FincaServicio.getFinc(this.searchTerm);
    };
    ListaFincasPage.prototype.OnGoBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    ListaFincasPage.prototype.addFinca = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__Add_fincas_fincas__["a" /* FincasPage */]);
    };
    ListaFincasPage = ListaFincasPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-lista-fincas',template:/*ion-inline-start:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\Finca-Component\lista-fincas\lista-fincas.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Listado Fincas</ion-title>\n    <ion-buttons>\n      <button ion-button icon-only (click)="OnGoBack()">\n        <ion-icon name="md-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="addFinca()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n<!-- [formControl]="searchControl" -->\n<ion-content>\n  <ion-searchbar [(ngModel)]="searchTerm"  (ionInput)="onSearchInput()"></ion-searchbar>\n \n    <div *ngIf="searching" class="spinner-container">\n      <ion-spinner></ion-spinner>\n    </div>\n  <ion-list>\n    <ion-item-sliding *ngFor="let grocery of FincaArray">\n      <ion-item> {{grocery.nombre}}</ion-item>\n\n      <ion-item-options>\n        <button ion-button icon-only (click)="openModal(grocery.id,grocery.nombre,grocery.descripcion)" light>\n          <ion-icon name="paper"></ion-icon>\n        </button>\n        <button ion-button icon-only danger (click)="deleteNote(grocery.id)">\n          <ion-icon name="trash"></ion-icon>\n        </button>\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\Finca-Component\lista-fincas\lista-fincas.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* ModalController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__Service_Finca_Service__["a" /* FincaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__Service_Finca_Service__["a" /* FincaService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */]) === "function" && _e || Object])
    ], ListaFincasPage);
    return ListaFincasPage;
    var ListaFincasPage_1, _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=lista-fincas.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FincaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = { headers: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' }) };
var FincaService = /** @class */ (function () {
    function FincaService(http) {
        this.http = http;
        this.FincaUrl = "http://localhost:8000/finca";
        this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    FincaService.prototype.getFinca = function () {
        var _this = this;
        return this.http.get(this.FincaUrl)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["tap"])(function (heroes) { return _this.log('fetched Finca'); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["catchError"])(this.handleError('getFinca', [])));
    };
    FincaService.prototype.getFincas = function (id) {
        var _this = this;
        var url = this.FincaUrl + "/" + id;
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["tap"])(function (_) { return _this.log("fetched hero id=" + id); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["catchError"])(this.handleError("getFinca id=" + id)));
    };
    FincaService.prototype.getFinc = function (nombre) {
        var _this = this;
        var url = this.FincaUrl + "/" + nombre;
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["tap"])(function (_) { return _this.log("fetched hero nombre=" + nombre); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["catchError"])(this.handleError("getFinca nombre=" + nombre)));
    };
    FincaService.prototype.addFinca = function (finca) {
        var _this = this;
        return this.http.post(this.FincaUrl, finca, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["tap"])(function (finca) { return _this.log("added Finca w/ id=" + finca.id); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["catchError"])(this.handleError('finca')));
    };
    FincaService.prototype.AddUpdate = function (finca) {
        var _this = this;
        return this.http.put(this.FincaUrl, finca, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["tap"])(function (finca) { return _this.log("added Finca w/ id=" + finca.id); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["catchError"])(this.handleError('finca')));
    };
    FincaService.prototype.getDelete = function (id) {
        var _this = this;
        var url = this.FincaUrl + "/" + id;
        return this.http.delete(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["tap"])(function (_) { return _this.log("fetched hero id=" + id); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["catchError"])(this.handleError("Delete id=" + id)));
    };
    FincaService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["of"])(result);
        };
    };
    FincaService.prototype.log = function (message) {
        console.log('FincaService: ' + message);
    };
    FincaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], FincaService);
    return FincaService;
    var _a;
}());

//# sourceMappingURL=Finca-Service.js.map

/***/ })

},[257]);
//# sourceMappingURL=main.js.map