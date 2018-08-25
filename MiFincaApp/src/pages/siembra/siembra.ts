import { ConsultarSiembrasPage } from './../consultar-siembras/consultar-siembras';
import { FincaService } from './../../Service/Finca-Service';
import { ParcelasServices } from './../../Service/Parcela-Service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { HomePage } from '../home/home';
import { SiembraServices } from '../../Service/Siembra-Services';
import { UsuarioService } from '../../Service/Usuario-Service';
import { CultivosServices } from '../../Service/Cultivos-Service';
import { AlertController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-siembra',
  templateUrl: 'siembra.html',
})
export class SiembraPage {
  parcela: Array<any> = [];
  frutos: Array<any> = [];
  form: FormGroup;
  constructor(private alertCtrl: AlertController, public FrutosService: CultivosServices, public FincaService: FincaService, public ParcelasServices: ParcelasServices, private Usuarios: UsuarioService, public SiembraService: SiembraServices, private fb: FormBuilder, public navCtrl: NavController, public navParams: NavParams) {
    this.form = this.fb.group({ fecha: ['', Validators.required], idfrutos: ['', Validators.required], idparcelas: ['', Validators.required], descripcion: ['', Validators.required] });

    this.Usuarios.authu().subscribe(result => {
      this.FincaService.getFincas(result[0].idpersona).subscribe(resultado => {
        resultado.forEach(element => {
          this.ParcelasServices.getParcelaIdfinca(element.idfinca).subscribe(resultado => {
            resultado.forEach(element => {
              this.parcela.push(element)
            });
          })
        });
      })
    })
    this.FrutosService.get().subscribe(resultado => {
      resultado.forEach(element => {
        this.frutos.push(element);
      });
    })
  }
  guardarSiembra() {
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
            let siembra = { idparcela: this.form.value.idparcelas, idfrutos: this.form.value.idfrutos, fecha: this.form.value.fecha, descripcion: this.form.value.descripcion };
            this.SiembraService.add(siembra).subscribe(result => {
              this.navCtrl.setRoot(ConsultarSiembrasPage);
            })
          }
        }
      ]
    });
    alert.present();


  }
  ConsultaSiembra() {
    this.navCtrl.setRoot(ConsultarSiembrasPage);
  }
  OnGoBack() {
    this.navCtrl.setRoot(HomePage);
  }
  ionViewDidLoad() {

  }

}
