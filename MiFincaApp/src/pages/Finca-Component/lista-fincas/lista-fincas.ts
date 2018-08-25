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

  constructor(private Usuarios:UsuarioService, private auth: AuthService,public modalCtrl: ModalController,public alertCtrl: AlertController, private FincaServicio: FincaService, public navCtrl: NavController, public navParams: NavParams) {
    this.Usuarios.authu().subscribe(value => {
      this.email = value[0].email;
    this.idpersona = value[0].idpersona;
    })
    // let info = this.auth.getUserInfo();
  
    // this.email = info['email'];
    // this.idpersona = info['idpersona'];
  }
 
  public openModal(id,nombre,descripcion){
    var data = { id,nombre,descripcion };
    var modalPage = this.modalCtrl.create(EditFincaPage,data);
    modalPage.present();
}

  getVecino(id: number) {
    // this.FincaServicio.getFincas().subscribe(res => {
   

    // });

  }
  buscarSolicitud() {
    this.FincaServicio.getFincas(this.idpersona).subscribe(res => {
      this.notes = res;
    });
  }

  deleteNote(id) {
     this.FincaServicio.getDelete(id).subscribe(res => {
      this.navCtrl.setRoot(ListaFincasPage);
    });
  }
  ionViewDidLoad() {
    this.Usuarios.authu().subscribe(value => {
      this.FincaServicio.getFincas(value[0].idpersona).subscribe(res => {
        this.notes = res;
      })
    })
  }

  OnGoBack() {
    this.navCtrl.setRoot(HomePage);
  }
  addFinca() {
    this.navCtrl.setRoot(FincasPage);
  }
}
