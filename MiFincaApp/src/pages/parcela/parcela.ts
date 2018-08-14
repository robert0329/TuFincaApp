import { HomePage } from '../home/home';
import {UsuarioService} from './../../Service/Usuario-Service'
import { Usuarios } from './../../app/Clases/Usuarios'
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { Parcela } from '../../app/Clases/Parcela'
import { ParcelasServices } from '../../Service/Parcela-Service'
import { AuthService } from '../../providers/auth-service/auth-service'
import { ConsultarParcelasPage } from '../consultar-parcelas/consultar-parcelas';
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
  parcela: Parcela;
  form: FormGroup;
  Array: Array<any> = [];
  constructor(private Usuarios: UsuarioService,public auth: AuthService, private FincaServicio: ParcelasServices, private fb: FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
    this.crearFormulario();
    this.parcela = new Parcela();
    this.Array = [
      {title: 'Don Juan'}
  ]
  }

  private createMyForm() {
    // let info = this.auth.getUserInfo();
    // this.idpersona = info['idpersona'];

    this.Usuarios.authu().subscribe(result => {
    //  this.idpersona = result[0].idpersona;
    })
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
  }
  ConsultaParcela(){
    this.navCtrl.setRoot(ConsultarParcelasPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParcelaPage');
  }

  Limpiar() {
    return this.form = this.fb.group({
      id: ['0', Validators.required],
      descripcion: ['', Validators.required]
    })
  }
}
