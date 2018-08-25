import { UsuarioService } from './../../../Service/Usuario-Service';
import { HomePage } from './../../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TareasServices } from '../../../Service/Tareas-Services';
import { ViewChild } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { Content } from 'ionic-angular';
/**
 * Generated class for the TareasEmpleadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tareas-empleados',
  templateUrl: 'tareas-empleados.html',
})
export class TareasEmpleadosPage {
  incompleta: Array<any> = [];
  completa: Array<any> = [];
  idpersona = '';
  pet: string = "puppies";
  @ViewChild(Content) content: Content;

  constructor(private alertCtrl: AlertController,private Usuarios: UsuarioService, private Tareas: TareasServices, public navCtrl: NavController, public navParams: NavParams) {
    this.ActualizarPage();
  }
  ActualizarPage() {
    this.incompleta = [];
    this.completa = [];
    this.Usuarios.authu().subscribe(result => {
      this.idpersona = result[0].idpersona;
      this.Tareas.getTareasId(result[0].idpersona).subscribe(value => {
        value.forEach(element => {
          if (element.activa == "Incompleta") {
            this.incompleta.push(element);
          } else {
            this.completa.push(element);
          }
        });
      });
    })
  }
  openModal(idtarea, finca, descripcion, fecha) {
    let alert = this.alertCtrl.create({
      title: '¿Completo usted esta tarea!?',

      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: data => {
          }
        },
        {
          text: 'Si',
          handler: dataa => {
            this.incompleta = [];
            this.completa = [];
            var data = { idtarea: idtarea, finca: finca, descripcion: descripcion, fecha: fecha, idpersona: this.idpersona, activa: "Completa" };
            this.Tareas.Update(data).subscribe(res => {
              this.Tareas.getTareasId(this.idpersona).subscribe(value => {
                value.forEach(element => {
                  if (element.activa == "Incompleta") {
                    this.incompleta.push(element);
                  } else {
                    this.completa.push(element);
                  }
                });
              });
            });
          }
        }
      ]
    });
    alert.present();
  }
  OnGoBack() {
    this.navCtrl.setRoot(HomePage);
  }
  ionViewDidLoad() {
  }

}
