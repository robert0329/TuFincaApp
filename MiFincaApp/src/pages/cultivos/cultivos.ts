import { ConsultarCultivosPage } from './../consultar-cultivos/consultar-cultivos';
import { CultivosServices } from './../../Service/Cultivos-Service';
import { Cultivos } from './../../app/Clases/Cultivos';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@IonicPage()
@Component({
  selector: 'page-cultivos',
  templateUrl: 'cultivos.html',
})
export class CultivosPage {
  form: FormGroup;
  cultivos: Cultivos;
  constructor(public CultivosServices:CultivosServices,private fb: FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
    this.form = this.fb.group({descripcion: ['', Validators.required]});
  }
  guardar() {
     this.CultivosServices.add(this.form.value).subscribe(res => {
      this.navCtrl.setRoot(ConsultarCultivosPage);
     });
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
