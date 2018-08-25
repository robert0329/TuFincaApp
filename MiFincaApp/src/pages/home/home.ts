import { Usuarios } from './../../app/Clases/Usuarios';
import { UsuarioService } from './../../Service/Usuario-Service';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { MyApp } from '../../../src/app/app.component';
import { TareasPage } from '../tareas/tareas';
import { EmpleadosPage } from '../empleados/empleados';
import { ProductosPage } from '../productos/productos';
import { GastosPage } from '../gastos/gastos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loading: any;
  username = '';
  nombre = '';
  email = '';
  idpersona = '';
  tipo = '';
  isLoggedIn: boolean = false;
  accion: boolean = true;

  constructor(private Usuarios: UsuarioService, private nav: NavController, public app: MyApp, private loadingCtrl: LoadingController) {
    this.Usuarios.authu().subscribe(result => {
      if (!localStorage.getItem("token") || result.length < 1) {
        localStorage.clear();
        nav.setRoot(LoginPage);
      }
      else {
        this.nombre = result[0].nombre;
        this.email = result[0].email;
        this.idpersona = result[0].idpersona;
        this.tipo = result[0].tipo;
        this.Metodos();
      }
    })
  }

  TareasPage() {
    this.nav.setRoot(TareasPage);
  }

  RegistroEmpleado() {
    this.nav.setRoot(EmpleadosPage);
  }

  Productos() {
    this.nav.setRoot(ProductosPage);
  }

  Gastos() {
    this.nav.setRoot(GastosPage);
  }

  Metodos() {
    if (this.tipo == "administrador") {
      this.accion = false;
      this.app.administrador();
    } else
      if (this.tipo == "supervisor") {
        this.accion = false;
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
    this.Usuarios.getPostLoginDelete(this.email).subscribe((result) => {
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
