import { SiembraServices } from './../../Service/Siembra-Services';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl } from '@angular/forms';
import { ModalController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-consultar-siembras',
  templateUrl: 'consultar-siembras.html',
})
export class ConsultarSiembrasPage {

  Lista: Array<any> = [];
  searchTerm: string = '';
  items: any = []
  searching: any = false;
  searchControl: FormControl;

  constructor(private alertCtrl: AlertController,public modalCtrl: ModalController, public SiembraServices: SiembraServices, public navCtrl: NavController, public navParams: NavParams) {
    this.searchControl = new FormControl();
  }
  public openModal(idfrutos, descripcion) {
    
  }
  delete(id) {
    this.SiembraServices.Delete(id).subscribe(RES => {
      this.SiembraServices.get().subscribe(res => {
        this.Lista = res;
      });
    })
  }
  OnGoBack() {
    this.navCtrl.setRoot(HomePage);
  }

  ionViewDidLoad() {
    this.SiembraServices.get().subscribe(res => {
      this.Lista = res;
      console.log(this.Lista)
    });
  }
  Modificar(data) {
    this.SiembraServices.Update(data).subscribe(res => {
      this.navCtrl.setRoot(ConsultarSiembrasPage);
    });
  }
  presentPrompt(idsiembra,idparcela, idfrutos, fecha, descripcion) {
    let alert = this.alertCtrl.create({
      title: '¿Desea modificar esta siembra!?',
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
            let dat = {idsiembra:idsiembra,idparcela:idparcela, idfrutos:idfrutos,fecha:fecha, descripcion: data[0]}
            console.log(dat);
            this.Modificar(dat);
          }
        }
      ]
    });
    alert.present();
  }
  Eliminar(idfrutos) {
    let alert = this.alertCtrl.create({
      title: '¿Desea eliminar esta siembra!?',
      
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
            this.SiembraServices.Delete(idfrutos).subscribe(RES => {
              this.SiembraServices.get().subscribe(res => {
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
