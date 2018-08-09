import { HerramientasServices } from './../../Service/Herramientas-Service';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl } from '@angular/forms';
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
  constructor(public HerramientasServices: HerramientasServices, public navCtrl: NavController, public navParams: NavParams) {
    this.searchControl = new FormControl();
  }
  public openModal() {

  }

  OnGoBack() {
    this.navCtrl.setRoot(HomePage);
  }
  ionViewDidLoad() {
    this.HerramientasServices.get().subscribe(value => {
      this.Array = value;
      var arr = {};
      for (var i = 0, len = this.Array.length; i < len; i++)
        arr[this.Array[i]['herramientas']] = this.Array[i];
      this.Array = new Array();
      for (var key in arr)
        this.Array.push(arr[key]);
      for (let index = 0; index < this.Array.length; index++) {
        this.HerramientasServices.getherra(this.Array[index].herramientas).subscribe(value2 => {
          for (let index = 0; index < value2.length; index++) {
            this.Lista.push(value2[index]);
          }
          
        })
      }
    })
  }

}
