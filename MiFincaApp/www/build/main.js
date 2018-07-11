webpackJsonp([15],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListFincasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_db_db__ = __webpack_require__(99);
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
 * Generated class for the ListFincasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListFincasPage = /** @class */ (function () {
    function ListFincasPage(navCtrl, navParams, modalCtrl, db, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.coords = { lat: 0, lng: 0 };
        this.description = '';
        this.foto = '';
    }
    ListFincasPage.prototype.borrarSitio = function (id) {
        var alert = this.alertCtrl.create({
            title: 'Confirmar borrado',
            message: '¿Estás seguro de que deseas eliminar este sitio?',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        // Ha respondido que no así que no hacemos nada         
                    }
                },
                {
                    text: 'Si',
                    handler: function () {
                        //   this.db.borrarSitio(id).then((res)=>{
                        // // Una vez borrado el sitio recargamos el listado
                        //   this.db.getSitios().then((res)=>{
                        //   this.sitios = [];
                        //   for(var i = 0; i < res.rows.length; i++){
                        //       this.sitios.push({
                        //         id : res.rows.item(i).id,
                        //         lat: res.rows.item(i).lat,
                        //         lng: res.rows.item(i).lng,
                        //         address: res.rows.item(i).address,
                        //         description: res.rows.item(i).description,
                        //         foto: res.rows.item(i).foto
                        //       });
                        //   }
                        //   },(err)=>{ /* alert('error al sacar de la bd'+err) */ })
                        // },(err)=>{ /* alert('error al borrar de la bd'+err) */ });
                    }
                }
            ]
        });
        alert.present();
    };
    ListFincasPage.prototype.guardarSitio = function () {
        var sitio = {
            lat: this.coords.lat,
            lng: this.coords.lng,
            address: this.address,
            description: this.description,
            foto: this.foto
        };
    };
    ListFincasPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.db.getSitios().then(function (res) {
            _this.sitios = [];
            for (var i = 0; i < res.rows.length; i++) {
                _this.sitios.push({
                    id: res.rows.item(i).id,
                    lat: res.rows.item(i).lat,
                    lng: res.rows.item(i).lng,
                    address: res.rows.item(i).address,
                    description: res.rows.item(i).description,
                    foto: res.rows.item(i).foto
                });
            }
        }, function (err) { });
    };
    ListFincasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListFincasPage');
    };
    ListFincasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list-fincas',template:/*ion-inline-start:"C:\Users\chico\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\Finca-Component\list-fincas\list-fincas.html"*/'<!--\n  Generated template for the ListadoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Listado</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-list>\n  <ion-item-sliding #item *ngFor="let sitio of sitios">\n    <ion-item>\n      <ion-thumbnail item-left>\n        <img [src]="sitio.foto">\n      </ion-thumbnail>\n      <h2>{{ sitio.address }}</h2>\n      <p>{{ sitio.description }}</p>\n    </ion-item>\n    <ion-item-options side="right">\n      <button ion-button  color="danger" (click)="borrarSitio(sitio.id)"><ion-icon name="trash"></ion-icon>\n         Borrar\n      </button>\n    </ion-item-options>\n  </ion-item-sliding>\n</ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\chico\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\Finca-Component\list-fincas\list-fincas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_db_db__["a" /* DbProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ListFincasPage);
    return ListFincasPage;
}());

//# sourceMappingURL=list-fincas.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CosechaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CosechaPage);
    return CosechaPage;
}());

//# sourceMappingURL=cosecha.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmpleadosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
    ], EmpleadosPage);
    return EmpleadosPage;
}());

