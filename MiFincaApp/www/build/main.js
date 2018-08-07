webpackJsonp([29],{

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Service_Usuario_Service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_app_app_component__ = __webpack_require__(270);
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
    function HomePage(Usuarios, nav, app, loadingCtrl) {
        var _this = this;
        this.Usuarios = Usuarios;
        this.nav = nav;
        this.app = app;
        this.loadingCtrl = loadingCtrl;
        this.username = '';
        this.nombre = '';
        this.email = '';
        this.idpersona = '';
        this.tipo = '';
        this.isLoggedIn = false;
        if (!localStorage.getItem("token")) {
            nav.setRoot(__WEBPACK_IMPORTED_MODULE_1__login_login__["a" /* LoginPage */]);
        }
        this.Usuarios.authu().subscribe(function (result) {
            _this.nombre = result[0].nombre;
            _this.email = result[0].email;
            _this.idpersona = result[0].idpersona;
            _this.tipo = result[0].tipo;
            _this.Metodos();
        });
    }
    HomePage.prototype.Metodos = function () {
        if (this.tipo == "administrador") {
            this.app.administrador();
        }
        else if (this.tipo == "supervisor") {
            this.app.supervisor();
        }
        else if (this.tipo == "empleado") {
            this.app.empleado();
        }
        else if (this.tipo == "suplidor") {
            this.app.suplidor();
        }
    };
    HomePage.prototype.logout = function () {
        var _this = this;
        this.Usuarios.getPostLoginDelete(this.email).subscribe(function (result) {
            _this.showLoader();
            localStorage.clear();
            _this.loading.dismiss();
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_1__login_login__["a" /* LoginPage */]);
        });
    };
    HomePage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Authenticating...'
        });
        this.loading.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="logout()">\n\n        <ion-icon name="log-out"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>Home </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="home" padding>\n\n   <h3>Bienvenido, {{nombre}}!</h3>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__Service_Usuario_Service__["a" /* UsuarioService */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__src_app_app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TareasServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' }) };
var TareasServices = /** @class */ (function () {
    function TareasServices(http) {
        this.http = http;
        this.Url = "http://localhost:8000/tareas";
        this.UrlTareasid = "http://localhost:8000/tareasempleado";
    }
    TareasServices.prototype.getFincaTareasId = function (idpersona) {
        var url = this.Url + "/" + idpersona;
        return this.http.get(url).pipe();
    };
    TareasServices.prototype.addTareas = function (tarea) {
        return this.http.post(this.Url, tarea, httpOptions).pipe();
    };
    TareasServices.prototype.getTareasId = function (idpersona) {
        var url = this.UrlTareasid + "/" + idpersona;
        return this.http.get(url).pipe();
    };
    TareasServices.prototype.Update = function (tarea) {
        return this.http.put(this.Url, tarea, httpOptions).pipe();
    };
    TareasServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TareasServices);
    return TareasServices;
}());

//# sourceMappingURL=Tareas-Services.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsultarTareasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(5);
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
 * Generated class for the ConsultarTareasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConsultarTareasPage = /** @class */ (function () {
    function ConsultarTareasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Array = [];
        this.searchTerm = '';
        this.items = [];
        this.searching = false;
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]();
    }
    ConsultarTareasPage.prototype.openModal = function () {
    };
    ConsultarTareasPage.prototype.OnGoBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
    };
    ConsultarTareasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConsultarTareasPage');
    };
    ConsultarTareasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-consultar-tareas',template:/*ion-inline-start:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\consultar-tareas\consultar-tareas.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Consultar los frutos</ion-title>\n    <ion-buttons>\n        <button ion-button icon-only (click)="OnGoBack()">\n          <ion-icon name="md-arrow-back"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-searchbar [(ngModel)]="searchTerm" [formControl]="searchControl" (ionInput)="openModal()"></ion-searchbar>\n    <div *ngIf="searching" class="spinner-container">\n      <ion-spinner></ion-spinner>\n    </div>\n  <ion-list>\n    <ion-item-sliding  *ngFor="let grocery of Array">\n      <!-- <ion-item> {{grocery.descripcion}}</ion-item>\n      <ion-item> {{grocery.descripcion}} {{grocery.fecha}}</ion-item> -->\n\n      <ion-item-options>\n        <button ion-button icon-only light (click)="openModal()">\n          <ion-icon name="paper"></ion-icon>\n          <ion-icon name="md-done-all"></ion-icon>\n        </button>\n        <button ion-button icon-only light (click)="openModal()">\n          <ion-icon name="delete"></ion-icon>\n          <ion-icon name="md-done-all"></ion-icon>\n        </button>\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n  \n</ion-content>'/*ion-inline-end:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\consultar-tareas\consultar-tareas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */]])
    ], ConsultarTareasPage);
    return ConsultarTareasPage;
}());

//# sourceMappingURL=consultar-tareas.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsultarEmpleadosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(5);
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
 * Generated class for the ConsultarEmpleadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConsultarEmpleadosPage = /** @class */ (function () {
    function ConsultarEmpleadosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Array = [];
        this.searchTerm = '';
        this.items = [];
        this.searching = false;
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]();
    }
    ConsultarEmpleadosPage.prototype.openModal = function () {
    };
    ConsultarEmpleadosPage.prototype.OnGoBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
    };
    ConsultarEmpleadosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConsultarEmpleadosPage');
    };
    ConsultarEmpleadosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-consultar-empleados',template:/*ion-inline-start:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\consultar-empleados\consultar-empleados.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Consultar los frutos</ion-title>\n    <ion-buttons>\n        <button ion-button icon-only (click)="OnGoBack()">\n          <ion-icon name="md-arrow-back"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-searchbar [(ngModel)]="searchTerm" [formControl]="searchControl" (ionInput)="openModal()"></ion-searchbar>\n    <div *ngIf="searching" class="spinner-container">\n      <ion-spinner></ion-spinner>\n    </div>\n  <ion-list>\n    <ion-item-sliding  *ngFor="let grocery of Array">\n      <!-- <ion-item> {{grocery.descripcion}}</ion-item>\n      <ion-item> {{grocery.descripcion}} {{grocery.fecha}}</ion-item> -->\n\n      <ion-item-options>\n        <button ion-button icon-only light (click)="openModal()">\n          <ion-icon name="paper"></ion-icon>\n          <ion-icon name="md-done-all"></ion-icon>\n        </button>\n        <button ion-button icon-only light (click)="openModal()">\n          <ion-icon name="delete"></ion-icon>\n          <ion-icon name="md-done-all"></ion-icon>\n        </button>\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n  \n</ion-content>'/*ion-inline-end:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\consultar-empleados\consultar-empleados.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */]])
    ], ConsultarEmpleadosPage);
    return ConsultarEmpleadosPage;
}());

//# sourceMappingURL=consultar-empleados.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsultarGastosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(5);
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
 * Generated class for the ConsultarGastosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConsultarGastosPage = /** @class */ (function () {
    function ConsultarGastosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Array = [];
        this.searchTerm = '';
        this.items = [];
        this.searching = false;
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]();
    }
    ConsultarGastosPage.prototype.openModal = function () {
    };
    ConsultarGastosPage.prototype.OnGoBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
    };
    ConsultarGastosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConsultarGastosPage');
    };
    ConsultarGastosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-consultar-gastos',template:/*ion-inline-start:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\consultar-gastos\consultar-gastos.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Consultar los frutos</ion-title>\n    <ion-buttons>\n        <button ion-button icon-only (click)="OnGoBack()">\n          <ion-icon name="md-arrow-back"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-searchbar [(ngModel)]="searchTerm" [formControl]="searchControl" (ionInput)="openModal()"></ion-searchbar>\n    <div *ngIf="searching" class="spinner-container">\n      <ion-spinner></ion-spinner>\n    </div>\n  <ion-list>\n    <ion-item-sliding  *ngFor="let grocery of Array">\n      <!-- <ion-item> {{grocery.descripcion}}</ion-item>\n      <ion-item> {{grocery.descripcion}} {{grocery.fecha}}</ion-item> -->\n\n      <ion-item-options>\n        <button ion-button icon-only light (click)="openModal()">\n          <ion-icon name="paper"></ion-icon>\n          <ion-icon name="md-done-all"></ion-icon>\n        </button>\n        <button ion-button icon-only light (click)="openModal()">\n          <ion-icon name="delete"></ion-icon>\n          <ion-icon name="md-done-all"></ion-icon>\n        </button>\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n  \n</ion-content>'/*ion-inline-end:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\consultar-gastos\consultar-gastos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */]])
    ], ConsultarGastosPage);
    return ConsultarGastosPage;
}());

//# sourceMappingURL=consultar-gastos.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsultarFincasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(5);
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
 * Generated class for the ConsultarFincasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConsultarFincasPage = /** @class */ (function () {
    function ConsultarFincasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Array = [];
        this.searchTerm = '';
        this.items = [];
        this.searching = false;
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]();
    }
    ConsultarFincasPage.prototype.openModal = function () {
    };
    ConsultarFincasPage.prototype.OnGoBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
    };
    ConsultarFincasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConsultarFincasPage');
    };
    ConsultarFincasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-consultar-fincas',template:/*ion-inline-start:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\consultar-fincas\consultar-fincas.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Consultar los frutos</ion-title>\n    <ion-buttons>\n        <button ion-button icon-only (click)="OnGoBack()">\n          <ion-icon name="md-arrow-back"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-searchbar [(ngModel)]="searchTerm" [formControl]="searchControl" (ionInput)="openModal()"></ion-searchbar>\n    <div *ngIf="searching" class="spinner-container">\n      <ion-spinner></ion-spinner>\n    </div>\n  <ion-list>\n    <ion-item-sliding  *ngFor="let grocery of Array">\n      <!-- <ion-item> {{grocery.descripcion}}</ion-item>\n      <ion-item> {{grocery.descripcion}} {{grocery.fecha}}</ion-item> -->\n\n      <ion-item-options>\n        <button ion-button icon-only light (click)="openModal()">\n          <ion-icon name="paper"></ion-icon>\n          <ion-icon name="md-done-all"></ion-icon>\n        </button>\n        <button ion-button icon-only light (click)="openModal()">\n          <ion-icon name="delete"></ion-icon>\n          <ion-icon name="md-done-all"></ion-icon>\n        </button>\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n  \n</ion-content>'/*ion-inline-end:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\consultar-fincas\consultar-fincas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */]])
    ], ConsultarFincasPage);
    return ConsultarFincasPage;
}());

