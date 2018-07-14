import { UsuarioService } from './../../Service/Usuario-Service';
import { Usuarios } from './../../app/Clases/Usuarios';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
 
  usuario: Usuarios;
   loading: Loading;
   form: FormGroup;

  constructor(private fb: FormBuilder,public navCtrl: NavController, private nav: NavController, private auth: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) { 
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
   
    this.auth.login(this.form.value).subscribe((value) => 
    {
      if (value) {    
        this.showLoading();   
        this.nav.setRoot(HomePage);
      } else {
        this.showError("Access Denied");
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
    this.loading.dismiss();
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }
}