//# sourceMappingURL=empleados.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FincasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
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
            selector: 'page-fincas',template:/*ion-inline-start:"C:\Users\chico\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\Finca-Component\Add-fincas\fincas.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Agregar fincas\n    </ion-title>\n    <ion-buttons>\n      <button ion-button icon-only (click)="OnGoBack()">\n        <ion-icon name="md-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card-content>\n    <form [formGroup]="form" (ngSubmit)="guardarFinca()" novalidate>\n      <ion-list>\n        <ion-item>\n          <ion-label color="primary" floating>Nombre</ion-label>\n          <ion-input formControlName="nombre"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="form.get(\'nombre\').errors && form.get(\'nombre\').touched">\n          <p *ngIf="form.get(\'nombre\').hasError(\'required\')">Es requerido</p>\n        </ion-item>\n\n        <ion-item>\n          <ion-label color="primary" floating>Descripcion</ion-label>\n          <ion-textarea formControlName="descripcion"></ion-textarea>\n        </ion-item>\n        <ion-item *ngIf="form.get(\'descripcion\').errors && form.get(\'descripcion\').touched">\n          <p *ngIf="form.get(\'descripcion\').hasError(\'required\')">Es requerido</p>\n        </ion-item>\n\n      </ion-list>\n      <button ion-button block type="submit" [disabled]="form.invalid">Guardar</button>\n    </form>\n  </ion-card-content>\n</ion-content>'/*ion-inline-end:"C:\Users\chico\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\Finca-Component\Add-fincas\fincas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
    ], FincasPage);
    return FincasPage;
}());

//# sourceMappingURL=fincas.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GastosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], GastosPage);
    return GastosPage;
}());

//# sourceMappingURL=gastos.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HerramientasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
    ], HerramientasPage);
    return HerramientasPage;
}());

//# sourceMappingURL=herramientas.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
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
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\chico\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\login\login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Logueate a tu fincaApp\n    </ion-title>\n    \n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card-content>\n    <form [formGroup]="form" (ngSubmit)="Login()" novalidate>\n      <ion-list>\n        <ion-item>\n          <ion-label color="primary" floating>Usuario</ion-label>\n          <ion-textarea formControlName="usuario"></ion-textarea>\n        </ion-item>\n        <ion-item *ngIf="form.get(\'usuario\').errors && form.get(\'usuario\').touched">\n          <p *ngIf="form.get(\'usuario\').hasError(\'required\')">Es requerido</p>\n        </ion-item>\n\n        <ion-item>\n          <ion-label color="primary" floating>Contraseña</ion-label>\n          <ion-input formControlName="contraseña"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="form.get(\'contraseña\').errors && form.get(\'contraseña\').touched">\n          <p *ngIf="form.get(\'contraseña\').hasError(\'required\')">Es requerido</p>\n        </ion-item>\n\n      </ion-list>\n      <button ion-button block type="submit" [disabled]="form.invalid">Login</button>\n    </form>\n  </ion-card-content>\n</ion-content>'/*ion-inline-end:"C:\Users\chico\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaquinariaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
    ], MaquinariaPage);
    return MaquinariaPage;
}());

//# sourceMappingURL=maquinaria.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], PagosPage);
    return PagosPage;
}());

//# sourceMappingURL=pagos.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ProductosPage);
    return ProductosPage;
}());

//# sourceMappingURL=productos.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParcelaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ParcelaPage);
    return ParcelaPage;
}());

//# sourceMappingURL=parcela.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiembraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SiembraPage);
    return SiembraPage;
}());

//# sourceMappingURL=siembra.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuplidorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SuplidorPage);
    return SuplidorPage;
}());

//# sourceMappingURL=suplidor.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TareasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
    ], TareasPage);
    return TareasPage;
}());

//# sourceMappingURL=tareas.js.map

/***/ }),

