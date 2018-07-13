import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../../home/home';
import { Finca } from "../../../app/Clases/Finca";
import { FincaService } from '../../../Service/Finca-Service';
import { FincasPage } from '../Add-fincas/fincas';
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

  constructor(public alertCtrl: AlertController, private FincaServicio: FincaService, public navCtrl: NavController, public navParams: NavParams) {
    this.buscarSolicitud();
    
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

  editNote(note) {
console.log(note.id);
    let prompt = this.alertCtrl.create({
      title: 'Edit Note',
      inputs: [{
        name: 'title'
      }],
      
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: data => {
            let index = this.notes.indexOf(note);

            if (index > -1) {
              this.notes[index] = data;
            }
          }
        }
      ]
    });

    prompt.present();

  }

  
  deleteNote(id) {
    console.log(id);
     this.FincaServicio.getDelete(id).subscribe(res => {
      this.navCtrl.setRoot(ListaFincasPage);
    });
    
  }
  ionViewDidLoad() {
    this.setFilteredItems();
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
