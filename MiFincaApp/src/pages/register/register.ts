
import { Component } from '@angular/core';
import { NavController, AlertController, IonicPage } from 'ionic-angular';
import { UsuarioService } from '../../Service/Usuario-Service';
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  createSuccess = false;
  registerCredentials = { email: '', password: '' ,nombre: '' ,apellido: '' ,direccion: '' ,ciudad: '' ,cedula: '' ,telefono: '' };
 
  constructor(private Usuarios: UsuarioService,private nav: NavController, private alertCtrl: AlertController) { }
  // this.auth.register(this.registerCredentials)
  public register() {
    this.Usuarios.addEmpleado(this.registerCredentials)
    .subscribe(success => {
      if (success) {
        this.createSuccess = true;
        this.showPopup("Success", "Account created.");
      } else {
        this.showPopup("Error", "Problem creating account.");
      }
    },
      error => {
        this.showPopup("Error", error);
      });
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