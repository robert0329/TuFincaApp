import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { FormControl } from '@angular/forms';
import { CosechaService } from '../../Service/Cosecha-Service';
/**
 * Generated class for the ConsultarCosechasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consultar-cosechas',
  templateUrl: 'consultar-cosechas.html',
})
export class ConsultarCosechasPage {
  Lista: Array<any> = [];
  searchTerm: string = '';
  searching: any = false;
  searchControl: FormControl;
  items: Array<any> = [];
  constructor(private alertCtrl: AlertController,public modalCtrl: ModalController, public CosechaService: CosechaService, public navCtrl: NavController, public navParams: NavParams) {
    this.searchControl = new FormControl();
  }
  ionViewDidLoad() {
    this.CosechaService.get().subscribe(res => {
      res.forEach(element => {
        console.log(element)
        this.Lista.push(element);
      });
      
    });
  }
  public openModal() {

  }

  delete(id) {
    this.CosechaService.Delete(id).subscribe(RES => {
      this.CosechaService.get().subscribe(res => {
        this.Lista = res;
      });
    })
  }

  Modificar(data) {
    this.CosechaService.Update(data).subscribe(res => {
      this.navCtrl.setRoot(CosechaService);
    });
  }
  presentPrompt(idCosecha, descripcion, fecha, cantidad, idsiembra) {
    let alert = this.alertCtrl.create({
      title: '¿Desea modificar este fruto!?',
      inputs: [
        {
          value:descripcion,
          placeholder: 'Descripcion'
        },
        {
          value: fecha,
          placeholder: fecha
        },
        {
          placeholder: cantidad,
          value: cantidad
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
            console.log(data)
            let dat = {idCosecha:idCosecha, Descripcion: data[0], idsiembra: idsiembra, Fecha: data[1], Cantidad: data[2]}
            console.log(dat);
            this.Modificar(dat);
          }
        }
      ]
    });
    alert.present();
  }
  Eliminar(idCosecha) {
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
            this.CosechaService.Delete(idCosecha).subscribe(RES => {
              this.CosechaService.get().subscribe(res => {
                this.Lista = res;
              });
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

}