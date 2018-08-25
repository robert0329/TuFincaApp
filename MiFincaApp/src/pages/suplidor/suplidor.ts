import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { HomePage } from '../home/home';
/**
 * Generated class for the SuplidorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-suplidor',
  templateUrl: 'suplidor.html',
})
export class SuplidorPage {

  form: FormGroup;
  constructor(private fb: FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
    this.crearFormulario();
    
    
  }
  
  crearFormulario() {
    this.form = this.fb.group({
      nombre: ['',Validators.required],
      apellido: ['', Validators.required],
      direccion: ['', Validators.required],
      ciudad: ['', Validators.required],
      sector: ['', Validators.required],
      cedula: ['', Validators.required],
      telefono: ['', Validators.required],
      celular: ['', Validators.required],
      cargo: ['', Validators.required],
      salario: ['', Validators.required],
      email: ['', Validators.required],
      contraseña: ['', Validators.required],
    });
  }
 
  guardarSuplidor() {
    
  }
  OnGoBack(){
    this.navCtrl.setRoot(HomePage);
    //this.navCtrl.popToRoot();
  }

  ionViewDidLoad() {

  }

}
