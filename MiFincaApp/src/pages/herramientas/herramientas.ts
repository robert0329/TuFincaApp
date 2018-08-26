import { Herramientas } from './../../app/Clases/Herramientas';
import { AlertController } from 'ionic-angular';
import { HerramientasServices } from './../../Service/Herramientas-Service';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Usuarios } from '../../app/Clases/Usuarios';
import { ConsultarHerramientasPage } from '../consultar-herramientas/consultar-herramientas';
import { InventarioServices } from '../../Service/Inventario-Services';
import { Inventario } from '../../app/Clases/Inventario';
import { empty } from '../../../node_modules/rxjs/observable/empty';
import { updateDate } from '../../../node_modules/ionic-angular/umd/util/datetime-util';
/**
 * Generated class for the HerramientasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-herramientas',
  templateUrl: 'herramientas.html',
})
export class HerramientasPage {
  inventario: Inventario;
  form: FormGroup;
  Array: Array<any> = [];
  Suplidor: Array<Usuarios> = [];
  h: any;
  s: any;
  constructor(private alertCtrl: AlertController, public InventarioServices: InventarioServices, public HerramientasServices: HerramientasServices, private fb: FormBuilder, public navCtrl: NavController, public navParams: NavParams) {
    this.form = this.fb.group({
      herramientas: ['', Validators.required],
      cantidad: ['', Validators.required],
      suplidor: ['', Validators.required]
    });

    this.h = [
      { title: 'Martillo', value: 1 },
      { title: 'Pala', value: 2 },
      { title: 'Escoba', value: 3 },
      { title: 'Desarmador', value: 4 }]

    this.s = [
      { title: 'Jose perez', value: 1 },
      { title: 'Manuel jerez', value: 2 },
      { title: 'Enmanuel lopez', value: 3 },
      { title: 'Anazario lara', value: 4 }]
  }

  Agregar(value) {
    let data = {
      idHerramientas: value,
      IdMaquinaria: 0,
      IdProducto: 0
    }
    this.InventarioServices.add(data).subscribe(res => {
      this.navCtrl.setRoot(ConsultarHerramientasPage);
    })
  }
  guardar() {
    let alert = this.alertCtrl.create({
      title: '¿Desea guardar este registro!?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: data => {
          }
        },
        {
          text: 'Guardar',
          handler: data => {
            this.HerramientasServices.add(this.form.value).subscribe(value => { //agrega una herramienta
              this.HerramientasServices.Identity().subscribe(value => { // ultimo id herramienta
                this.HerramientasServices.getId(value[0].idherramientas).subscribe(valor => {
                  this.Agregar(valor[0].idherramientas);
                })
              })
            })
          }
        }
      ]
    });
    alert.present();
  }
  OnGoBack() {
    this.navCtrl.setRoot(HomePage);
  }
  Consultar() {
    this.navCtrl.setRoot(ConsultarHerramientasPage);
  }
  ionViewDidLoad() {

  }

}
