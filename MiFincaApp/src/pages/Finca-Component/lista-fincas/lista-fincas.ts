import { EditFincaPage } from './../../Finca-Component/edit-finca/edit-finca';
import { FincasPage } from './../Add-fincas/fincas';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../../home/home';
import { Finca } from "../../../app/Clases/Finca";
import { FincaService } from '../../../Service/Finca-Service';
import { ModalController } from 'ionic-angular';
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
  notes: any = [];
  FincaArray: Array<Finca> = [];

  searchTerm: string = '';
  items: any;
  searching: any = false;

  constructor(public modalCtrl: ModalController,public alertCtrl: AlertController, private FincaServicio: FincaService, public navCtrl: NavController, public navParams: NavParams) {
    this.buscarSolicitud();
    
  }
 
  public openModal(id,nombre,descripcion){
    var data = { id,nombre,descripcion };
    var modalPage = this.modalCtrl.create(EditFincaPage,data);
    modalPage.present();
}

  getVecino(id: number) {
    this.FincaServicio.getFincas(1).subscribe(res => {
      console.log(res.nombre);

    });

  }
  buscarSolicitud() {
    this.FincaServicio.getFinca().subscribe(res => {
      this.FincaArray = res;
    });
  }



  
  deleteNote(id) {
    console.log(id);
     this.FincaServicio.getDelete(id).subscribe(res => {
      this.navCtrl.setRoot(ListaFincasPage);
    });
    
  }
  ionViewDidLoad() {
    this.setFilteredItems();
    this.buscarSolicitud();
  }

  onSearchInput() {
    this.searching = true;
  }

  setFilteredItems() {
    this.items = this.FincaServicio.getFinc(this.searchTerm);
  }

  OnGoBack() {
    this.navCtrl.setRoot(HomePage);
  }
  addFinca() {
    this.navCtrl.setRoot(FincasPage);
  }
}
