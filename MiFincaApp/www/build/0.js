webpackJsonp([0],{

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(469);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
            ],
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterPage = /** @class */ (function () {
    function RegisterPage(loadingCtrl, toastCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.createSuccess = false;
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            idpersona: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            nombre: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            apellido: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            direccion: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            ciudad: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            cedula: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            telefono: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            tipo: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]()
        });
    }
    RegisterPage.prototype.register = function () {
        // this.Usuarios.getIdentity().subscribe((result) => {
        //   let datos = {idpersona: result[0]}
        //   this.Usuarios.addEmpleado(this.form.value,datos.idpersona).then((result) => {
        //     this.loading.dismiss();
        //   }, (err) => {
        //     this.loading.dismiss();
        //     this.presentToast(err);
        //   });
        // }, (err) => {
        // });
    };
    RegisterPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Authenticating...'
        });
        this.loading.present();
    };
    RegisterPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\Jose\Desktop\TuFincaApp\MiFincaApp\src\pages\register\register.html"*/'<ion-header>\n\n  <ion-navbar color="dark">\n\n    <ion-title>Register</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="login-content" padding>\n\n  <div class="login-box">\n\n    <form [formGroup]="form" (ngSubmit)="register()" #registerForm="ngForm">\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-list inset>\n\n            <ion-item>\n\n              <ion-input type="email" placeholder="Email" name="email" formControlName="email" required></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-input type="password" placeholder="Password" name="password" formControlName="password" required></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-input type="text" placeholder="Nombre" name="nombre" formControlName="nombre" required></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-input type="text" placeholder="Apellido" name="apellido" formControlName="apellido" required></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-input type="text" placeholder="Direccion" name="direccion" formControlName="direccion" required></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-input type="text" placeholder="Ciudad" name="ciudad" formControlName="ciudad" required></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-input type="text" placeholder="Cedula" name="cedula" formControlName="cedula" required></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-input type="text" placeholder="Telefono" name="telefono" formControlName="telefono" required></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-input type="text" placeholder="tipo" name="tipo" formControlName="tipo" required></ion-input>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col class="signup-col">\n\n          <button ion-button class="submit-btn" full type="submit" [disabled]="!registerForm.form.valid">Register</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </form>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jose\Desktop\TuFincaApp\MiFincaApp\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ToastController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ })

});
//# sourceMappingURL=0.js.map