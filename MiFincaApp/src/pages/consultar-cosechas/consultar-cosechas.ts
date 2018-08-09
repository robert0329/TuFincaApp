
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl } from '@angular/forms';
/**
 * Generated class for the ConsultarCosechasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consultar-cosechas',
  templateUrl: 'consultar-cosechas.html',
})
export class ConsultarCosechasPage {
  Array: Array<any> = [];
  searchTerm: string = '';
  searching: any = false;
  searchControl: FormControl;
  items: Array<any> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.searchControl = new FormControl();
    this.items = [
      { title: '01/05/2016' },
      { title: '05/01/2017' },
      { title: '06/06/2018' }
    ]
  }
  ionViewDidLoad() {
  }
  public openModal() {

  }

  OnGoBack() {
    this.navCtrl.setRoot(HomePage);
  }

}