/***/ 125:
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
webpackEmptyAsyncContext.id = 125;

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/Finca-Component/Add-fincas/fincas.module": [
		288,
		14
	],
	"../pages/Finca-Component/list-fincas/list-fincas.module": [
		289,
		13
	],
	"../pages/cosecha/cosecha.module": [
		285,
		12
	],
	"../pages/cultivos/cultivos.module": [
		286,
		0
	],
	"../pages/empleados/empleados.module": [
		287,
		11
	],
	"../pages/gastos/gastos.module": [
		290,
		10
	],
	"../pages/herramientas/herramientas.module": [
		291,
		9
	],
	"../pages/login/login.module": [
		292,
		8
	],
	"../pages/maquinaria/maquinaria.module": [
		293,
		7
	],
	"../pages/pagos/pagos.module": [
		294,
		6
	],
	"../pages/parcela/parcela.module": [
		296,
		5
	],
	"../pages/productos/productos.module": [
		295,
		4
	],
	"../pages/siembra/siembra.module": [
		297,
		3
	],
	"../pages/suplidor/suplidor.module": [
		298,
		2
	],
	"../pages/tareas/tareas.module": [
		299,
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
webpackAsyncContext.id = 166;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(233);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_Finca_Component_list_fincas_list_fincas__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_empleados_empleados__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_Finca_Component_Add_fincas_fincas__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_cosecha_cosecha__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_gastos_gastos__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_herramientas_herramientas__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_maquinaria_maquinaria__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_pagos_pagos__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_parcela_parcela__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_productos_productos__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_siembra_siembra__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_suplidor_suplidor__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_tareas_tareas__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_login_login__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_db_db__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_sqlite__ = __webpack_require__(206);
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
                __WEBPACK_IMPORTED_MODULE_13__pages_herramientas_herramientas__["a" /* HerramientasPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_maquinaria_maquinaria__["a" /* MaquinariaPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_pagos_pagos__["a" /* PagosPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_parcela_parcela__["a" /* ParcelaPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_productos_productos__["a" /* ProductosPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_siembra_siembra__["a" /* SiembraPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_suplidor_suplidor__["a" /* SuplidorPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_tareas_tareas__["a" /* TareasPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */], __WEBPACK_IMPORTED_MODULE_1__pages_empleados_empleados__["a" /* EmpleadosPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_login_login__["a" /* LoginPage */], __WEBPACK_IMPORTED_MODULE_0__pages_Finca_Component_list_fincas_list_fincas__["a" /* ListFincasPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cosecha/cosecha.module#CosechaPageModule', name: 'CosechaPage', segment: 'cosecha', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cultivos/cultivos.module#CultivosPageModule', name: 'CultivosPage', segment: 'cultivos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/empleados/empleados.module#EmpleadosPageModule', name: 'EmpleadosPage', segment: 'empleados', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Finca-Component/Add-fincas/fincas.module#FincasPageModule', name: 'FincasPage', segment: 'fincas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Finca-Component/list-fincas/list-fincas.module#ListFincasPageModule', name: 'ListFincasPage', segment: 'list-fincas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gastos/gastos.module#GastosPageModule', name: 'GastosPage', segment: 'gastos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/herramientas/herramientas.module#HerramientasPageModule', name: 'HerramientasPage', segment: 'herramientas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/maquinaria/maquinaria.module#MaquinariaPageModule', name: 'MaquinariaPage', segment: 'maquinaria', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pagos/pagos.module#PagosPageModule', name: 'PagosPage', segment: 'pagos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/productos/productos.module#ProductosPageModule', name: 'ProductosPage', segment: 'productos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/parcela/parcela.module#ParcelaPageModule', name: 'ParcelaPage', segment: 'parcela', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/siembra/siembra.module#SiembraPageModule', name: 'SiembraPage', segment: 'siembra', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/suplidor/suplidor.module#SuplidorPageModule', name: 'SuplidorPage', segment: 'suplidor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tareas/tareas.module#TareasPageModule', name: 'TareasPage', segment: 'tareas', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */], __WEBPACK_IMPORTED_MODULE_10__pages_Finca_Component_Add_fincas_fincas__["a" /* FincasPage */], __WEBPACK_IMPORTED_MODULE_11__pages_cosecha_cosecha__["a" /* CosechaPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_gastos_gastos__["a" /* GastosPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_herramientas_herramientas__["a" /* HerramientasPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_maquinaria_maquinaria__["a" /* MaquinariaPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_pagos_pagos__["a" /* PagosPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_parcela_parcela__["a" /* ParcelaPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_productos_productos__["a" /* ProductosPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_siembra_siembra__["a" /* SiembraPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_suplidor_suplidor__["a" /* SuplidorPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_tareas_tareas__["a" /* TareasPage */], __WEBPACK_IMPORTED_MODULE_1__pages_empleados_empleados__["a" /* EmpleadosPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_Finca_Component_list_fincas_list_fincas__["a" /* ListFincasPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_22__providers_db_db__["a" /* DbProvider */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_sqlite__["a" /* SQLite */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_Finca_Component_list_fincas_list_fincas__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_login_login__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_empleados_empleados__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_db_db__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_Finca_Component_Add_fincas_fincas__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_cosecha_cosecha__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_gastos_gastos__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_herramientas_herramientas__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_maquinaria_maquinaria__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_pagos_pagos__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_parcela_parcela__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_productos_productos__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_siembra_siembra__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_suplidor_suplidor__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_tareas_tareas__ = __webpack_require__(115);
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
    function MyApp(db, platform, statusBar, splashScreen) {
        var _this = this;
        this.db = db;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_1__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.db.openDb()
                .then(function () { return _this.db.createTableSitios(); });
        });
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */] },
            { title: 'Registro Fincas', component: __WEBPACK_IMPORTED_MODULE_9__pages_Finca_Component_Add_fincas_fincas__["a" /* FincasPage */] },
            { title: 'Registro Cosecha', component: __WEBPACK_IMPORTED_MODULE_10__pages_cosecha_cosecha__["a" /* CosechaPage */] },
            { title: 'Gastos', component: __WEBPACK_IMPORTED_MODULE_11__pages_gastos_gastos__["a" /* GastosPage */] },
            { title: 'Registro Herramientas', component: __WEBPACK_IMPORTED_MODULE_12__pages_herramientas_herramientas__["a" /* HerramientasPage */] },
            { title: 'Registro Maquinaria', component: __WEBPACK_IMPORTED_MODULE_13__pages_maquinaria_maquinaria__["a" /* MaquinariaPage */] },
            { title: 'Pagos', component: __WEBPACK_IMPORTED_MODULE_14__pages_pagos_pagos__["a" /* PagosPage */] },
            { title: 'Parcela', component: __WEBPACK_IMPORTED_MODULE_15__pages_parcela_parcela__["a" /* ParcelaPage */] },
            { title: 'Productos', component: __WEBPACK_IMPORTED_MODULE_16__pages_productos_productos__["a" /* ProductosPage */] },
            { title: 'Siembra', component: __WEBPACK_IMPORTED_MODULE_17__pages_siembra_siembra__["a" /* SiembraPage */] },
            { title: 'Registro Tareas', component: __WEBPACK_IMPORTED_MODULE_19__pages_tareas_tareas__["a" /* TareasPage */] },
            { title: 'Suplidor', component: __WEBPACK_IMPORTED_MODULE_18__pages_suplidor_suplidor__["a" /* SuplidorPage */] },
            { title: 'Registro Empleados', component: __WEBPACK_IMPORTED_MODULE_2__pages_empleados_empleados__["a" /* EmpleadosPage */] },
            { title: 'Listado', component: __WEBPACK_IMPORTED_MODULE_0__pages_Finca_Component_list_fincas_list_fincas__["a" /* ListFincasPage */] }
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
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\chico\Documents\GitHub\TuFincaApp\MiFincaApp\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\chico\Documents\GitHub\TuFincaApp\MiFincaApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__providers_db_db__["a" /* DbProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DbProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the DbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DbProvider = /** @class */ (function () {
    function DbProvider(sqlite) {
        this.sqlite = sqlite;
        this.db = null;
        console.log('Hello Db Provider');
    }
    DbProvider.prototype.openDb = function () {
        var _this = this;
        return this.sqlite.create({
            name: 'data.db',
            location: 'default' // el campo location es obligatorio
        })
            .then(function (db) {
            _this.db = db;
        });
    };
    DbProvider.prototype.createTableSitios = function () {
        return this.db.executeSql("create table if not exists sitios( id INTEGER PRIMARY KEY AUTOINCREMENT, lat FLOAT, lng FLOAT, address TEXT, description TEXT, foto TEXT )", {});
    };
    DbProvider.prototype.addSitio = function (sitio) {
        var sql = "INSERT INTO sitios (lat, lng, address, description, foto) values (?,?,?,?,?)";
        return this.db.executeSql(sql, [sitio.lat, sitio.lng, sitio.address, sitio.description, sitio.foto]);
    };
    DbProvider.prototype.getSitios = function () {
        var sql = "SELECT * FROM sitios";
        return this.db.executeSql(sql, {});
    };
    DbProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */]])
    ], DbProvider);
    return DbProvider;
}());

//# sourceMappingURL=db.js.map

/***/ })

},[210]);
//# sourceMappingURL=main.js.map