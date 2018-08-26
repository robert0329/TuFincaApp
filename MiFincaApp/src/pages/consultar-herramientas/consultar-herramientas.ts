import { HerramientasServices } from './../../Service/Herramientas-Service';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the ConsultarHerramientasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consultar-herramientas',
  templateUrl: 'consultar-herramientas.html',
})
export class ConsultarHerramientasPage {
  Lista: Array<any> = [];
  Array: Array<any> = [];
  searchTerm: string = '';
  items: any = []
  searching: any = false;
  searchControl: FormControl;
  constructor(private alertCtrl: AlertController, public HerramientasServices: HerramientasServices, public navCtrl: NavController, public navParams: NavParams) {
    this.searchControl = new FormControl();
  }
  Filtro() {
    this.HerramientasServices.get().subscribe(value => {
      this.Array = value; var arr = {};
      for (var i = 0, len = this.Array.length; i < len; i++) arr[this.Array[i]['herramientas']] = this.Array[i];
      this.Array = new Array();
      for (var key in arr) this.Array.push(arr[key]);
      for (let index = 0; index < this.Array.length; index++) {
        this.HerramientasServices.getherra(this.Array[index].herramientas).subscribe(value2 => {
          for (let index = 0; index < value2.length; index++) { 
            this.Lista.push(value2[index]); 
            console.log(this.Lista)
          }
        })
      }
    })
  }
  public openModal() {

  }
  filterItems(searchTerm) {
    return this.Lista.filter((item) => {
      return item.herramientas.toLowerCase().indexOf(
        searchTerm.toLowerCase()) > -1;
    });
  }
  OnGoBack() {
    this.navCtrl.setRoot(HomePage);
  }

  setFilteredItems() {
    if (this.searchTerm.length > 0) {
      this.Lista = this.filterItems(this.searchTerm);
    } else {
      this.Lista = [];
      this.Filtro();
    }
  }
  Modificar(data) {
    this.HerramientasServices.Update(data).subscribe(res => {
      this.navCtrl.setRoot(ConsultarHerramientasPage);
    });
  }
  presentPrompt(idherramientas, herramientas, cantidad, suplidor) {
    let alert = this.alertCtrl.create({
      title: '¿Desea modificar esta herramienta!?',
      inputs: [
        {
          placeholder: 'Herramienta',
          value: herramientas,
          disabled:true
        },
        {
          placeholder: 'Cantidad',
          value: cantidad
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
            let dat = { idherramientas: idherramientas, herramientas: data[0], cantidad: data[1], suplidor: suplidor }
           console.log(dat);
            this.Modificar(dat);
          }
        }
      ]
    });
    alert.present();
  }
  Eliminar(idfrutos) {
    let alert = this.alertCtrl.create({
      title: '¿Desea eliminar esta herramienta!?',

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
            this.HerramientasServices.Delete(idfrutos).subscribe(RES => {
              this.HerramientasServices.get().subscribe(res => {
                this.Lista = res;
              });
            })
          }
        }
      ]
    });
    alert.present();
  }
  onSearchInput() {
    this.searching = true;
  }
  ionViewDidLoad() {
    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
      this.searching = false;
      this.setFilteredItems();
    });
    this.Filtro();
  }
}
