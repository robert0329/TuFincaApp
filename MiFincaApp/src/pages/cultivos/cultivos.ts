import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
/**
 * Generated class for the CultivosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cultivos',
  templateUrl: 'cultivos.html',
})
export class CultivosPage {

  form: FormGroup;q
  constructor(private fb: FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
    this.crearFormulario();
    
    
  }
  
  crearFormulario() {
    this.form = this.fb.group({
      tipo: ['',Validators.required],
      descripcion: ['', Validators.required]
    });
  }
 
  guardar() {
    
  }
  OnGoBack(){
    this.navCtrl.setRoot(HomePage);
    //this.navCtrl.popToRoot();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CultivosPage');
  }

}
