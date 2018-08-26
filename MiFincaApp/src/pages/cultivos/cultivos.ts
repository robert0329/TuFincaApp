import { ConsultarCultivosPage } from './../consultar-cultivos/consultar-cultivos';
import { CultivosServices } from './../../Service/Cultivos-Service';
import { Cultivos } from './../../app/Clases/Cultivos';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AlertController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-cultivos',
  templateUrl: 'cultivos.html',
})
export class CultivosPage {
  form: FormGroup;
  cultivos: Cultivos;
  constructor(private alertCtrl: AlertController,public CultivosServices:CultivosServices,private fb: FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
    this.form = this.fb.group({descripcion: ['', Validators.required]});
  }
  guardar() {
    let alert = this.alertCtrl.create({
      title: '¿Desea guardar este fruto?',
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
            this.CultivosServices.add(this.form.value).subscribe(res => {
              this.navCtrl.setRoot(ConsultarCultivosPage);
            });
          }
        }
      ]
    });
    alert.present();
     
  }
  OnGoBack(){
    this.navCtrl.setRoot(HomePage);
  }
  Consultar(){
    this.navCtrl.setRoot(ConsultarCultivosPage);
  }
  ionViewDidLoad() {
    
  }
}
