
import { Finca } from './../../app/Clases/Finca';
import { Usuarios } from './../../app/Clases/Usuarios';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { UsuarioService } from '../../Service/Usuario-Service';
import { TareasServices } from '../../Service/Tareas-Services';
import { LoginPage } from '../login/login';
import { Injectable } from '@angular/core';
/**
 * Generated class for the TareasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tareas',
  templateUrl: 'tareas.html',
})
@Injectable()
export class TareasPage {

  form: FormGroup;
  Array: Array<Usuarios> = [];
  idp: Array<Usuarios> = [];
  ArrayTareas: Array<Finca> = [];
  Guardar: Array<any> = [];
  idpersona = '';
  isExists: boolean = false;
  myDate: String = new Date().toISOString();

  constructor(public formBuilder: FormBuilder,private Tareas: TareasServices, private Usuarios: UsuarioService, private fb: FormBuilder, public navCtrl: NavController, public navParams: NavParams) {
    
    if (!localStorage.getItem("token")) {
      navCtrl.setRoot(LoginPage);
    }
    this.crearFormulario();
  }
  crearFormulario() {
    this.form = this.fb.group({
      descripcion: ['', Validators.required],
      empleado: ['', Validators.required],
      finca: ['', Validators.required],
      fecha: ['', Validators.required]
    });
  }
  EmpleadoSeach(line:string){
    this.Usuarios.getempleadoTareas(line).subscribe(value => {
      this.Array = value;
    });
  }
  changeSelect(line: string) {
    this.Guardar = [];
    for (let index = 0; index < line.length; index++) {
      const element = line[index];
      if (element['idpersona'] == line[index]) {
        this.isExists = true;
      }
      if (!this.isExists) {
        this.Guardar.push(element);
      }
    }
  }
  guardar(value) {
    this.Guardar.forEach(element => {
      let arreglo = { idtarea: null, idpersona: element, descripcion: value.value.descripcion, fecha: value.value.fecha, finca: value.value.finca, activa: "Incompleta" };
      this.Tareas.addTareas(arreglo).subscribe(result => {
      })
    });
  }

  OnGoBack() {
    this.navCtrl.setRoot(HomePage);
  }
  ionViewDidLoad() {
    this.crearFormulario();
    this.Usuarios.authu().subscribe(result => {
      this.Tareas.getFincaTareasId(result[0].idpersona).subscribe(value => {
        this.ArrayTareas = value;
      });
    })
    
  }
}