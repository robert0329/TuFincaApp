import { Usuarios } from './../../../app/Clases/Usuarios';
import { FincaService } from './../../../Service/Finca-Service';
import { EditFincaPage } from './../../Finca-Component/edit-finca/edit-finca';
import { FincasPage } from './../Add-fincas/fincas';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../../home/home';
import { Finca } from "../../../app/Clases/Finca";
import { ModalController } from 'ionic-angular';
import { AuthService } from '../../../providers/auth-service/auth-service';
import { UsuarioService } from '../../../Service/Usuario-Service';
import { FormControl } from '@angular/forms';
/**
 * Generated class for the ListaFincasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-fincas',
  templateUrl: 'lista-fincas.html',
})
export class ListaFincasPage {
  username = '';
  email = '';
  idpersona='';
  notes: any = [];
  FincaArray: Array<Finca> = [];
  searchTerm: string = '';
  searching: any = false;
  searchControl: FormControl;
  constructor(public FincaService:FincaService,private Usuarios:UsuarioService, private auth: AuthService,public modalCtrl: ModalController,public alertCtrl: AlertController, private FincaServicio: FincaService, public navCtrl: NavController, public navParams: NavParams) {
    this.searchControl = new FormControl();
    this.Usuarios.authu().subscribe(value => {
      this.email = value[0].email;
    this.idpersona = value[0].idpersona;
    })
    this.Usuarios.authu().subscribe(value => {
      this.FincaServicio.getFincas(value[0].idpersona).subscribe(res => {
       
          this.notes = res;
        
        
      })
    })
  }
  openModal(){

  }
Modificar(data) {
  this.FincaService.AddUpdate(data).subscribe(res => {
    this.navCtrl.setRoot(ListaFincasPage);
  });
}
presentPrompt(idfinca,nombre, descripcion, idpersona) {
  let alert = this.alertCtrl.create({
    title: '¿Desea modificar esta finca!?',
    inputs: [
      {
        placeholder: 'Nombre',
        value:nombre
      },
      {
        placeholder: 'Descripcion',
        value:descripcion
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
          let dat = {idfinca: idfinca, nombre: data[0], descripcion: data[1], idpersona: idpersona}
          console.log(dat);
          this.Modificar(dat);
        }
      }
    ]
  });
  alert.present();
}
Eliminar(id) {
  let alert = this.alertCtrl.create({
    title: '¿Desea eliminar esta finca!?',
    
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
          this.FincaService.getDelete(id).subscribe(RES => {
            this.FincaService.getFinca().subscribe(res => {
              this.notes = res;
              this.navCtrl.setRoot(ListaFincasPage);
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
  addFinca() {
    this.navCtrl.setRoot(FincasPage);
  }
}
