import { ParcelasServices } from './../../Service/Parcela-Service';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl } from '@angular/forms';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the ConsultarParcelasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consultar-parcelas',
  templateUrl: 'consultar-parcelas.html',
})
export class ConsultarParcelasPage {

  Lista: Array<any> = [];
  searchTerm: string = '';
  searching: any = false;
  searchControl: FormControl;

  constructor(private alertCtrl: AlertController,public ParcelasServices:ParcelasServices, public navCtrl: NavController, public navParams: NavParams) {
    this.searchControl = new FormControl();
  }
  public openModal(){
    
  }

OnGoBack() {
  this.navCtrl.setRoot(HomePage);
}
  ionViewDidLoad() {
    this.ParcelasServices.get().subscribe(res => {
      this.Lista = res;
    });
  }
  Modificar(data) {
    this.ParcelasServices.Update(data).subscribe(res => {
      this.navCtrl.setRoot(ConsultarParcelasPage);
    });
  }
  presentPrompt(idparcela,descripcion, idfinca) {
    let alert = this.alertCtrl.create({
      title: '¿Desea modificar esta parcela!?',
      inputs: [
        {
          placeholder: 'Descripcion',
          value:descripcion
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
          }
        },
        {
          text: 'Modificar',
          handler: data => {
            let dat = {idparcelas:idparcela, descripcion: data[0], idfinca:idfinca}
            console.log(dat);
            this.Modificar(dat);
          }
        }
      ]
    });
    alert.present();
  }
  Eliminar(idparcela) {
    let alert = this.alertCtrl.create({
      title: '¿Desea eliminar esta parcela!?',
      
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: data => {
          }
        },
        {
          text: 'Eliminar',
          handler: data => {
            this.ParcelasServices.Delete(idparcela).subscribe(RES => {
              this.ParcelasServices.get().subscribe(res => {
                this.Lista = res;
              });
            })
          }
        }
      ]
    });
    alert.present();
  }
}