//# sourceMappingURL=consultar-fincas.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsultarMaquinariaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(5);
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
 * Generated class for the ConsultarMaquinariaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConsultarMaquinariaPage = /** @class */ (function () {
    function ConsultarMaquinariaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Array = [];
        this.searchTerm = '';
        this.items = [];
        this.searching = false;
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]();
    }
    ConsultarMaquinariaPage.prototype.openModal = function () {
    };
    ConsultarMaquinariaPage.prototype.OnGoBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
    };
    ConsultarMaquinariaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConsultarMaquinariaPage');
    };
    ConsultarMaquinariaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-consultar-maquinaria',template:/*ion-inline-start:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\consultar-maquinaria\consultar-maquinaria.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Consultar los frutos</ion-title>\n    <ion-buttons>\n        <button ion-button icon-only (click)="OnGoBack()">\n          <ion-icon name="md-arrow-back"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-searchbar [(ngModel)]="searchTerm" [formControl]="searchControl" (ionInput)="openModal()"></ion-searchbar>\n    <div *ngIf="searching" class="spinner-container">\n      <ion-spinner></ion-spinner>\n    </div>\n  <ion-list>\n    <ion-item-sliding  *ngFor="let grocery of Array">\n      <!-- <ion-item> {{grocery.descripcion}}</ion-item>\n      <ion-item> {{grocery.descripcion}} {{grocery.fecha}}</ion-item> -->\n\n      <ion-item-options>\n        <button ion-button icon-only light (click)="openModal()">\n          <ion-icon name="paper"></ion-icon>\n          <ion-icon name="md-done-all"></ion-icon>\n        </button>\n        <button ion-button icon-only light (click)="openModal()">\n          <ion-icon name="delete"></ion-icon>\n          <ion-icon name="md-done-all"></ion-icon>\n        </button>\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n  \n</ion-content>'/*ion-inline-end:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\consultar-maquinaria\consultar-maquinaria.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */]])
    ], ConsultarMaquinariaPage);
    return ConsultarMaquinariaPage;
}());

//# sourceMappingURL=consultar-maquinaria.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsultarCultivosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(5);
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
 * Generated class for the ConsultarCultivosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConsultarCultivosPage = /** @class */ (function () {
    function ConsultarCultivosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Array = [];
        this.searchTerm = '';
        this.items = [];
        this.searching = false;
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]();
    }
    ConsultarCultivosPage.prototype.openModal = function () {
    };
    ConsultarCultivosPage.prototype.OnGoBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
    };
    ConsultarCultivosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConsultarCultivosPage');
    };
    ConsultarCultivosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-consultar-cultivos',template:/*ion-inline-start:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\consultar-cultivos\consultar-cultivos.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Consultar los frutos</ion-title>\n    <ion-buttons>\n        <button ion-button icon-only (click)="OnGoBack()">\n          <ion-icon name="md-arrow-back"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-searchbar [(ngModel)]="searchTerm" [formControl]="searchControl" (ionInput)="openModal()"></ion-searchbar>\n    <div *ngIf="searching" class="spinner-container">\n      <ion-spinner></ion-spinner>\n    </div>\n  <ion-list>\n    <ion-item-sliding  *ngFor="let grocery of Array">\n      <!-- <ion-item> {{grocery.descripcion}}</ion-item>\n      <ion-item> {{grocery.descripcion}} {{grocery.fecha}}</ion-item> -->\n\n      <ion-item-options>\n        <button ion-button icon-only light (click)="openModal()">\n          <ion-icon name="paper"></ion-icon>\n          <ion-icon name="md-done-all"></ion-icon>\n        </button>\n        <button ion-button icon-only light (click)="openModal()">\n          <ion-icon name="delete"></ion-icon>\n          <ion-icon name="md-done-all"></ion-icon>\n        </button>\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n  \n</ion-content>'/*ion-inline-end:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\consultar-cultivos\consultar-cultivos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */]])
    ], ConsultarCultivosPage);
    return ConsultarCultivosPage;
}());

//# sourceMappingURL=consultar-cultivos.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsultarSiembrasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(5);
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
 * Generated class for the ConsultarSiembrasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConsultarSiembrasPage = /** @class */ (function () {
    function ConsultarSiembrasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Array = [];
        this.searchTerm = '';
        this.items = [];
        this.searching = false;
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]();
    }
    ConsultarSiembrasPage.prototype.openModal = function () {
    };
    ConsultarSiembrasPage.prototype.OnGoBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
    };
    ConsultarSiembrasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConsultarSiembrasPage');
    };
    ConsultarSiembrasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-consultar-siembras',template:/*ion-inline-start:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\consultar-siembras\consultar-siembras.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Consultar los frutos</ion-title>\n    <ion-buttons>\n        <button ion-button icon-only (click)="OnGoBack()">\n          <ion-icon name="md-arrow-back"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-searchbar [(ngModel)]="searchTerm" [formControl]="searchControl" (ionInput)="openModal()"></ion-searchbar>\n    <div *ngIf="searching" class="spinner-container">\n      <ion-spinner></ion-spinner>\n    </div>\n  <ion-list>\n    <ion-item-sliding  *ngFor="let grocery of Array">\n      <!-- <ion-item> {{grocery.descripcion}}</ion-item>\n      <ion-item> {{grocery.descripcion}} {{grocery.fecha}}</ion-item> -->\n\n      <ion-item-options>\n        <button ion-button icon-only light (click)="openModal()">\n          <ion-icon name="paper"></ion-icon>\n          <ion-icon name="md-done-all"></ion-icon>\n        </button>\n        <button ion-button icon-only light (click)="openModal()">\n          <ion-icon name="delete"></ion-icon>\n          <ion-icon name="md-done-all"></ion-icon>\n        </button>\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n  \n</ion-content>'/*ion-inline-end:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\consultar-siembras\consultar-siembras.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */]])
    ], ConsultarSiembrasPage);
    return ConsultarSiembrasPage;
}());

//# sourceMappingURL=consultar-siembras.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsultarParcelasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(5);
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
 * Generated class for the ConsultarParcelasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConsultarParcelasPage = /** @class */ (function () {
    function ConsultarParcelasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.array = [];
        this.searchTerm = '';
        this.items = [];
        this.searching = false;
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]();
    }
    ConsultarParcelasPage.prototype.openModal = function () {
    };
    ConsultarParcelasPage.prototype.OnGoBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
    };
    ConsultarParcelasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConsultarParcelasPage');
    };
    ConsultarParcelasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-consultar-parcelas',template:/*ion-inline-start:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\consultar-parcelas\consultar-parcelas.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Consultar los frutos</ion-title>\n    <ion-buttons>\n        <button ion-button icon-only (click)="OnGoBack()">\n          <ion-icon name="md-arrow-back"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-searchbar [(ngModel)]="searchTerm" [formControl]="searchControl" (ionInput)="openModal()"></ion-searchbar>\n    <div *ngIf="searching" class="spinner-container">\n      <ion-spinner></ion-spinner>\n    </div>\n  <ion-list>\n    <ion-item-sliding  *ngFor="let grocery of array">\n      <!-- <ion-item> {{grocery.descripcion}}</ion-item>\n      <ion-item> {{grocery.descripcion}} {{grocery.fecha}}</ion-item> -->\n\n      <ion-item-options>\n        <button ion-button icon-only light (click)="openModal()">\n          <ion-icon name="paper"></ion-icon>\n          <ion-icon name="md-done-all"></ion-icon>\n        </button>\n        <button ion-button icon-only light (click)="openModal()">\n          <ion-icon name="delete"></ion-icon>\n          <ion-icon name="md-done-all"></ion-icon>\n        </button>\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n  \n</ion-content>'/*ion-inline-end:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\consultar-parcelas\consultar-parcelas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */]])
    ], ConsultarParcelasPage);
    return ConsultarParcelasPage;
}());

//# sourceMappingURL=consultar-parcelas.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsultarProductosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the ConsultarProductosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConsultarProductosPage = /** @class */ (function () {
    function ConsultarProductosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ConsultarProductosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConsultarProductosPage');
    };
    ConsultarProductosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-consultar-productos',template:/*ion-inline-start:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\consultar-productos\consultar-productos.html"*/'<!--\n  Generated template for the ConsultarProductosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ConsultarProductos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\consultar-productos\consultar-productos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ConsultarProductosPage);
    return ConsultarProductosPage;
}());

//# sourceMappingURL=consultar-productos.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsultarSuplidorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(5);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */]])
    ], ConsultarSuplidorPage);
    return ConsultarSuplidorPage;
}());

//# sourceMappingURL=consultar-suplidor.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CosechaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__consultar_cosechas_consultar_cosechas__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(5);
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
        this.items = [];
        this.crearFormulario();
        this.items = [
            { title: 'one' },
            { title: 'two' },
            { title: 'three' },
            { title: 'four' },
            { title: 'five' },
            { title: 'six' }
        ];
    }
    CosechaPage.prototype.crearFormulario = function () {
        this.form = this.fb.group({
            descripcion: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required],
            fecha: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required],
            siembra: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required],
            cantidad: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]
        });
    };
    CosechaPage.prototype.guardarCosecha = function () {
    };
    CosechaPage.prototype.OnGoBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */]);
    };
    CosechaPage.prototype.ConsultarCosechas = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__consultar_cosechas_consultar_cosechas__["a" /* ConsultarCosechasPage */]);
    };
    CosechaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CosechaPage');
    };
    CosechaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-cosecha',template:/*ion-inline-start:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\cosecha\cosecha.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Agregar Cosechas\n\n    </ion-title>\n\n    <ion-buttons>\n\n      <button ion-button icon-only (click)="OnGoBack()">\n\n        <ion-icon name="md-arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="ConsultarCosechas()">\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-card-content>\n\n    <form [formGroup]="form" (ngSubmit)="guardarCosecha()" novalidate>\n\n      <ion-list>\n\n\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Descripcion</ion-label>\n\n          <ion-input formControlName="descripcion"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'descripcion\').errors && form.get(\'descripcion\').touched">\n\n          <p *ngIf="form.get(\'descripcion\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Fecha</ion-label>\n\n          <ion-datetime formControlName="fecha"></ion-datetime>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'fecha\').errors && form.get(\'fecha\').touched">\n\n          <p *ngIf="form.get(\'fecha\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Cantidad</ion-label>\n\n          <ion-textarea formControlName="cantidad"></ion-textarea>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'cantidad\').errors && form.get(\'cantidad\').touched">\n\n          <p *ngIf="form.get(\'cantidad\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label>Siembra</ion-label>\n\n          <ion-select multiple="true" cancelText="cancel" okText="ok">\n\n            <ion-option #item *ngFor="let sitio of items ; let i = index" selected="false" \n\n            >{{sitio.title}} </ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'siembra\').errors && form.get(\'siembra\').touched">\n\n          <p *ngIf="form.get(\'siembra\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n\n\n      </ion-list>\n\n      <button ion-button block type="submit" [disabled]="form.invalid">Guardar</button>\n\n    </form>\n\n  </ion-card-content>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\cosecha\cosecha.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */]])
    ], CosechaPage);
    return CosechaPage;
}());

//# sourceMappingURL=cosecha.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CultivosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(5);
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
            selector: 'page-cultivos',template:/*ion-inline-start:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\cultivos\cultivos.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Agregar cultivos\n\n    </ion-title>\n\n    <ion-buttons>\n\n      <button ion-button icon-only (click)="OnGoBack()">\n\n        <ion-icon name="md-arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only>\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-card-content>\n\n    <form [formGroup]="form" (ngSubmit)="guardar()" novalidate>\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Descripcion</ion-label>\n\n          <ion-textarea formControlName="descripcion"></ion-textarea>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'descripcion\').errors && form.get(\'descripcion\').touched">\n\n          <p *ngIf="form.get(\'descripcion\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n\n\n      </ion-list>\n\n      <button ion-button block type="submit" [disabled]="form.invalid">Guardar</button>\n\n    </form>\n\n  </ion-card-content>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\cultivos\cultivos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */]])
    ], CultivosPage);
    return CultivosPage;
}());

