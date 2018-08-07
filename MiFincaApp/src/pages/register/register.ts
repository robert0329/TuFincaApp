

import { Component } from '@angular/core';
import {IonicPage } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { LoadingController, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  createSuccess = false;
  form: FormGroup;
  loading: any;

  constructor(public loadingCtrl: LoadingController, private toastCtrl: ToastController) {
    this.form = new FormGroup({
      idpersona: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      nombre: new FormControl(),
      apellido: new FormControl(),
      direccion: new FormControl(),
      ciudad: new FormControl(),
      cedula: new FormControl(),
      telefono: new FormControl(),
      tipo: new FormControl()
    });
  }
  public register() {
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
  }

  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Authenticating...'
    });

    this.loading.present();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
}