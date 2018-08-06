import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
/**
 * Generated class for the HerramientasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-herramientas',
  templateUrl: 'herramientas.html',
})
export class HerramientasPage {

  form: FormGroup;
  Array: Array<any> = [];
  constructor(private fb: FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
    this.crearFormulario();
    this.Array = [
      {title: '01'}
  ]
  }
  
  crearFormulario() {
    this.form = this.fb.group({
      herramientas: ['',Validators.required],
      cantidad: ['', Validators.required],
      inventario: ['', Validators.required]
    });
  }
 
  guardar() {
    
  }
  OnGoBack(){
    this.navCtrl.setRoot(HomePage);
    //this.navCtrl.popToRoot();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HerramientasPage');
  }

}