//# sourceMappingURL=cultivos.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmpleadosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(5);
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
            nombre: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            apellido: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            direccion: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            ciudad: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            cedula: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            celular: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            cargo: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            contraseña: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
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
            selector: 'page-empleados',template:/*ion-inline-start:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\empleados\empleados.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Agregar empleado\n\n    </ion-title>\n\n    <ion-buttons>\n\n      <button ion-button icon-only (click)="OnGoBack()">\n\n        <ion-icon name="md-arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button icon-only>\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-card-content>\n\n    <form [formGroup]="form" (ngSubmit)="guardar()" novalidate>\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Nombre</ion-label>\n\n          <ion-input formControlName="nombre"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'nombre\').errors && form.get(\'nombre\').touched">\n\n          <p *ngIf="form.get(\'nombre\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Apellido</ion-label>\n\n          <ion-input formControlName="apellido"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'apellido\').errors && form.get(\'apellido\').touched">\n\n          <p *ngIf="form.get(\'apellido\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Direccion</ion-label>\n\n          <ion-input formControlName="direccion"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'direccion\').errors && form.get(\'direccion\').touched">\n\n          <p *ngIf="form.get(\'direccion\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Celular</ion-label>\n\n          <ion-input formControlName="celular"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'celular\').errors && form.get(\'celular\').touched">\n\n          <p *ngIf="form.get(\'celular\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Ciudad</ion-label>\n\n          <ion-input formControlName="ciudad"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'ciudad\').errors && form.get(\'ciudad\').touched">\n\n          <p *ngIf="form.get(\'ciudad\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Cargo</ion-label>\n\n          <ion-select formControlName="cargo"></ion-select>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'cargo\').errors && form.get(\'cargo\').touched">\n\n          <p *ngIf="form.get(\'cargo\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n     \n\n\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Cedula</ion-label>\n\n          <ion-input formControlName="cedula"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'cedula\').errors && form.get(\'cedula\').touched">\n\n          <p *ngIf="form.get(\'cedula\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label color="primary" floating>Email</ion-label>\n\n        <ion-input formControlName="email"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="form.get(\'email\').errors && form.get(\'email\').touched">\n\n        <p *ngIf="form.get(\'email\').hasError(\'required\')">Es requerido</p>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="primary" floating>Contraseña</ion-label>\n\n        <ion-input formControlName="contraseña"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="form.get(\'contraseña\').errors && form.get(\'contraseña\').touched">\n\n        <p *ngIf="form.get(\'contraseña\').hasError(\'required\')">Es requerido</p>\n\n      </ion-item>\n\n    </ion-list>\n\n      <button ion-button block type="submit" [disabled]="form.invalid">Guardar</button>\n\n    </form>\n\n\n\n  </ion-card-content>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\empleados\empleados.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */]])
    ], EmpleadosPage);
    return EmpleadosPage;
}());

//# sourceMappingURL=empleados.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsultarHerramientasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(5);
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
 * Generated class for the ConsultarHerramientasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConsultarHerramientasPage = /** @class */ (function () {
    function ConsultarHerramientasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Array = [];
        this.searchTerm = '';
        this.items = [];
        this.searching = false;
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]();
    }
    ConsultarHerramientasPage.prototype.openModal = function () {
    };
    ConsultarHerramientasPage.prototype.OnGoBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
    };
    ConsultarHerramientasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConsultarHerramientasPage');
    };
    ConsultarHerramientasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-consultar-herramientas',template:/*ion-inline-start:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\consultar-herramientas\consultar-herramientas.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Consultar los frutos</ion-title>\n    <ion-buttons>\n        <button ion-button icon-only (click)="OnGoBack()">\n          <ion-icon name="md-arrow-back"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-searchbar [(ngModel)]="searchTerm" [formControl]="searchControl" (ionInput)="openModal()"></ion-searchbar>\n    <div *ngIf="searching" class="spinner-container">\n      <ion-spinner></ion-spinner>\n    </div>\n  <ion-list>\n    <ion-item-sliding  *ngFor="let grocery of Array">\n      <!-- <ion-item> {{grocery.descripcion}}</ion-item>\n      <ion-item> {{grocery.descripcion}} {{grocery.fecha}}</ion-item> -->\n\n      <ion-item-options>\n        <button ion-button icon-only light (click)="openModal()">\n          <ion-icon name="paper"></ion-icon>\n          <ion-icon name="md-done-all"></ion-icon>\n        </button>\n        <button ion-button icon-only light (click)="openModal()">\n          <ion-icon name="delete"></ion-icon>\n          <ion-icon name="md-done-all"></ion-icon>\n        </button>\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n  \n</ion-content>'/*ion-inline-end:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\consultar-herramientas\consultar-herramientas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */]])
    ], ConsultarHerramientasPage);
    return ConsultarHerramientasPage;
}());

//# sourceMappingURL=consultar-herramientas.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditFincaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Service_Finca_Service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lista_fincas_lista_fincas__ = __webpack_require__(53);
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
            id: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            nombre: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            descripcion: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
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
            selector: 'page-edit-finca',template:/*ion-inline-start:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\Finca-Component\edit-finca\edit-finca.html"*/'<ion-header>\n\n<ion-navbar>\n\n  <ion-title>ModalPage</ion-title>\n\n  <ion-buttons end>\n\n    <button ion-button (click)="closeModal()">Close</button>\n\n  </ion-buttons>\n\n</ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-card-content>\n\n    <form [formGroup]="form" (ngSubmit)="Modificar()" novalidate>\n\n      <ion-list>\n\n\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Id</ion-label>\n\n          <ion-input [(ngModel)]="id" formControlName="id"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Nombre</ion-label>\n\n          <ion-input [(ngModel)]="nombre" formControlName="nombre"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Descripcion</ion-label>\n\n          <ion-input [(ngModel)]="descripcion"formControlName="descripcion"></ion-input>\n\n        </ion-item>\n\n\n\n      </ion-list>\n\n      <button ion-button block type="submit">Modificar</button>\n\n    </form>\n\n  </ion-card-content>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\Finca-Component\edit-finca\edit-finca.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__Service_Finca_Service__["a" /* FincaService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], EditFincaPage);
    return EditFincaPage;
}());

//# sourceMappingURL=edit-finca.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FincasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Service_Usuario_Service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_Clases_Finca__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Service_Finca_Service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lista_fincas_lista_fincas__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_auth_service_auth_service__ = __webpack_require__(67);
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
    function FincasPage(Usuarios, auth, FincaServicio, fb, navCtrl, navParams) {
        this.Usuarios = Usuarios;
        this.auth = auth;
        this.FincaServicio = FincaServicio;
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        //arreglos
        this.FincaArray = [];
        this.FincaFilter = [];
        this.username = '';
        this.email = '';
        this.idpersona = '';
        this.id = '';
        this.nombre = '';
        this.descripcion = '';
        this.createMyForm();
        this.finca = new __WEBPACK_IMPORTED_MODULE_5__app_Clases_Finca__["a" /* Finca */]();
    }
    FincasPage.prototype.createMyForm = function () {
        // let info = this.auth.getUserInfo();
        // this.idpersona = info['idpersona'];
        var _this = this;
        this.Usuarios.authu().subscribe(function (result) {
            _this.idpersona = result[0].idpersona;
        });
        return this.form = this.fb.group({
            id: ['0', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required],
            nombre: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required],
            descripcion: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]
        });
    };
    FincasPage.prototype.OnGoBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
    };
    FincasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FincasPage');
    };
    FincasPage.prototype.addFinca = function () {
        var _this = this;
        this.finca.id = null;
        this.finca.nombre = this.form.value.nombre;
        this.finca.descripcion = this.form.value.descripcion;
        this.finca.idpersona = this.idpersona;
        this.FincaServicio.addFinca(this.finca).subscribe(function (res) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__lista_fincas_lista_fincas__["a" /* ListaFincasPage */]);
        });
    };
    FincasPage.prototype.listafinca = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__lista_fincas_lista_fincas__["a" /* ListaFincasPage */]);
    };
    // getVecino(id:number) {
    //   this.FincaServicio.getFincas(1).subscribe(res => {
    //      console.log(res.nombre);
    //    });    
    //  }
    FincasPage.prototype.buscarSolicitud = function () {
        // this.FincaServicio.getFinca().subscribe(find => {
        //   this.FincaArray = find;
        //   this.FincaFilter = this.FincaArray;
        // });
    };
    //  filtrar()
    //  {
    //    this.FincaFilter = this.FincaArray.filter((veci:Finca)=>veci.nombre.includes(this.nombre));
    //    console.log(this.FincaArray);
    //  }
    FincasPage.prototype.limpiar = function () {
        return this.form = this.fb.group({
            id: ['0', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required],
            nombre: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required],
            descripcion: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]
        });
    };
    FincasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-fincas',template:/*ion-inline-start:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\Finca-Component\Add-fincas\fincas.html"*/'<ion-header Access-Control-Allow-Origin>\n\n  <ion-navbar>\n\n      <ion-title>Registrar finca</ion-title>\n\n   \n\n     <ion-buttons>\n\n      <button ion-button icon-only (click)="OnGoBack()">\n\n        <ion-icon name="md-arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="listafinca()">\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-card-content>\n\n    <form [formGroup]="form" (ngSubmit)="addFinca()" novalidate>\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Nombre</ion-label>\n\n          <ion-input name="nombreinput" id="nombreinput" formControlName="nombre"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'nombre\').errors && form.get(\'nombre\').touched">\n\n          <p *ngIf="form.get(\'nombre\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n\n\n          <ion-item>\n\n          <ion-label color="primary" floating>Descripcion</ion-label>\n\n          <ion-input name="descripcioninput" id="descripcioninput" formControlName="descripcion"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'descripcion\').errors && form.get(\'descripcion\').touched">\n\n          <p *ngIf="form.get(\'descripcion\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n\n\n      </ion-list>\n\n      <button ion-button block type="submit">Guardar</button>\n\n    </form>\n\n  </ion-card-content>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\Finca-Component\Add-fincas\fincas.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Service_Usuario_Service__["a" /* UsuarioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Service_Usuario_Service__["a" /* UsuarioService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__providers_auth_service_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__providers_auth_service_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__Service_Finca_Service__["a" /* FincaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__Service_Finca_Service__["a" /* FincaService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */]) === "function" && _f || Object])
    ], FincasPage);
    return FincasPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=fincas.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HerramientasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(5);
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
        this.Array = [];
        this.crearFormulario();
        this.Array = [
            { title: '01' }
        ];
    }
    HerramientasPage.prototype.crearFormulario = function () {
        this.form = this.fb.group({
            herramientas: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            cantidad: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            inventario: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]
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
            selector: 'page-herramientas',template:/*ion-inline-start:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\herramientas\herramientas.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Agregar Herramientas\n\n    </ion-title>\n\n    <ion-buttons>\n\n      <button ion-button icon-only (click)="OnGoBack()">\n\n        <ion-icon name="md-arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>  \n\n    <ion-buttons end>\n\n      <button ion-button icon-only>\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-card-content>\n\n    <form [formGroup]="form" (ngSubmit)="guardar()" novalidate>\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Herramienta</ion-label>\n\n          <ion-input formControlName="herramientas"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'herramientas\').errors && form.get(\'herramientas\').touched">\n\n          <p *ngIf="form.get(\'herramientas\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Cantidad</ion-label>\n\n          <ion-input formControlName="cantidad"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'cantidad\').errors && form.get(\'cantidad\').touched">\n\n          <p *ngIf="form.get(\'cantidad\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n        \n\n        <ion-item>\n\n          <ion-label>Inventario</ion-label>\n\n          <ion-select multiple="true" cancelText="cancel" okText="ok">\n\n            <ion-option #item *ngFor="let sitio of Array ; let i = index" selected="false" \n\n            >{{sitio.title}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'inventario\').errors && form.get(\'inventario\').touched">\n\n          <p *ngIf="form.get(\'inventario\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n\n\n      </ion-list>\n\n      <button ion-button block type="submit" [disabled]="form.invalid">Guardar</button>\n\n    </form>\n\n  </ion-card-content>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\herramientas\herramientas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */]])
    ], HerramientasPage);
    return HerramientasPage;
}());

