import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
/**
 * Generated class for the MaquinariaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maquinaria',
  templateUrl: 'maquinaria.html',
})
export class MaquinariaPage {
  form: FormGroup;

  constructor(private fb: FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
    this.crearFormulario();
  }

  crearFormulario() {
    this.form = this.fb.group({
      descripcion: ['',Validators.required],
      tipo: ['', Validators.required],
      modelo: ['', Validators.required],  
      marca: ['', Validators.required],
      finca: ['', Validators.required],
      suplidor: ['', Validators.required],
    });
  }

  Maquinaria() {
    
  }
  OnGoBack(){
    this.navCtrl.setRoot(HomePage);
    //this.navCtrl.popToRoot();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MaquinariaPage');
  }

}
