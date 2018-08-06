import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { HomePage } from '../home/home';
/**
 * Generated class for the ParcelaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parcela',
  templateUrl: 'parcela.html',
})
export class ParcelaPage {

  form: FormGroup;
  Array: Array<any> = [];
  constructor(private fb: FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
    this.crearFormulario();
    this.Array = [
      {title: 'Don Juan'}
  ]
  }
  crearFormulario() {
    this.form = this.fb.group({
      descripcion: ['',Validators.required],
      finca: ['', Validators.required]
    });
  }
 
  guardarParcela() {
    
  }
  OnGoBack(){
    this.navCtrl.setRoot(HomePage);
    //this.navCtrl.popToRoot();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParcelaPage');
  }

}