//# sourceMappingURL=herramientas.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaquinariaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(5);
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
        this.Array = [];
        this.crearFormulario();
        this.Array = [
            { title: 'Honda' }
        ];
    }
    MaquinariaPage.prototype.crearFormulario = function () {
        this.form = this.fb.group({
            descripcion: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            tipo: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            modelo: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            marca: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            finca: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            suplidor: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
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
            selector: 'page-maquinaria',template:/*ion-inline-start:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\maquinaria\maquinaria.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>\n\n        Agregar Maquinaria\n\n      </ion-title>\n\n      <ion-buttons>\n\n        <button ion-button icon-only (click)="OnGoBack()">\n\n          <ion-icon name="md-arrow-back"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n      <ion-buttons end>\n\n        <button ion-button icon-only>\n\n          <ion-icon name="search"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  <ion-content>\n\n    <ion-card-content>\n\n      <form [formGroup]="form" (ngSubmit)="Maquinaria()" novalidate>\n\n        <ion-list>\n\n          <ion-item>\n\n            <ion-label color="primary" floating>Descripcion</ion-label>\n\n            <ion-input formControlName="descripcion"></ion-input>\n\n          </ion-item>\n\n          <ion-item *ngIf="form.get(\'descripcion\').errors && form.get(\'descripcion\').touched">\n\n            <p *ngIf="form.get(\'descripcion\').hasError(\'required\')">Es requerido</p>\n\n          </ion-item>\n\n  \n\n          <ion-item>\n\n            <ion-label color="primary" floating>Modelo</ion-label>\n\n            <ion-input formControlName="modelo"></ion-input>\n\n          </ion-item>\n\n          <ion-item *ngIf="form.get(\'modelo\').errors && form.get(\'modelo\').touched">\n\n            <p *ngIf="form.get(\'modelo\').hasError(\'required\')">Es requerido</p>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-label>Marca</ion-label>\n\n            <ion-select multiple="false" cancelText="cancel" okText="ok" formControlName="finca">\n\n              <ion-option #item *ngFor="let lista of Array"  selected="false" \n\n              >{{lista.title}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n          <ion-item *ngIf="form.get(\'marca\').errors && form.get(\'marca\').touched">\n\n            <p *ngIf="form.get(\'marca\').hasError(\'required\')">Es requerido</p>\n\n          </ion-item>\n\n\n\n        </ion-list>\n\n        <button ion-button block type="submit" [disabled]="form.invalid">Guardar</button>\n\n      </form>\n\n    </ion-card-content>\n\n  </ion-content>'/*ion-inline-end:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\maquinaria\maquinaria.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */]])
    ], MaquinariaPage);
    return MaquinariaPage;
}());

//# sourceMappingURL=maquinaria.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GastosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(5);
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
    function GastosPage(fb, navCtrl, navParams) {
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.crearFormulario();
    }
    GastosPage.prototype.crearFormulario = function () {
        this.form = this.fb.group({
            nombre: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            apellido: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            direccion: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            ciudad: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            sector: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            cedula: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            telefono: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            celular: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            cargo: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            salario: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            contraseña: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
        });
    };
    GastosPage.prototype.guardarGastos = function () {
    };
    GastosPage.prototype.OnGoBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
        //this.navCtrl.popToRoot();
    };
    GastosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GastosPage');
    };
    GastosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-gastos',template:/*ion-inline-start:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\gastos\gastos.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Agregar Gastos\n\n    </ion-title>\n\n    <ion-buttons>\n\n      <button ion-button icon-only (click)="OnGoBack()">\n\n        <ion-icon name="md-arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only>\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-card-content>\n\n    <form [formGroup]="form" (ngSubmit)="guardarGastos()" novalidate>\n\n      <ion-list>\n\n\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Descripcion</ion-label>\n\n          <ion-input formControlName="descripcion"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'descripcion\').errors && form.get(\'descripcion\').touched">\n\n          <p *ngIf="form.get(\'descripcion\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n<!--(aqui va select item)\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Fecha</ion-label>\n\n          <ion-input formControlName="fecha"></ion-input>\n\n          <ion-item class=“listItem item-input” id=“dateSight”></ion-item>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'fecha\').errors && form.get(\'fecha\').touched">\n\n          <p *ngIf="form.get(\'fecha\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n      -->\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Id Finca</ion-label>\n\n          <ion-textarea formControlName="idsiembra"></ion-textarea>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'idfinca\').errors && form.get(\'idfinca\').touched">\n\n          <p *ngIf="form.get(\'idfinca\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n\n\n      </ion-list>\n\n      <button ion-button block type="submit" [disabled]="form.invalid">Guardar</button>\n\n    </form>\n\n  </ion-card-content>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\gastos\gastos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */]])
    ], GastosPage);
    return GastosPage;
}());

//# sourceMappingURL=gastos.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParcelaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(11);
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
    function ParcelaPage(fb, navCtrl, navParams) {
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Array = [];
        this.crearFormulario();
        this.Array = [
            { title: 'Don Juan' }
        ];
    }
    ParcelaPage.prototype.crearFormulario = function () {
        this.form = this.fb.group({
            descripcion: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            finca: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]
        });
    };
    ParcelaPage.prototype.guardarParcela = function () {
    };
    ParcelaPage.prototype.OnGoBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        //this.navCtrl.popToRoot();
    };
    ParcelaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ParcelaPage');
    };
    ParcelaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-parcela',template:/*ion-inline-start:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\parcela\parcela.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Agregar Parcela\n\n    </ion-title>\n\n    <ion-buttons>\n\n      <button ion-button icon-only (click)="OnGoBack()">\n\n        <ion-icon name="md-arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only>\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-card-content>\n\n    <form [formGroup]="form" (ngSubmit)="guardarParcela()" novalidate>\n\n      <ion-list>\n\n        \n\n\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Descripcion</ion-label>\n\n          <ion-input formControlName="descripcion"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'descripcion\').errors && form.get(\'descripcion\').touched">\n\n          <p *ngIf="form.get(\'descripcion\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label>Finca</ion-label>\n\n          <ion-select multiple="false" cancelText="cancel" okText="ok" formControlName="finca">\n\n            <ion-option #item *ngFor="let lista of Array"  selected="false" \n\n            >{{lista.title}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n\n\n        <ion-item *ngIf="form.get(\'finca\').errors && form.get(\'finca\').touched">\n\n          <p *ngIf="form.get(\'finca\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n        \n\n      </ion-list>\n\n      <button ion-button block type="submit" [disabled]="form.invalid">Guardar</button>\n\n    </form>\n\n  </ion-card-content>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\parcela\parcela.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ParcelaPage);
    return ParcelaPage;
}());

//# sourceMappingURL=parcela.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiembraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(11);
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
    function SiembraPage(fb, navCtrl, navParams) {
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.crearFormulario();
    }
    SiembraPage.prototype.crearFormulario = function () {
        this.form = this.fb.group({
            fecha: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            frutos: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            parcela: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            descripcion: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]
        });
    };
    SiembraPage.prototype.guardarSiembra = function () {
    };
    SiembraPage.prototype.OnGoBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        //this.navCtrl.popToRoot();
    };
    SiembraPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SiembraPage');
    };
    SiembraPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-siembra',template:/*ion-inline-start:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\siembra\siembra.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Agregar Siembra\n\n    </ion-title>\n\n    <ion-buttons>\n\n      <button ion-button icon-only (click)="OnGoBack()">\n\n        <ion-icon name="md-arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only>\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-card-content>\n\n    <form [formGroup]="form" (ngSubmit)="guardarSiembra()" novalidate>\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Descripcion</ion-label>\n\n          <ion-input formControlName="descripcion"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'descripcion\').errors && form.get(\'descripcion\').touched">\n\n          <p *ngIf="form.get(\'descripcion\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Fecha</ion-label>\n\n          <ion-datetime formControlName="fecha"></ion-datetime>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'fecha\').errors && form.get(\'fecha\').touched">\n\n          <p *ngIf="form.get(\'fecha\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n\n\n\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Frutos</ion-label>\n\n          <ion-select formControlName="frutos"></ion-select>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'frutos\').errors && form.get(\'frutos\').touched">\n\n          <p *ngIf="form.get(\'frutos\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Frutos</ion-label>\n\n          <ion-select formControlName="parcela"></ion-select>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'parcela\').errors && form.get(\'parcela\').touched">\n\n          <p *ngIf="form.get(\'parcela\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n\n\n      </ion-list>\n\n      <button ion-button block type="submit" [disabled]="form.invalid">Guardar</button>\n\n    </form>\n\n  </ion-card-content>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\siembra\siembra.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], SiembraPage);
    return SiembraPage;
}());

//# sourceMappingURL=siembra.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(5);
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
    function ProductosPage(fb, navCtrl, navParams) {
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.crearFormulario();
    }
    ProductosPage.prototype.crearFormulario = function () {
        this.form = this.fb.group({
            producto: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            descripcion: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            inventario: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]
        });
    };
    ProductosPage.prototype.guardarProductos = function () {
    };
    ProductosPage.prototype.OnGoBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
        //this.navCtrl.popToRoot();
    };
    ProductosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductosPage');
    };
    ProductosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-productos',template:/*ion-inline-start:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\productos\productos.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Agregar Productos\n\n    </ion-title>\n\n    <ion-buttons>\n\n      <button ion-button icon-only (click)="OnGoBack()">\n\n        <ion-icon name="md-arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only>\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-card-content>\n\n    <form [formGroup]="form" (ngSubmit)="guardarProductos()" novalidate>\n\n      <ion-list>\n\n\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Producto</ion-label>\n\n          <ion-input formControlName="producto"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'producto\').errors && form.get(\'producto\').touched">\n\n          <p *ngIf="form.get(\'producto\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n        \n\n      <ion-item>\n\n        <ion-label color="primary" floating>Descripcion</ion-label>\n\n        <ion-input formControlName="descripcion"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="form.get(\'descripcion\').errors && form.get(\'descripcion\').touched">\n\n        <p *ngIf="form.get(\'descripcion\').hasError(\'required\')">Es requerido</p>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label color="primary" floating>Inventario</ion-label>\n\n        <ion-select formControlName="inventario"></ion-select>\n\n      </ion-item>\n\n      <ion-item *ngIf="form.get(\'inventario\').errors && form.get(\'inventario\').touched">\n\n        <p *ngIf="form.get(\'inventario\').hasError(\'required\')">Es requerido</p>\n\n      </ion-item>\n\n\n\n      </ion-list>\n\n      <button ion-button block type="submit" [disabled]="form.invalid">Guardar</button>\n\n    </form>\n\n  </ion-card-content>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\productos\productos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */]])
    ], ProductosPage);
    return ProductosPage;
}());

