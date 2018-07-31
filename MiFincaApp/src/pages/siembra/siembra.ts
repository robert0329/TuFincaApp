import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { HomePage } from '../home/home';
/**
 * Generated class for the SiembraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-siembra',
  templateUrl: 'siembra.html',
})
export class SiembraPage {

  form: FormGroup;
  constructor(private fb: FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
    this.crearFormulario();
    
    
  }
  
  crearFormulario() {
    this.form = this.fb.group({
      
      fecha: ['', Validators.required],
      frutos: ['', Validators.required],
      parcela: ['', Validators.required],
      descripcion: ['',Validators.required]
    });
  }
 
  guardarSiembra() {
    
  }
  OnGoBack(){
    this.navCtrl.setRoot(HomePage);
    //this.navCtrl.popToRoot();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SiembraPage');
  }

}
