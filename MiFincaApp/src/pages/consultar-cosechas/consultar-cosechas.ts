import { FincaService } from './../../Service/Finca-Service';
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
  items: any = []
  searching: any = false;
  searchControl: FormControl;
  constructor(public navCtrl: NavController, public navParams: NavParams,public FincaService:FincaService) {
    this.searchControl = new FormControl();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultarCosechasPage');
  }
  public openModal(){
    
    }

  OnGoBack() {
    this.navCtrl.setRoot(HomePage);
  }

}