//# sourceMappingURL=productos.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuplidorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(11);
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
    function SuplidorPage(fb, navCtrl, navParams) {
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.crearFormulario();
    }
    SuplidorPage.prototype.crearFormulario = function () {
        this.form = this.fb.group({
            nombre: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            apellido: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            direccion: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            ciudad: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            sector: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            cedula: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            telefono: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            celular: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            cargo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            salario: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            contraseña: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
        });
    };
    SuplidorPage.prototype.guardarSuplidor = function () {
    };
    SuplidorPage.prototype.OnGoBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        //this.navCtrl.popToRoot();
    };
    SuplidorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SuplidorPage');
    };
    SuplidorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-suplidor',template:/*ion-inline-start:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\suplidor\suplidor.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Agregar Suplidor\n\n    </ion-title>\n\n    <ion-buttons>\n\n      <button ion-button icon-only (click)="OnGoBack()">\n\n        <ion-icon name="md-arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only>\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-card-content>\n\n    <form [formGroup]="form" (ngSubmit)="guardarSuplidor()" novalidate>\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Id</ion-label>\n\n          <ion-input formControlName="id"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'id\').errors && form.get(\'id\').touched">\n\n          <p *ngIf="form.get(\'id\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>.\n\n\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Nombre</ion-label>\n\n          <ion-input formControlName="nombre"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'nombre\').errors && form.get(\'nombre\').touched">\n\n          <p *ngIf="form.get(\'nombre\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n        \n\n      <ion-item>\n\n        <ion-label color="primary" floating>Telefono</ion-label>\n\n        <ion-input formControlName="telefono"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="form.get(\'telefono\').errors && form.get(\'telefono\').touched">\n\n        <p *ngIf="form.get(\'telefono\').hasError(\'required\')">Es requerido</p>\n\n      </ion-item>\n\n      \n\n        <ion-item>\n\n          <ion-label color="primary" floating>Direccion</ion-label>\n\n          <ion-textarea formControlName="direccion"></ion-textarea>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'direccion\').errors && form.get(\'direccion\').touched">\n\n          <p *ngIf="form.get(\'direccion\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Celular</ion-label>\n\n          <ion-textarea formControlName="celular"></ion-textarea>\n\n        </ion-item>\n\n        <ion-item *ngIf="form.get(\'celular\').errors && form.get(\'celular\').touched">\n\n          <p *ngIf="form.get(\'celular\').hasError(\'required\')">Es requerido</p>\n\n        </ion-item>\n\n\n\n      </ion-list>\n\n      <button ion-button block type="submit" [disabled]="form.invalid">Guardar</button>\n\n    </form>\n\n  </ion-card-content>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\suplidor\suplidor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], SuplidorPage);
    return SuplidorPage;
}());

//# sourceMappingURL=suplidor.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TareasEmpleadosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Service_Usuario_Service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Service_Tareas_Services__ = __webpack_require__(112);
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
 * Generated class for the TareasEmpleadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TareasEmpleadosPage = /** @class */ (function () {
    function TareasEmpleadosPage(Usuarios, Tareas, navCtrl, navParams) {
        var _this = this;
        this.Usuarios = Usuarios;
        this.Tareas = Tareas;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Array = [];
        this.idpersona = '';
        this.Usuarios.authu().subscribe(function (result) {
            _this.idpersona = result[0].idpersona;
            _this.Tareas.getTareasId(result[0].idpersona).subscribe(function (value) {
                value.forEach(function (element) {
                    if (element.activa == "Incompleta") {
                        _this.Array.push(element);
                    }
                    else {
                    }
                });
            });
        });
    }
    TareasEmpleadosPage.prototype.openModal = function (idtarea, finca, fecha, descripcion) {
        var _this = this;
        this.Array = [];
        var data = { idtarea: idtarea, finca: finca, descripcion: descripcion, fecha: fecha, idpersona: this.idpersona, activa: "Completa" };
        this.Tareas.Update(data).subscribe(function (res) {
            _this.Tareas.getTareasId(_this.idpersona).subscribe(function (value) {
                value.forEach(function (element) {
                    if (element.activa == "Incompleta") {
                        _this.Array.push(element);
                    }
                });
            });
        });
    };
    TareasEmpleadosPage.prototype.OnGoBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */]);
    };
    TareasEmpleadosPage.prototype.ionViewDidLoad = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* Content */])
    ], TareasEmpleadosPage.prototype, "content", void 0);
    TareasEmpleadosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-tareas-empleados',template:/*ion-inline-start:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\tareas\tareas-empleados\tareas-empleados.html"*/'<!--\n\n  Generated template for the TareasEmpleadosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Tareas a realizar</ion-title>\n\n    <ion-buttons>\n\n        <button ion-button icon-only (click)="OnGoBack()">\n\n          <ion-icon name="md-arrow-back"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item-sliding *ngFor="let grocery of Array">\n\n      \n\n      <ion-item> {{grocery.descripcion}}</ion-item>\n\n\n\n      <ion-item-options>\n\n        <button ion-button icon-only light (click)="openModal(grocery.idtarea,grocery.finca, grocery.descripcion,grocery.fecha\n\n        )">\n\n          <ion-icon name="md-done-all"></ion-icon>\n\n        </button>\n\n      </ion-item-options>\n\n\n\n    </ion-item-sliding>\n\n\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\tareas\tareas-empleados\tareas-empleados.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__Service_Usuario_Service__["a" /* UsuarioService */], __WEBPACK_IMPORTED_MODULE_4__Service_Tareas_Services__["a" /* TareasServices */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */]])
    ], TareasEmpleadosPage);
    return TareasEmpleadosPage;
}());

//# sourceMappingURL=tareas-empleados.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TareasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Service_Usuario_Service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Service_Tareas_Services__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(72);
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
    function TareasPage(formBuilder, Tareas, Usuarios, fb, navCtrl, navParams) {
        this.formBuilder = formBuilder;
        this.Tareas = Tareas;
        this.Usuarios = Usuarios;
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Array = [];
        this.idp = [];
        this.ArrayTareas = [];
        this.Guardar = [];
        this.idpersona = '';
        this.isExists = false;
        this.myDate = new Date().toISOString();
        if (!localStorage.getItem("token")) {
            navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
        }
        this.crearFormulario();
    }
    TareasPage.prototype.crearFormulario = function () {
        this.form = this.fb.group({
            descripcion: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            empleado: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            finca: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            fecha: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]
        });
    };
    TareasPage.prototype.EmpleadoSeach = function (line) {
        var _this = this;
        this.Usuarios.getempleadoTareas(line).subscribe(function (value) {
            _this.Array = value;
        });
    };
    TareasPage.prototype.changeSelect = function (line) {
        this.Guardar = [];
        for (var index = 0; index < line.length; index++) {
            var element = line[index];
            if (element['idpersona'] == line[index]) {
                this.isExists = true;
            }
            if (!this.isExists) {
                this.Guardar.push(element);
            }
        }
    };
    TareasPage.prototype.guardar = function (value) {
        var _this = this;
        this.Guardar.forEach(function (element) {
            var arreglo = { idtarea: null, idpersona: element, descripcion: value.value.descripcion, fecha: value.value.fecha, finca: value.value.finca, activa: "Incompleta" };
            _this.Tareas.addTareas(arreglo).subscribe(function (result) {
            });
        });
    };
    TareasPage.prototype.OnGoBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
    };
    TareasPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.crearFormulario();
        this.Usuarios.authu().subscribe(function (result) {
            _this.Tareas.getFincaTareasId(result[0].idpersona).subscribe(function (value) {
                _this.ArrayTareas = value;
            });
        });
    };
    TareasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-tareas',template:/*ion-inline-start:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\tareas\tareas.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Agregar tareas\n\n    </ion-title>\n\n    <ion-buttons>\n\n      <button ion-button icon-only (click)="OnGoBack()">\n\n        <ion-icon name="md-arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only>\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-card-content>\n\n    <form [formGroup]="form" (ngSubmit)="guardar(form)">\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Descripcion</ion-label>\n\n          <ion-textarea formControlName="descripcion"></ion-textarea>\n\n        </ion-item>\n\n\n\n\n\n        <ion-item>\n\n          <ion-label floating color="primary">Fincas</ion-label>\n\n          <ion-select multiple="false" (ionChange)="EmpleadoSeach($event)" formControlName="finca" cancelText="Cancel" okText="OK">\n\n            <ion-option *ngFor="let items of ArrayTareas; let i = index" [selected]="items">{{items.nombre}} </ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Fecha</ion-label>\n\n          <ion-datetime formControlName="fecha" displayFormat="DD, YYYY" min="2018" max="2100"></ion-datetime>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label floating color="primary">Empleados</ion-label>\n\n          <ion-select multiple="true" #C (ionChange)="changeSelect(C.value)" formControlName="empleado" cancelText="Cancel" okText="OK">\n\n            <ion-option *ngFor="let items of Array; let i = index" [value]="items.idpersona">{{items.nombre}} </ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n\n\n      </ion-list>\n\n      <button ion-button block type="submit">Asignar</button>\n\n    </form>\n\n  </ion-card-content>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\tareas\tareas.html"*/,
        }),
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__Service_Tareas_Services__["a" /* TareasServices */], __WEBPACK_IMPORTED_MODULE_4__Service_Usuario_Service__["a" /* UsuarioService */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */]])
    ], TareasPage);
    return TareasPage;
}());

//# sourceMappingURL=tareas.js.map

/***/ }),

