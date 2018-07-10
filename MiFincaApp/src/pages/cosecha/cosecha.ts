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

  constructor(private fb: FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
    this.crearFormulario();
  }

  crearFormulario() {
    this.form = this.fb.group({
      id: ['',Validators.required],
      descripcion: ['',Validators.required],
      fecha: ['',Validators.required],
      idsiembra: ['',Validators.required],
      cantidad: ['',Validators.required]
    })
  }

  guardarCosecha() {

  }

  OnGoBack(){
    this.navCtrl.setRoot(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CosechaPage');
  }

}
