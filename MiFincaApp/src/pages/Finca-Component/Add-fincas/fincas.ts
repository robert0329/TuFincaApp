import { HomePage } from './../../home/home';
import { UsuarioService } from './../../../Service/Usuario-Service';
import { Usuarios } from './../../../app/Clases/Usuarios';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Finca } from "../../../app/Clases/Finca";
import { FincaService } from '../../../Service/Finca-Service';
import { ListaFincasPage } from '../lista-fincas/lista-fincas';
import { AuthService } from '../../../providers/auth-service/auth-service';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the FincasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fincas',
  templateUrl: 'fincas.html',
})
export class FincasPage {
  form: FormGroup;

  finca: Finca;
  //arreglos
  FincaArray: Array<Finca> = [];
  FincaFilter: Array<Finca> = [];

  username = '';
  email = '';
  idpersona = '';

  id = '';
  nombre = '';
  descripcion = '';

  constructor(private alertCtrl: AlertController,private Usuarios: UsuarioService, public auth: AuthService, private FincaServicio: FincaService, private fb: FormBuilder, public navCtrl: NavController, public navParams: NavParams) {
    this.createMyForm();
    this.finca = new Finca();



  }
  private createMyForm() {
    this.Usuarios.authu().subscribe(result => {
      this.idpersona = result[0].idpersona;
    })

    return this.form = this.fb.group({
      id: ['0', Validators.required],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  OnGoBack() {
    this.navCtrl.setRoot(HomePage);
  }

  addFinca() {
    let alert = this.alertCtrl.create({
      title: '¿Desea guardar esta finca?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: data => {
          }
        },
        {
          text: 'Guardar',
          handler: data => {
            this.finca.nombre = this.form.value.nombre;
            this.finca.descripcion = this.form.value.descripcion;
            this.finca.idpersona = this.idpersona;
            console.log(this.finca)
            this.FincaServicio.addFinca(this.finca).subscribe(res => {
              this.navCtrl.setRoot(ListaFincasPage);
            });
          }
        }
      ]
    });
    alert.present();

  }
  listafinca() {
    this.navCtrl.setRoot(ListaFincasPage);
  }
  buscarSolicitud() {
  }
  limpiar() {
    return this.form = this.fb.group({
      id: ['0', Validators.required],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required]
    });

  }

}
