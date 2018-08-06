import { ConsultarCosechasPage } from './../consultar-cosechas/consultar-cosechas';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
/**
 * Generated class for the CosechaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cosecha',
  templateUrl: 'cosecha.html',
})
export class CosechaPage {
  form: FormGroup;
  items: Array<any> = [];
  constructor(private fb: FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
    this.crearFormulario();
    this.items = [
      {title: 'one'},
      {title: 'two'},
      {title: 'three'},
      {title: 'four'},
      {title: 'five'},
      {title: 'six'}
  ]
  }

  crearFormulario() {
    this.form = this.fb.group({
      descripcion: ['',Validators.required],
      fecha: ['',Validators.required],
      siembra: ['',Validators.required],
      cantidad: ['',Validators.required]
    })
  }

  guardarCosecha() {

  }

  OnGoBack(){
    this.navCtrl.setRoot(HomePage);
  }
  ConsultarCosechas(){
    this.navCtrl.setRoot(ConsultarCosechasPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CosechaPage');
  }

}
