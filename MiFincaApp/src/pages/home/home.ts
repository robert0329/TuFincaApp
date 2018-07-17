import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { MyApp } from '../../../src/app/app.component';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username = '';
  email = '';
  idpersona = '';
  tipo = '';

  constructor(private nav: NavController, private auth: AuthService, public app: MyApp) {
    let info = this.auth.getUserInfo();
    this.username = info['name'];
    this.email = info['email'];
    this.idpersona = info['idpersona'];
    this.tipo = info['tipo'];
    this.Metodos();
  }

  Metodos() {
    if (this.tipo == "administrador") {
      this.app.administrador();
    }else
    if (this.tipo == "supervisor") {
      this.app.supervisor();
    }else
    if (this.tipo == "empleado") {
      this.app.empleado();
    }else
    if (this.tipo == "suplidor") {
      this.app.suplidor();
    }
  }
  public logout() {
    this.auth.logout().subscribe(succ => {
      this.nav.setRoot(LoginPage)
    });
  }

}
