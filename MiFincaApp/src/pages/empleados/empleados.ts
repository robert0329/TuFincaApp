import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
/**
 * Generated class for the EmpleadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-empleados',
  templateUrl: 'empleados.html',
})
export class EmpleadosPage {
  ciudad: Array<any> = [];
  tipo: Array<any> = [];
  form: FormGroup;q
  constructor(private fb: FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
    this.crearFormulario();
    this.ciudad = [
      {title: 'Santiago de los caballeros'},
      {title: 'Nagua'},
      {title: 'San francisco de macoris'},
      {title: 'Santo domingo'},
      {title: 'Bonao'},
      {title: 'Higuey'}
  ]
  this.tipo = [
    {title: 'Administrador'},
    {title: 'Encargado'},
    {title: 'Empleado'},
    {title: 'Suplidor'}
]
    
  }
  
  crearFormulario() {
    this.form = this.fb.group({
      nombre: ['',Validators.required],
      apellido: ['', Validators.required],
      direccion: ['', Validators.required],
      ciudad: ['', Validators.required],
      cedula: ['', Validators.required],
      telefono: ['', Validators.required],
      tipo: ['', Validators.required],
      email: ['', Validators.required],
      contraseña: ['', Validators.required],
    });
  }
 
  guardar() {
    
  }
  OnGoBack(){
    this.navCtrl.setRoot(HomePage);
    //this.navCtrl.popToRoot();
  }
  ionViewDidLoad() {
    
  }

}
