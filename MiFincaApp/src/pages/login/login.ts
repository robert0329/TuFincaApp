
import { UsuarioService } from '../../Service/Usuario-Service';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { ToastController } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading: Loading;
  form: FormGroup;
  constructor(private Usuario: UsuarioService, private toastCtrl: ToastController, private nav: NavController, private auth: AuthService, private loadingCtrl: LoadingController) {
    if(localStorage.getItem("token")) {
      nav.setRoot(HomePage);
    }
    this.form = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }
  public createAccount() {
    this.nav.push('RegisterPage');
  }
  public login() {
    this.showLoader();
    this.Usuario.auth(this.form.value).subscribe((result) => {
      if (result[0] == undefined) {
        this.presentToast("error");
        this.loading.dismiss();
      } else {
          if (result[0].password == this.form.value.password) {
            this.auth.asig(result);
            localStorage.setItem('token', result[0].email);
            var myTimer = setInterval(() => {
              clearInterval(myTimer);
              this.nav.setRoot(HomePage);
              this.loading.dismiss();
           }, 2000);
              
          } else {
            this.presentToast("error");
            this.loading.dismiss();
          }
      }
    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
    })
  }
  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Authenticating...',
      duration: 10000
    });

    this.loading.present();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 7000,
      position: 'bottom',
      dismissOnPageChange: true
    });
    toast.onDidDismiss(() => 
    {
      console.log('Dismissed toast');
    });

    toast.present();
  }
}