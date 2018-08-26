import { FincaService } from './../../Service/Finca-Service';
import { ParcelasServices } from './../../Service/Parcela-Service';
import { HomePage } from '../home/home';
import { UsuarioService } from './../../Service/Usuario-Service'
import { Usuarios } from './../../app/Clases/Usuarios'
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AlertController } from 'ionic-angular';
import { Parcela } from '../../app/Clases/Parcela'
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
  constructor(private alertCtrl: AlertController, public FincaService: FincaService, private Usuarios: UsuarioService, public auth: AuthService, public ParcelasServices: ParcelasServices, private fb: FormBuilder, public navCtrl: NavController, public navParams: NavParams) {
    this.crearFormulario();

    this.Usuarios.authu().subscribe(result => {
      this.FincaService.getFincas(result[0].idpersona).subscribe(resultado => {
        resultado.forEach(element => {
          this.Array.push(element);
        });
      })
    })
  }
  crearFormulario() {
    this.form = this.fb.group({
      descripcion: ['', Validators.required],
      finca: ['', Validators.required]
    });
  }

  guardarParcela() {
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
            let parcelas = { descripcion: this.form.value.descripcion, idfinca: this.form.value.finca }
            this.ParcelasServices.add(parcelas).subscribe(result => {
              this.navCtrl.setRoot(ConsultarParcelasPage);
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
  ConsultaParcela() {
    this.navCtrl.setRoot(ConsultarParcelasPage);
  }

  ionViewDidLoad() {

  }

  Limpiar() {
    return this.form = this.fb.group({
      id: ['0', Validators.required],
      descripcion: ['', Validators.required]
    })
  }
}
