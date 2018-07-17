import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Finca } from "../../../app/Clases/Finca";
import { FincaService } from '../../../Service/Finca-Service';
import { ListaFincasPage } from '../lista-fincas/lista-fincas';
import { AuthService } from '../../../providers/auth-service/auth-service';
/**
 * Generated class for the FincasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fincas',
  templateUrl: 'fincas.html',
})
export class FincasPage {
  form: FormGroup;

  finca: Finca;
  //arreglos
  FincaArray: Array<Finca> = [];
  FincaFilter: Array<Finca> = [];

  username = '';
  email = '';
  idpersona = '';

  id = '';
  nombre = '';
  descripcion = '';

  constructor(private auth: AuthService, private FincaServicio: FincaService, private fb: FormBuilder, public navCtrl: NavController, public navParams: NavParams) {
    this.createMyForm();
    this.finca = new Finca();



  }
  private createMyForm() {
    let info = this.auth.getUserInfo();
    this.idpersona = info['idpersona'];

    return this.form = this.fb.group({
      id: ['0', Validators.required],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  OnGoBack() {
    this.navCtrl.setRoot(ListaFincasPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FincasPage');
  }

  addFinca() {
    this.finca.id = null;
    this.finca.nombre = this.form.value.nombre;
    this.finca.descripcion = this.form.value.descripcion;
    this.finca.idpersona = this.idpersona;

     this.FincaServicio.addFinca(this.finca).subscribe(res => {
      this.navCtrl.setRoot(ListaFincasPage);
     });
  }
  // getVecino(id:number) {
  //   this.FincaServicio.getFincas(1).subscribe(res => {
  //      console.log(res.nombre);

  //    });    

  //  }

  buscarSolicitud() {
    // this.FincaServicio.getFinca().subscribe(find => {
    //   this.FincaArray = find;
    //   this.FincaFilter = this.FincaArray;
    // });
  }

  //  filtrar()
  //  {
  //    this.FincaFilter = this.FincaArray.filter((veci:Finca)=>veci.nombre.includes(this.nombre));
  //    console.log(this.FincaArray);

  //  }

  limpiar() {
    return this.form = this.fb.group({
      id: ['0', Validators.required],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required]
    });

  }

}
