import { Usuarios } from './../../app/Clases/Usuarios';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { FormGroup, FormControl } from '@angular/forms';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  createSuccess = false;
  usuario: Usuarios;
  loading: Loading;
  form: FormGroup;

  constructor(public navCtrl: NavController, private nav: NavController, private auth: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
    this.form = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  public createAccount() {
    this.nav.push('RegisterPage');
  }

  public login() {

    this.auth.login(this.form.value).subscribe(allowed => {
      if (allowed) {
        this.createSuccess = true;
        this.nav.setRoot(HomePage);
      } else {
        this.showPopup("Error", "Problem creating account.");
      }
    },
      error => {
        this.showPopup("Error", error);
      });
  }
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (this.createSuccess) {
              this.nav.popToRoot();
            }
          }
        }
      ]
    });
    alert.present();
  }
}