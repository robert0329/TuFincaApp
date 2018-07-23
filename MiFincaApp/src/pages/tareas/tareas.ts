import { Tareas } from './../../app/Clases/Tareas';
import { Finca } from './../../app/Clases/Finca';
import { Usuarios } from './../../app/Clases/Usuarios';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { UsuarioService } from '../../Service/Usuario-Service';
import { TareasServices } from '../../Service/Tareas-Services';
import { AuthService } from '../../providers/auth-service/auth-service';
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
export class TareasPage {
  form: FormGroup;
  Array: Array<Usuarios> = [];
  ArrayTareas: Array<Tareas> = [];
  Arrayguardar: Array<any> = [];
  idpersona = '';
  constructor(private Tareas: TareasServices,private auth: AuthService,private Usuarios: UsuarioService, private fb: FormBuilder, public navCtrl: NavController, public navParams: NavParams) {
    this.crearFormulario();
    let info = this.auth.getUserInfo();
    this.idpersona = info['idpersona'];
    this.Usuarios.getempleadoTareas("empleado").subscribe(value => {
      this.Array = value;
    });
  }

  crearFormulario() {
    this.form = this.fb.group({
      descripcion: ['', Validators.required],
      empleado: ['', Validators.required],
      finca: ['', Validators.required],
      fecha: ['', Validators.required]
    });
  }
  guardar() {
    this.Arrayguardar.forEach(element => {
      this.Tareas.addTareas(element).subscribe(result =>{
        
      })
    });
  }
  OnGoBack() {
    this.navCtrl.setRoot(HomePage);
    //this.navCtrl.popToRoot();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TareasPage');
    this.crearFormulario();

    this.Usuarios.getempleadoTareas("empleado").subscribe(value => {
      this.Array = value;
    });

    this.Tareas.getFincaTareasId(this.idpersona).subscribe(value => {
      this.ArrayTareas = value;
    });
  }
  friendFun(value, form, i) {
   
    let array1 = {idtarea: null,idpersona: value.idpersona, descripcion: form.value.descripcion,fecha: form.value.fecha, 
      finca:form.value.finca};
    this.Arrayguardar.push(array1);
    
  }

}