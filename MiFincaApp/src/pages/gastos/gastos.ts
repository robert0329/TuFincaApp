import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { GastoService } from '../../Service/Gastos-Service';
import { FincaService } from '../../Service/Finca-Service';
import { UsuarioService } from '../../Service/Usuario-Service';
import { Gasto } from '../../app/Clases/gasto';
/**
 * Generated class for the GastosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gastos',
  templateUrl: 'gastos.html',
})
export class GastosPage {

  form: FormGroup;
  items: Array<any> = [];
  gasto: GastosPage;
  constructor(public gastos: Gasto, private alertCtrl: AlertController, private fb: FormBuilder, public navCtrl: NavController, public navParams: NavParams, public GastosService: GastoService, public FincaService: FincaService, public UsuarioService: UsuarioService) {
    this.crearFormulario();
    this.FincaService.getFinca().subscribe(result => {
      result.forEach(element => {
        this.items.push(element)
      });

    })

  }

  crearFormulario() {
    this.form = this.fb.group({
      fecha: ['', Validators.required],
      descripcion: ['', Validators.required],
      Finca: ['', Validators.required],
      Beneficiario: ['', Validators.required],
      TipoGasto: ['', Validators.required],
    });
  }
  guardarGastos() {
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
            let cosecha = { descripcion: this.form.value.descripcion, tipoGastoId: this.form.value.tipoGastoId, fincaId: this.form.value.fincaId, usuarioId: this.form.value.usuarioId };
            this.GastosService.add(this.gastos).subscribe(result => {
              this.navCtrl.setRoot(GastoService);
            })
          }
        }
      ]
    });
    alert.present();
  }
  OnGoBack() {
    this.navCtrl.setRoot(HomePage);
    //this.navCtrl.popToRoot();
  }

  ionViewDidLoad() {

  }

}