/***/ 171:
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
webpackEmptyAsyncContext.id = 171;

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/Finca-Component/Add-fincas/fincas.module": [
		449,
		28
	],
	"../pages/Finca-Component/edit-finca/edit-finca.module": [
		448,
		27
	],
	"../pages/Finca-Component/lista-fincas/lista-fincas.module": [
		447,
		26
	],
	"../pages/consultar-cosechas/consultar-cosechas.module": [
		432,
		25
	],
	"../pages/consultar-cultivos/consultar-cultivos.module": [
		437,
		24
	],
	"../pages/consultar-empleados/consultar-empleados.module": [
		433,
		23
	],
	"../pages/consultar-fincas/consultar-fincas.module": [
		435,
		22
	],
	"../pages/consultar-gastos/consultar-gastos.module": [
		434,
		21
	],
	"../pages/consultar-herramientas/consultar-herramientas.module": [
		446,
		20
	],
	"../pages/consultar-maquinaria/consultar-maquinaria.module": [
		436,
		19
	],
	"../pages/consultar-parcelas/consultar-parcelas.module": [
		439,
		18
	],
	"../pages/consultar-productos/consultar-productos.module": [
		440,
		17
	],
	"../pages/consultar-siembras/consultar-siembras.module": [
		438,
		16
	],
	"../pages/consultar-suplidor/consultar-suplidor.module": [
		441,
		15
	],
	"../pages/consultar-tareas/consultar-tareas.module": [
		442,
		14
	],
	"../pages/cosecha/cosecha.module": [
		443,
		13
	],
	"../pages/cultivos/cultivos.module": [
		444,
		12
	],
	"../pages/empleados/empleados.module": [
		445,
		11
	],
	"../pages/gastos/gastos.module": [
		453,
		10
	],
	"../pages/herramientas/herramientas.module": [
		450,
		9
	],
	"../pages/login/login.module": [
		451,
		8
	],
	"../pages/maquinaria/maquinaria.module": [
		452,
		7
	],
	"../pages/parcela/parcela.module": [
		454,
		6
	],
	"../pages/productos/productos.module": [
		457,
		5
	],
	"../pages/register/register.module": [
		455,
		0
	],
	"../pages/siembra/siembra.module": [
		456,
		4
	],
	"../pages/suplidor/suplidor.module": [
		458,
		3
	],
	"../pages/tareas/tareas-empleados/tareas-empleados.module": [
		459,
		2
	],
	"../pages/tareas/tareas.module": [
		460,
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
webpackAsyncContext.id = 214;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_Finca_Component_Add_fincas_fincas__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_consultar_tareas_consultar_tareas__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_consultar_suplidor_consultar_suplidor__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_consultar_siembras_consultar_siembras__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_consultar_productos_consultar_productos__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_consultar_parcelas_consultar_parcelas__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_consultar_maquinaria_consultar_maquinaria__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_consultar_herramientas_consultar_herramientas__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_consultar_gastos_consultar_gastos__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_consultar_fincas_consultar_fincas__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_consultar_empleados_consultar_empleados__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_consultar_cultivos_consultar_cultivos__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_consultar_cosechas_consultar_cosechas__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tareas_tareas_empleados_tareas_empleados__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_empleados_empleados__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_home_home__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_cosecha_cosecha__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_gastos_gastos__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_herramientas_herramientas__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_maquinaria_maquinaria__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_parcela_parcela__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_productos_productos__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_siembra_siembra__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_suplidor_suplidor__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_tareas_tareas__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_cultivos_cultivos__ = __webpack_require__(147);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






























var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_19__pages_home_home__["a" /* HomePage */];
        this.tipo = '';
        this.initializeApp();
    }
    MyApp.prototype.administrador = function () {
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_19__pages_home_home__["a" /* HomePage */] },
            { title: 'Registro Finca', component: __WEBPACK_IMPORTED_MODULE_0__pages_Finca_Component_Add_fincas_fincas__["a" /* FincasPage */] },
            { title: 'Registro Frutos', component: __WEBPACK_IMPORTED_MODULE_29__pages_cultivos_cultivos__["a" /* CultivosPage */] },
            { title: 'Registro Cosecha', component: __WEBPACK_IMPORTED_MODULE_20__pages_cosecha_cosecha__["a" /* CosechaPage */] },
            { title: 'Registro Gastos', component: __WEBPACK_IMPORTED_MODULE_21__pages_gastos_gastos__["a" /* GastosPage */] },
            { title: 'Registro Herramientas', component: __WEBPACK_IMPORTED_MODULE_22__pages_herramientas_herramientas__["a" /* HerramientasPage */] },
            { title: 'Registro Maquinaria', component: __WEBPACK_IMPORTED_MODULE_23__pages_maquinaria_maquinaria__["a" /* MaquinariaPage */] },
            { title: 'Registro Parcela', component: __WEBPACK_IMPORTED_MODULE_24__pages_parcela_parcela__["a" /* ParcelaPage */] },
            { title: 'Registro Productos', component: __WEBPACK_IMPORTED_MODULE_25__pages_productos_productos__["a" /* ProductosPage */] },
            { title: 'Registro Siembra', component: __WEBPACK_IMPORTED_MODULE_26__pages_siembra_siembra__["a" /* SiembraPage */] },
            { title: 'Registro Tareas', component: __WEBPACK_IMPORTED_MODULE_28__pages_tareas_tareas__["a" /* TareasPage */] },
            { title: 'Registro Suplidor', component: __WEBPACK_IMPORTED_MODULE_27__pages_suplidor_suplidor__["a" /* SuplidorPage */] },
            { title: 'Registro Empleados', component: __WEBPACK_IMPORTED_MODULE_14__pages_empleados_empleados__["a" /* EmpleadosPage */] },
            { title: 'Consultar Cosechas', component: __WEBPACK_IMPORTED_MODULE_12__pages_consultar_cosechas_consultar_cosechas__["a" /* ConsultarCosechasPage */] },
            { title: 'Consultar Cultivos', component: __WEBPACK_IMPORTED_MODULE_11__pages_consultar_cultivos_consultar_cultivos__["a" /* ConsultarCultivosPage */] },
            { title: 'Consultar Empleados', component: __WEBPACK_IMPORTED_MODULE_10__pages_consultar_empleados_consultar_empleados__["a" /* ConsultarEmpleadosPage */] },
            { title: 'Consultar Fincas', component: __WEBPACK_IMPORTED_MODULE_9__pages_consultar_fincas_consultar_fincas__["a" /* ConsultarFincasPage */] },
            { title: 'Consultar Gastos', component: __WEBPACK_IMPORTED_MODULE_8__pages_consultar_gastos_consultar_gastos__["a" /* ConsultarGastosPage */] },
            { title: 'Consultar Herramientas', component: __WEBPACK_IMPORTED_MODULE_7__pages_consultar_herramientas_consultar_herramientas__["a" /* ConsultarHerramientasPage */] },
            { title: 'Consultar Maquinaria', component: __WEBPACK_IMPORTED_MODULE_6__pages_consultar_maquinaria_consultar_maquinaria__["a" /* ConsultarMaquinariaPage */] },
            { title: 'Consultar Parcelas', component: __WEBPACK_IMPORTED_MODULE_5__pages_consultar_parcelas_consultar_parcelas__["a" /* ConsultarParcelasPage */] },
            { title: 'Consultar Productos', component: __WEBPACK_IMPORTED_MODULE_4__pages_consultar_productos_consultar_productos__["a" /* ConsultarProductosPage */] },
            { title: 'Consultar Siembras', component: __WEBPACK_IMPORTED_MODULE_3__pages_consultar_siembras_consultar_siembras__["a" /* ConsultarSiembrasPage */] },
            { title: 'Consultar Suplidor', component: __WEBPACK_IMPORTED_MODULE_2__pages_consultar_suplidor_consultar_suplidor__["a" /* ConsultarSuplidorPage */] },
            { title: 'Consultar Tareas', component: __WEBPACK_IMPORTED_MODULE_1__pages_consultar_tareas_consultar_tareas__["a" /* ConsultarTareasPage */] },
        ];
    };
    MyApp.prototype.supervisor = function () {
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_19__pages_home_home__["a" /* HomePage */] },
            { title: 'Tareas', component: __WEBPACK_IMPORTED_MODULE_28__pages_tareas_tareas__["a" /* TareasPage */] },
            { title: 'Registro Cosecha', component: __WEBPACK_IMPORTED_MODULE_20__pages_cosecha_cosecha__["a" /* CosechaPage */] },
            { title: 'Registro Herramientas', component: __WEBPACK_IMPORTED_MODULE_22__pages_herramientas_herramientas__["a" /* HerramientasPage */] },
            { title: 'Registro Maquinaria', component: __WEBPACK_IMPORTED_MODULE_23__pages_maquinaria_maquinaria__["a" /* MaquinariaPage */] },
            { title: 'Productos', component: __WEBPACK_IMPORTED_MODULE_25__pages_productos_productos__["a" /* ProductosPage */] },
            { title: 'Siembra', component: __WEBPACK_IMPORTED_MODULE_26__pages_siembra_siembra__["a" /* SiembraPage */] },
            { title: 'Registro Tareas', component: __WEBPACK_IMPORTED_MODULE_28__pages_tareas_tareas__["a" /* TareasPage */] },
        ];
    };
    MyApp.prototype.empleado = function () {
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_19__pages_home_home__["a" /* HomePage */] },
            { title: 'Tareas', component: __WEBPACK_IMPORTED_MODULE_13__pages_tareas_tareas_empleados_tareas_empleados__["a" /* TareasEmpleadosPage */] },
        ];
    };
    MyApp.prototype.suplidor = function () {
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_19__pages_home_home__["a" /* HomePage */] },
            //  { title: 'Tareas', component: TareasPage },
            // { title: 'Registro Fincas', component: FincasPage },
            //  { title: 'Registro Cosecha', component: CosechaPage },
            // // { title: 'Gastos', component: GastosPage },
            //  { title: 'Registro Herramientas', component: HerramientasPage },
            //  { title: 'Registro Maquinaria', component: MaquinariaPage },
            // { title: 'Parcela', component: ParcelaPage },
            //  { title: 'Productos', component: ProductosPage },
            //  { title: 'Siembra', component: SiembraPage },
            //  { title: 'Registro Tareas', component: TareasPage },
            { title: 'Suplidor', component: __WEBPACK_IMPORTED_MODULE_27__pages_suplidor_suplidor__["a" /* SuplidorPage */] },
        ];
    };
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
        Object(__WEBPACK_IMPORTED_MODULE_15__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_16_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_16_ionic_angular__["i" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_16_ionic_angular__["i" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_15__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_16_ionic_angular__["l" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_16_ionic_angular__["l" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(282);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_consultar_tareas_consultar_tareas__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_consultar_suplidor_consultar_suplidor__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_consultar_siembras_consultar_siembras__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_consultar_productos_consultar_productos__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_consultar_parcelas_consultar_parcelas__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_consultar_maquinaria_consultar_maquinaria__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_consultar_herramientas_consultar_herramientas__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_consultar_gastos_consultar_gastos__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_consultar_fincas_consultar_fincas__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_consultar_empleados_consultar_empleados__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_consultar_cultivos_consultar_cultivos__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_consultar_cosechas_consultar_cosechas__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tareas_tareas_empleados_tareas_empleados__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Service_Usuario_Service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_Finca_Component_edit_finca_edit_finca__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_empleados_empleados__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_home_home__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_list_list__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_status_bar__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_splash_screen__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_Finca_Component_Add_fincas_fincas__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_cosecha_cosecha__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_gastos_gastos__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_Finca_Component_lista_fincas_lista_fincas__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_herramientas_herramientas__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_maquinaria_maquinaria__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_parcela_parcela__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_productos_productos__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_siembra_siembra__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_suplidor_suplidor__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_tareas_tareas__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_login_login__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_sqlite__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__Service_Finca_Service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__Service_Tareas_Services__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__angular_common_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__providers_auth_service_auth_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_cultivos_cultivos__ = __webpack_require__(147);
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
        Object(__WEBPACK_IMPORTED_MODULE_17__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_20__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_Finca_Component_Add_fincas_fincas__["a" /* FincasPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_cosecha_cosecha__["a" /* CosechaPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_gastos_gastos__["a" /* GastosPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_herramientas_herramientas__["a" /* HerramientasPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_maquinaria_maquinaria__["a" /* MaquinariaPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_parcela_parcela__["a" /* ParcelaPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_productos_productos__["a" /* ProductosPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_siembra_siembra__["a" /* SiembraPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_suplidor_suplidor__["a" /* SuplidorPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_tareas_tareas__["a" /* TareasPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_empleados_empleados__["a" /* EmpleadosPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_Finca_Component_lista_fincas_lista_fincas__["a" /* ListaFincasPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_Finca_Component_edit_finca_edit_finca__["a" /* EditFincaPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tareas_tareas_empleados_tareas_empleados__["a" /* TareasEmpleadosPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_cultivos_cultivos__["a" /* CultivosPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_consultar_cosechas_consultar_cosechas__["a" /* ConsultarCosechasPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_consultar_tareas_consultar_tareas__["a" /* ConsultarTareasPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_consultar_suplidor_consultar_suplidor__["a" /* ConsultarSuplidorPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_consultar_siembras_consultar_siembras__["a" /* ConsultarSiembrasPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_consultar_productos_consultar_productos__["a" /* ConsultarProductosPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_consultar_parcelas_consultar_parcelas__["a" /* ConsultarParcelasPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_consultar_maquinaria_consultar_maquinaria__["a" /* ConsultarMaquinariaPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_consultar_herramientas_consultar_herramientas__["a" /* ConsultarHerramientasPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_consultar_gastos_consultar_gastos__["a" /* ConsultarGastosPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_consultar_fincas_consultar_fincas__["a" /* ConsultarFincasPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_consultar_empleados_consultar_empleados__["a" /* ConsultarEmpleadosPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_consultar_cultivos_consultar_cultivos__["a" /* ConsultarCultivosPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_consultar_cosechas_consultar_cosechas__["a" /* ConsultarCosechasPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_18_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/consultar-cosechas/consultar-cosechas.module#ConsultarCosechasPageModule', name: 'ConsultarCosechasPage', segment: 'consultar-cosechas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/consultar-empleados/consultar-empleados.module#ConsultarEmpleadosPageModule', name: 'ConsultarEmpleadosPage', segment: 'consultar-empleados', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/consultar-gastos/consultar-gastos.module#ConsultarGastosPageModule', name: 'ConsultarGastosPage', segment: 'consultar-gastos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/consultar-fincas/consultar-fincas.module#ConsultarFincasPageModule', name: 'ConsultarFincasPage', segment: 'consultar-fincas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/consultar-maquinaria/consultar-maquinaria.module#ConsultarMaquinariaPageModule', name: 'ConsultarMaquinariaPage', segment: 'consultar-maquinaria', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/consultar-cultivos/consultar-cultivos.module#ConsultarCultivosPageModule', name: 'ConsultarCultivosPage', segment: 'consultar-cultivos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/consultar-siembras/consultar-siembras.module#ConsultarSiembrasPageModule', name: 'ConsultarSiembrasPage', segment: 'consultar-siembras', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/consultar-parcelas/consultar-parcelas.module#ConsultarParcelasPageModule', name: 'ConsultarParcelasPage', segment: 'consultar-parcelas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/consultar-productos/consultar-productos.module#ConsultarProductosPageModule', name: 'ConsultarProductosPage', segment: 'consultar-productos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/consultar-suplidor/consultar-suplidor.module#ConsultarSuplidorPageModule', name: 'ConsultarSuplidorPage', segment: 'consultar-suplidor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/consultar-tareas/consultar-tareas.module#ConsultarTareasPageModule', name: 'ConsultarTareasPage', segment: 'consultar-tareas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cosecha/cosecha.module#CosechaPageModule', name: 'CosechaPage', segment: 'cosecha', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cultivos/cultivos.module#CultivosPageModule', name: 'CultivosPage', segment: 'cultivos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/empleados/empleados.module#EmpleadosPageModule', name: 'EmpleadosPage', segment: 'empleados', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/consultar-herramientas/consultar-herramientas.module#ConsultarHerramientasPageModule', name: 'ConsultarHerramientasPage', segment: 'consultar-herramientas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Finca-Component/lista-fincas/lista-fincas.module#ListaFincasPageModule', name: 'ListaFincasPage', segment: 'lista-fincas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Finca-Component/edit-finca/edit-finca.module#EditFincaPageModule', name: 'EditFincaPage', segment: 'edit-finca', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Finca-Component/Add-fincas/fincas.module#FincasPageModule', name: 'FincasPage', segment: 'fincas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/herramientas/herramientas.module#HerramientasPageModule', name: 'HerramientasPage', segment: 'herramientas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/maquinaria/maquinaria.module#MaquinariaPageModule', name: 'MaquinariaPage', segment: 'maquinaria', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gastos/gastos.module#GastosPageModule', name: 'GastosPage', segment: 'gastos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/parcela/parcela.module#ParcelaPageModule', name: 'ParcelaPage', segment: 'parcela', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/siembra/siembra.module#SiembraPageModule', name: 'SiembraPage', segment: 'siembra', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/productos/productos.module#ProductosPageModule', name: 'ProductosPage', segment: 'productos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/suplidor/suplidor.module#SuplidorPageModule', name: 'SuplidorPage', segment: 'suplidor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tareas/tareas-empleados/tareas-empleados.module#TareasEmpleadosPageModule', name: 'TareasEmpleadosPage', segment: 'tareas-empleados', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tareas/tareas.module#TareasPageModule', name: 'TareasPage', segment: 'tareas', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_39__angular_common_http__["b" /* HttpClientModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_18_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_20__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_list_list__["a" /* ListPage */], __WEBPACK_IMPORTED_MODULE_24__pages_Finca_Component_Add_fincas_fincas__["a" /* FincasPage */], __WEBPACK_IMPORTED_MODULE_25__pages_cosecha_cosecha__["a" /* CosechaPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_gastos_gastos__["a" /* GastosPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_herramientas_herramientas__["a" /* HerramientasPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_maquinaria_maquinaria__["a" /* MaquinariaPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_parcela_parcela__["a" /* ParcelaPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_productos_productos__["a" /* ProductosPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_siembra_siembra__["a" /* SiembraPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_suplidor_suplidor__["a" /* SuplidorPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_tareas_tareas__["a" /* TareasPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_empleados_empleados__["a" /* EmpleadosPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_Finca_Component_lista_fincas_lista_fincas__["a" /* ListaFincasPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_Finca_Component_edit_finca_edit_finca__["a" /* EditFincaPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tareas_tareas_empleados_tareas_empleados__["a" /* TareasEmpleadosPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_cultivos_cultivos__["a" /* CultivosPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_consultar_cosechas_consultar_cosechas__["a" /* ConsultarCosechasPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_consultar_tareas_consultar_tareas__["a" /* ConsultarTareasPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_consultar_suplidor_consultar_suplidor__["a" /* ConsultarSuplidorPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_consultar_siembras_consultar_siembras__["a" /* ConsultarSiembrasPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_consultar_productos_consultar_productos__["a" /* ConsultarProductosPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_consultar_parcelas_consultar_parcelas__["a" /* ConsultarParcelasPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_consultar_maquinaria_consultar_maquinaria__["a" /* ConsultarMaquinariaPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_consultar_herramientas_consultar_herramientas__["a" /* ConsultarHerramientasPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_consultar_gastos_consultar_gastos__["a" /* ConsultarGastosPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_consultar_fincas_consultar_fincas__["a" /* ConsultarFincasPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_consultar_empleados_consultar_empleados__["a" /* ConsultarEmpleadosPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_consultar_cultivos_consultar_cultivos__["a" /* ConsultarCultivosPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_consultar_cosechas_consultar_cosechas__["a" /* ConsultarCosechasPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_37__Service_Finca_Service__["a" /* FincaService */],
                __WEBPACK_IMPORTED_MODULE_13__Service_Usuario_Service__["a" /* UsuarioService */],
                __WEBPACK_IMPORTED_MODULE_38__Service_Tareas_Services__["a" /* TareasServices */],
                { provide: __WEBPACK_IMPORTED_MODULE_17__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_18_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_40__providers_auth_service_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_36__ionic_native_sqlite__["a" /* SQLite */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Finca; });
var Finca = /** @class */ (function () {
    function Finca(id, nombre, descripcion, idpersona) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.idpersona = idpersona;
        this.id = (id) ? id : 0;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.idpersona = idpersona;
    }
    return Finca;
}());

//# sourceMappingURL=Finca.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' }) };
var UsuarioService = /** @class */ (function () {
    function UsuarioService(http) {
        this.http = http;
        this.Url = "http://localhost:8000/personas";
        this.UrlgetEmail = "http://localhost:8000/personas/email";
        this.UrlTareas = "http://localhost:8000/personas/tareas";
        this.Urlgetpassword = "http://localhost:8000/personas/password";
        this.postlogin = "http://localhost:8000/postlogin";
        this.join = "http://localhost:8000/personass";
        this.DeleteLogin = "http://localhost:8000/deletelogin";
    }
    UsuarioService.prototype.getempleado = function () {
        return this.http.get(this.Url).pipe();
    };
    UsuarioService.prototype.getempleadoTareas = function (tipo) {
        var url = this.UrlTareas + "/" + tipo;
        return this.http.get(url).pipe();
    };
    UsuarioService.prototype.getempleadoId = function (tipo) {
        var url = this.UrlTareas + "/" + tipo;
        return this.http.get(url).pipe();
    };
    UsuarioService.prototype.getFincas = function (id) {
        var url = this.Url + "/" + id;
        return this.http.get(url).pipe();
    };
    UsuarioService.prototype.getEmail = function (email) {
        var url = this.UrlgetEmail + "/" + email;
        return this.http.get(url).pipe();
    };
    UsuarioService.prototype.getUsers = function (email) {
        return this.http.get(this.UrlgetEmail + "/" + email);
    };
    UsuarioService.prototype.getPassword = function (persona) {
        var url = this.Urlgetpassword + "/" + persona.email;
        return this.http.get(url).pipe();
    };
    UsuarioService.prototype.addEmpleado = function (persona, identity) {
        var _this = this;
        var identit = (identity + 1);
        var data = { idpersona: identit, email: persona.email, password: persona.password, nombre: persona.nombre, apellido: persona.apellido, direccion: persona.direccion, ciudad: persona.ciudad, cedula: persona.cedula, telefono: persona.telefono, tipo: persona.tipo };
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.Url, data, httpOptions)
                .subscribe(function (res) {
                resolve(res);
                console.log("paso");
            }, function (err) {
                console.log("no paso");
                reject(err);
            });
        });
    };
    UsuarioService.prototype.AddUpdate = function (finca) {
        return this.http.put(this.Url, finca, httpOptions).pipe();
    };
    UsuarioService.prototype.getDelete = function (id) {
        var url = this.Url + "/" + id;
        return this.http.delete(url).pipe();
    };
    UsuarioService.prototype.getPostLogin = function () {
        return this.http.get(this.postlogin, httpOptions).pipe();
    };
    UsuarioService.prototype.auth = function (persona) {
        console.log(persona);
        var url = this.UrlgetEmail + "/" + persona.email;
        return this.http.get(url).pipe();
    };
    UsuarioService.prototype.authu = function () {
        return this.http.get(this.join).pipe();
    };
    UsuarioService.prototype.addPostLogin = function (usuario) {
        return this.http.post(this.postlogin, usuario, httpOptions).pipe();
    };
    UsuarioService.prototype.getPostLoginDelete = function (id) {
        var url = this.DeleteLogin + "/" + id;
        return this.http.delete(url).pipe();
    };
    UsuarioService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UsuarioService);
    return UsuarioService;
}());

//# sourceMappingURL=Usuario-Service.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaFincasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Service_Finca_Service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Finca_Component_edit_finca_edit_finca__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Add_fincas_fincas__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Service_Usuario_Service__ = __webpack_require__(44);
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
    function ListaFincasPage(Usuarios, auth, modalCtrl, alertCtrl, FincaServicio, navCtrl, navParams) {
        var _this = this;
        this.Usuarios = Usuarios;
        this.auth = auth;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.FincaServicio = FincaServicio;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.username = '';
        this.email = '';
        this.idpersona = '';
        this.notes = [];
        this.FincaArray = [];
        this.Usuarios.authu().subscribe(function (value) {
            _this.email = value[0].email;
            _this.idpersona = value[0].idpersona;
        });
        // let info = this.auth.getUserInfo();
        // console.log(info);
        // this.email = info['email'];
        // this.idpersona = info['idpersona'];
    }
    ListaFincasPage_1 = ListaFincasPage;
    ListaFincasPage.prototype.openModal = function (id, nombre, descripcion) {
        var data = { id: id, nombre: nombre, descripcion: descripcion };
        var modalPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_1__Finca_Component_edit_finca_edit_finca__["a" /* EditFincaPage */], data);
        modalPage.present();
    };
    ListaFincasPage.prototype.getVecino = function (id) {
        // this.FincaServicio.getFincas().subscribe(res => {
        //   console.log(res.nombre);
        // });
    };
    ListaFincasPage.prototype.buscarSolicitud = function () {
        var _this = this;
        this.FincaServicio.getFincas(this.idpersona).subscribe(function (res) {
            _this.notes = res;
        });
        // this.FincaServicio.getFinca().subscribe(res => {
        //   this.FincaArray = res;
        // });
    };
    ListaFincasPage.prototype.deleteNote = function (id) {
        var _this = this;
        this.FincaServicio.getDelete(id).subscribe(function (res) {
            _this.navCtrl.setRoot(ListaFincasPage_1);
        });
    };
    ListaFincasPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.Usuarios.authu().subscribe(function (value) {
            _this.FincaServicio.getFincas(value[0].idpersona).subscribe(function (res) {
                _this.notes = res;
            });
        });
    };
    ListaFincasPage.prototype.OnGoBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
    };
    ListaFincasPage.prototype.addFinca = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__Add_fincas_fincas__["a" /* FincasPage */]);
    };
    ListaFincasPage = ListaFincasPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-lista-fincas',template:/*ion-inline-start:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\Finca-Component\lista-fincas\lista-fincas.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Listado Fincas</ion-title>\n\n    <ion-buttons>\n\n      <button ion-button icon-only (click)="OnGoBack()">\n\n        <ion-icon name="md-arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="addFinca()">\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item-sliding *ngFor="let grocery of notes">\n\n      <ion-item> {{grocery.nombre}}</ion-item>\n\n\n\n      <ion-item-options>\n\n        <button ion-button icon-only (click)="openModal(grocery.id,grocery.nombre,grocery.descripcion)" light>\n\n          <ion-icon name="paper"></ion-icon>\n\n        </button>\n\n        <button ion-button icon-only danger (click)="deleteNote(grocery.id)">\n\n          <ion-icon name="trash"></ion-icon>\n\n        </button>\n\n      </ion-item-options>\n\n\n\n    </ion-item-sliding>\n\n\n\n  </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\Finca-Component\lista-fincas\lista-fincas.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__Service_Usuario_Service__["a" /* UsuarioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__Service_Usuario_Service__["a" /* UsuarioService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* ModalController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__Service_Finca_Service__["a" /* FincaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__Service_Finca_Service__["a" /* FincaService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* NavController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavParams */]) === "function" && _g || Object])
    ], ListaFincasPage);
    return ListaFincasPage;
    var ListaFincasPage_1, _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=lista-fincas.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FincaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = { headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' }) };
var FincaService = /** @class */ (function () {
    function FincaService(http) {
        this.http = http;
        this.FincaUrl = "http://localhost:8000/finca";
        this.FincaUrlapi = "http://localhost:8000/finca/api";
    }
    FincaService.prototype.getFinca = function () {
        var _this = this;
        return this.http.get(this.FincaUrl)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["tap"])(function (heroes) { return _this.log('fetched Finca'); }), Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["catchError"])(this.handleError('getFinca', [])));
    };
    FincaService.prototype.getFincas = function (id) {
        var _this = this;
        var url = this.FincaUrlapi + "/" + id;
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["tap"])(function (_) { return _this.log("fetched hero id=" + id); }), Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["catchError"])(this.handleError("getFinca id=" + id)));
    };
    FincaService.prototype.getFinc = function (nombre) {
        var _this = this;
        var url = this.FincaUrl + "/" + nombre;
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["tap"])(function (_) { return _this.log("fetched hero nombre=" + nombre); }), Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["catchError"])(this.handleError("getFinca nombre=" + nombre)));
    };
    FincaService.prototype.addFinca = function (finca) {
        var _this = this;
        return this.http.post(this.FincaUrl, finca, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["tap"])(function (finca) { return _this.log("added Finca w/ id=" + finca.id); }), Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["catchError"])(this.handleError('finca')));
    };
    FincaService.prototype.AddUpdate = function (finca) {
        var _this = this;
        return this.http.put(this.FincaUrl, finca, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["tap"])(function (finca) { return _this.log("added Finca w/ id=" + finca.id); }), Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["catchError"])(this.handleError('finca')));
    };
    FincaService.prototype.getDelete = function (id) {
        var _this = this;
        var url = this.FincaUrl + "/" + id;
        return this.http.delete(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["tap"])(function (_) { return _this.log("fetched hero id=" + id); }), Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["catchError"])(this.handleError("Delete id=" + id)));
    };
    FincaService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["of"])(result);
        };
    };
    FincaService.prototype.log = function (message) {
        console.log('FincaService: ' + message);
    };
    FincaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], FincaService);
    return FincaService;
}());

