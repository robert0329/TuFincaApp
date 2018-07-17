
import { Component } from '@angular/core';
import { NavController, AlertController, IonicPage } from 'ionic-angular';
import { UsuarioService } from '../../Service/Usuario-Service';
import { FormGroup,FormControl} from '@angular/forms';
import { AuthService } from '../../providers/auth-service/auth-service'
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  createSuccess = false;
  form: FormGroup;
 
 
  constructor(private auth: AuthService,private Usuarios: UsuarioService,private nav: NavController, private alertCtrl: AlertController) {
     this.form = new FormGroup({
       idpersona:new FormControl(),
       email: new FormControl(),
       password: new FormControl(),
       nombre:   new FormControl(),
       apellido: new FormControl(),
       direccion:new FormControl(),
       ciudad:  new FormControl(),
       cedula: new FormControl(),
       telefono:new FormControl()
    });
   }
  public register() {
    this.auth.register(this.form.value).subscribe(success => {
    //  this.Usuarios.addEmpleado(this.form.value).subscribe(success => {
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