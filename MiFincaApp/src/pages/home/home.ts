import { Usuarios } from './../../app/Clases/Usuarios';
import { UsuarioService } from './../../Service/Usuario-Service';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { MyApp } from '../../../src/app/app.component';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loading: any;
  username = '';
  email = '';
  idpersona = '';
  tipo = '';
  isLoggedIn: boolean = false;
  constructor(private Usuarios: UsuarioService, private nav: NavController, private auth: AuthService, public app: MyApp, private loadingCtrl: LoadingController) {
    if (!localStorage.getItem("token")) {
      nav.setRoot(LoginPage);
    } else {
      this.auth.getUserInfo();
      this.Usuarios.getPostLogin().subscribe(value => {
        this.Usuarios.auth(value[0]).subscribe((result) => {
          
            this.email = result[0].email;
            this.idpersona = result[0].idpersona;
            this.tipo = result[0].tipo;
          
        this.Metodos();
        })
        this.Metodos();
      })

    }
    
  }

  Metodos() {
    if (this.tipo == "administrador") {
      this.app.administrador();
    } else
      if (this.tipo == "supervisor") {
        this.app.supervisor();
      } else
        if (this.tipo == "empleado") {
          this.app.empleado();
        } else
          if (this.tipo == "suplidor") {
            this.app.suplidor();
          }
  }
  logout() {
    this.Usuarios.getPostLoginDelete(this.idpersona).subscribe((result) => {
      this.showLoader();
      localStorage.clear();
      this.loading.dismiss();
      this.nav.setRoot(LoginPage);
    })
  }
  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Authenticating...'
    });

    this.loading.present();
  }
}
