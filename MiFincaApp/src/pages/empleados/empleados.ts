import { ConsultarEmpleadosPage } from './../consultar-empleados/consultar-empleados';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Usuarios } from '../../app/Clases/Usuarios';
import { UsuarioService } from '../../Service/Usuario-Service';
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
  constructor(public UsuarioService:UsuarioService ,private fb: FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
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
    let data = {email: this.form.value.email, contraseña: this.form.value.contraseña, nombre: this.form.value.nombre
      , apellido: this.form.value.apellido, direccion: this.form.value.direccion, 
      ciudad: this.form.value.ciudad, cedula: this.form.value.cedula, telefono: this.form.value.telefono, tipo:this.form.value.tipo}

      this.UsuarioService.addEmpleado(data).subscribe(value =>{
        this.navCtrl.setRoot(ConsultarEmpleadosPage);
    })
  }
  OnGoBack(){
    this.navCtrl.setRoot(HomePage);
    //this.navCtrl.popToRoot();
  }
  Consulta(){
    this.navCtrl.setRoot(ConsultarEmpleadosPage);
  }
  ionViewDidLoad() {
    
  }

}