//# sourceMappingURL=Finca-Service.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* unused harmony export Postloginn */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Service_Usuario_Service__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var User = /** @class */ (function () {
    function User(idpostlogin, name, email, idpersona, tipo) {
        this.idpostlogin = idpostlogin;
        this.email = email;
        this.name = name;
        this.idpersona = idpersona;
        this.tipo = tipo;
    }
    return User;
}());

var Postloginn = /** @class */ (function () {
    function Postloginn(idpostlogin, nombre, tipo, email, password) {
        this.idpostlogin = idpostlogin;
        this.nombre = nombre;
        this.tipo = tipo;
        this.password = password;
        this.email = email;
    }
    return Postloginn;
}());

var AuthService = /** @class */ (function () {
    function AuthService(Usuarios) {
        this.Usuarios = Usuarios;
    }
    AuthService.prototype.asig = function (value) {
        this.currentUserr = new Postloginn("1", value[0].nombre, value[0].tipo, value[0].email, value[0].password);
        console.log(this.currentUserr);
        this.Usuarios.addPostLogin(this.currentUserr).subscribe(function (result) {
        });
    };
    AuthService.prototype.getUserInfo = function () {
        var _this = this;
        this.Usuarios.authu().subscribe(function (value) {
            console.log(value);
            _this.currentUser = new User("1", value[0].nombre, value[0].email, value[0].idpersona, value[0].tipo);
        });
        console.log(this.currentUser);
        return this.currentUser;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__Service_Usuario_Service__["a" /* UsuarioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Service_Usuario_Service__["a" /* UsuarioService */]) === "function" && _a || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Service_Usuario_Service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = /** @class */ (function () {
    function LoginPage(Usuario, toastCtrl, nav, auth, loadingCtrl) {
        this.Usuario = Usuario;
        this.toastCtrl = toastCtrl;
        this.nav = nav;
        this.auth = auth;
        this.loadingCtrl = loadingCtrl;
        if (localStorage.getItem("token")) {
            nav.setRoot(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */]);
        }
        this.form = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */](),
            password: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */](),
        });
    }
    LoginPage.prototype.createAccount = function () {
        this.nav.push('RegisterPage');
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.showLoader();
        this.Usuario.auth(this.form.value).subscribe(function (result) {
            if (result[0] == undefined) {
                _this.presentToast("error");
                _this.loading.dismiss();
            }
            else {
                if (result[0].password == _this.form.value.password) {
                    _this.auth.asig(result);
                    localStorage.setItem('token', result[0].email);
                    var myTimer = setInterval(function () {
                        clearInterval(myTimer);
                        _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */]);
                        _this.loading.dismiss();
                    }, 2000);
                }
                else {
                    _this.presentToast("error");
                    _this.loading.dismiss();
                }
            }
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
        });
    };
    LoginPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Authenticating...',
            duration: 10000
        });
        this.loading.present();
    };
    LoginPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 7000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\login\login.html"*/'<ion-content class="login-content" padding>\n\n  <!-- <ion-row class="logo-row">\n\n    <ion-col></ion-col>\n\n    <ion-col width-67>\n\n      <img src="http://placehold.it/300x200" />\n\n    </ion-col>\n\n    <ion-col></ion-col>\n\n  </ion-row> -->\n\n  <div class="login-box">\n\n    <form [formGroup]="form" (ngSubmit)="login()" novalidate>\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Email</ion-label>\n\n          <ion-input name="emailinput" id="emailinput" formControlName="email"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label color="primary" floating>Password</ion-label>\n\n          <ion-input type="password" name="passwordinput" id="passwordinput" formControlName="password"></ion-input>\n\n        </ion-item>\n\n\n\n      </ion-list>\n\n      <ion-row>\n\n        <ion-col class="signup-col">\n\n          <button ion-button class="submit-btn" full type="submit">Login</button>\n\n          <button ion-button class="register-btn" block clear (click)="createAccount()">Create New Account</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </form>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__Service_Usuario_Service__["a" /* UsuarioService */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsultarCosechasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(5);
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
 * Generated class for the ConsultarCosechasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConsultarCosechasPage = /** @class */ (function () {
    function ConsultarCosechasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Array = [];
        this.searchTerm = '';
        this.searching = false;
        this.items = [];
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]();
        this.items = [
            { title: '01/05/2016' },
            { title: '05/01/2017' },
            { title: '06/06/2018' }
        ];
    }
    ConsultarCosechasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConsultarCosechasPage');
    };
    ConsultarCosechasPage.prototype.openModal = function () {
    };
    ConsultarCosechasPage.prototype.OnGoBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
    };
    ConsultarCosechasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-consultar-cosechas',template:/*ion-inline-start:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\consultar-cosechas\consultar-cosechas.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Consultar cosechas</ion-title>\n    <ion-buttons>\n        <button ion-button icon-only (click)="OnGoBack()">\n          <ion-icon name="md-arrow-back"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-searchbar [(ngModel)]="searchTerm" [formControl]="searchControl" (ionInput)="openModal()"></ion-searchbar>\n    <div *ngIf="searching" class="spinner-container">\n      <ion-spinner></ion-spinner>\n    </div>\n  <ion-list>\n    <ion-item-sliding  *ngFor="let grocery of items">\n      <ion-item> {{grocery.title}}</ion-item>\n\n      <ion-item-options>\n        <button ion-button icon-only light (click)="openModal()">\n          <ion-icon name="paper"></ion-icon>\n          <ion-icon name="md-done-all"></ion-icon>\n        </button>\n        <button ion-button icon-only light (click)="openModal()">\n          <ion-icon name="delete"></ion-icon>\n          <ion-icon name="md-done-all"></ion-icon>\n        </button>\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n  \n</ion-content>'/*ion-inline-end:"C:\Users\Robert\Documents\GitHub\TuFincaApp\MiFincaApp\src\pages\consultar-cosechas\consultar-cosechas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */]])
    ], ConsultarCosechasPage);
    return ConsultarCosechasPage;
}());

//# sourceMappingURL=consultar-cosechas.js.map

/***/ })

},[274]);
//# sourceMappingURL=main.js.map