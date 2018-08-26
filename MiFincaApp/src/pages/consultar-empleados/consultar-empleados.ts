import { UsuarioService } from './../../Service/Usuario-Service';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, IonicPageModule } from 'ionic-angular';
import { FormControl } from '@angular/forms';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the ConsultarEmpleadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consultar-empleados',
  templateUrl: 'consultar-empleados.html',
})
export class ConsultarEmpleadosPage {

  Array: Array<any> = [];
  searchTerm: string = '';
  items: any = []
  searching: any = false;
  searchControl: FormControl;
  constructor(private alertCtrl: AlertController,public UsuarioService:UsuarioService,public navCtrl: NavController, public navParams: NavParams) {
    this.searchControl = new FormControl();
    this.cargardatos();
  }
  cargardatos(){
    this.UsuarioService.getempleado().subscribe(value =>{
      value.forEach(element => {
        this.Array.push(element);
        console.log(element)
      });
      
    })
  }
  public openModal(){
    
  }
  Modificar(data) {
    this.UsuarioService.AddUpdate(data).subscribe(res => {
      this.Array = [];
      this.cargardatos();
    });
  }
  presentPrompt(idpersona,nombre,apellido, direccion, cedula, telefono,email, contraseña, ciudad , tipo) {
    console.log(telefono);  
    let alert = this.alertCtrl.create({
      title: '¿Desea modificar este empleado!?',
      inputs: [
        {
          placeholder: 'Nombre',
          value:nombre
        },
        {
          placeholder: 'Apellido',
          value:apellido
        },
        {
          placeholder: 'Direccion',
          value:direccion
        },
        {
          placeholder: 'Cedula',
          value:cedula
        },
        {
          placeholder: 'Telefono',
          value:telefono
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
          }
        },
        {
          text: 'Modificar',
          handler: data => {
            
            let dat= {idpersona: idpersona,email: email, contraseña: contraseña, nombre: data[0]
              , apellido: data[1], direccion: data[2], 
              ciudad: ciudad, cedula: data[3], telefono: data[4], tipo:tipo}
              console.log(dat)
            this.Modificar(dat);
          }
        }
      ]
    });
    alert.present();
  }
  Eliminar(idfrutos) {
    let alert = this.alertCtrl.create({
      title: '¿Desea eliminar este empleado!?',
      
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: data => {
          }
        },
        {
          text: 'Eliminar',
          handler: data => {
            this.UsuarioService.getDelete(idfrutos).subscribe(RES => {
              this.UsuarioService.getempleado().subscribe(res => {
                this.Array = res;
              });
            })
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
