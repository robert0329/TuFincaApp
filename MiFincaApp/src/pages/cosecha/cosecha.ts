import { SiembraServices } from './../../Service/Siembra-Services';
import { ConsultarCosechasPage } from './../consultar-cosechas/consultar-cosechas';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CultivosServices } from '../../Service/Cultivos-Service';
import { CosechaService } from '../../Service/Cosecha-Service';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the CosechaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cosecha',
  templateUrl: 'cosecha.html',
})
export class CosechaPage {
  form: FormGroup;
  items: Array<any> = [];
  cosecha: CosechaPage
  constructor(public SiembraServices:SiembraServices, private alertCtrl: AlertController,private fb: FormBuilder,public navCtrl: NavController, public navParams: NavParams, public CosechaService: CosechaService) {
    this.crearFormulario();
    this.SiembraServices.get().subscribe(result =>{
      result.forEach(element => {
        this.items.push(element) 
      });
      
    })
  }

  crearFormulario() {
    this.form = this.fb.group({
      descripcion: ['',Validators.required],
      fecha: ['',Validators.required],
      siembra: ['',Validators.required],
      cantidad: ['',Validators.required]
    })
  }

  guardarCosecha() {
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
            let cosecha = { descripcion: this.form.value.descripcion, fecha: this.form.value.fecha, cantidad: this.form.value.cantidad, idsiembra: this.form.value.siembra };
            this.CosechaService.add(cosecha).subscribe(result => {
              this.navCtrl.setRoot(ConsultarCosechasPage);
            })
          }
        }
      ]
    });
    alert.present();
  }

  OnGoBack(){
    this.navCtrl.setRoot(HomePage);
  }
  ConsultarCosechas(){
    this.navCtrl.setRoot(ConsultarCosechasPage);
  }
  ionViewDidLoad() {
   
  }

}