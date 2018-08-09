import { CultivosServices } from './../../Service/Cultivos-Service';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl } from '@angular/forms';
import { ModalController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-consultar-cultivos',
  templateUrl: 'consultar-cultivos.html',
})
export class ConsultarCultivosPage {

  Lista: Array<any> = [];
  searchTerm: string = '';
  items: any = []
  searching: any = false;
  searchControl: FormControl;

  constructor(private alertCtrl: AlertController,public modalCtrl: ModalController, public CultivosServices: CultivosServices, public navCtrl: NavController, public navParams: NavParams) {
    this.searchControl = new FormControl();
  }
  public openModal(idfrutos, descripcion) {
    
  }
  delete(id) {
    this.CultivosServices.Delete(id).subscribe(RES => {
      this.CultivosServices.get().subscribe(res => {
        this.Lista = res;
      });
    })
  }
  OnGoBack() {
    this.navCtrl.setRoot(HomePage);
  }

  ionViewDidLoad() {
    this.CultivosServices.get().subscribe(res => {
      this.Lista = res;
    });
  }
  Modificar(data) {
    this.CultivosServices.Update(data).subscribe(res => {
      this.navCtrl.setRoot(ConsultarCultivosPage);
    });
  }
  presentPrompt(idfrutos, descripcion) {
    let alert = this.alertCtrl.create({
      title: '¿Desea modificar este fruto!?',
      inputs: [
        {
          value:descripcion,
          placeholder: 'Descripcion'
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
            let dat = {idfrutos:idfrutos, descripcion: data[0]}
            this.Modificar(dat);
          }
        }
      ]
    });
    alert.present();
  }
  Eliminar(idfrutos) {
    let alert = this.alertCtrl.create({
      title: '¿Desea eliminar este fruto!?',
      
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
            this.CultivosServices.Delete(idfrutos).subscribe(RES => {
              this.CultivosServices.get().subscribe(res => {
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
