import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl } from '@angular/forms';
/**
 * Generated class for the ConsultarSiembrasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consultar-siembras',
  templateUrl: 'consultar-siembras.html',
})
export class ConsultarSiembrasPage {

  Array: Array<any> = [];
  searchTerm: string = '';
  items: any = []
  searching: any = false;
  searchControl: FormControl;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.searchControl = new FormControl();
  }
  public openModal(){
    
  }

OnGoBack() {
  this.navCtrl.setRoot(HomePage);
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultarSiembrasPage');
  }

}
