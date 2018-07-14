import { Usuarios } from './../../app/Clases/Usuarios';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  usuario: Usuarios;
  loading: Loading;
  form: FormGroup;

  constructor(private fb: FormBuilder, public navCtrl: NavController, private nav: NavController, private auth: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
    this.createMyForm();
  }
  private createMyForm() {
    return this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  public createAccount() {
    this.nav.push('RegisterPage');
  }
  users: any[] = [];

  public login() {
    
    this.auth.login(this.form.value).subscribe(allowed => {
      if (allowed) {        
        // this.showLoading();
        // this.nav.setRoot(HomePage);
        this.showError("Access Denied");
      } else {
        this.showError("Access ok");
      }
    },
      error => {
        this.showError(error);
      });
  }
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    let alert = this.alertCtrl.create({
      title: 'error',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }
}