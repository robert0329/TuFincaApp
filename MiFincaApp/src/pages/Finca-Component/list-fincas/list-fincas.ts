
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DbProvider } from '../../../providers/db/db';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the ListFincasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-fincas',
  templateUrl: 'list-fincas.html',
})
export class ListFincasPage {
  sitios: any;
  coords : any = { lat: 0, lng: 0 }
  address: string;
  description: string = '';
  foto: any = '';
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl : ModalController,
    public db : DbProvider,
    public alertCtrl : AlertController) {
  }

borrarSitio(id){

  let alert = this.alertCtrl.create({
    title: 'Confirmar borrado',
    message: '¿Estás seguro de que deseas eliminar este sitio?',
    buttons: [
      {
        text: 'No',
        role: 'cancel',
        handler: () => {
            // Ha respondido que no así que no hacemos nada         
         }
      },
      {
        text: 'Si',
        handler: () => {

          //   this.db.borrarSitio(id).then((res)=>{
          // // Una vez borrado el sitio recargamos el listado
          //   this.db.getSitios().then((res)=>{
          //   this.sitios = [];
          //   for(var i = 0; i < res.rows.length; i++){
          //       this.sitios.push({
          //         id : res.rows.item(i).id,
          //         lat: res.rows.item(i).lat,
          //         lng: res.rows.item(i).lng,
          //         address: res.rows.item(i).address,
          //         description: res.rows.item(i).description,
          //         foto: res.rows.item(i).foto
          //       });
          //   }

          //   },(err)=>{ /* alert('error al sacar de la bd'+err) */ })

          // },(err)=>{ /* alert('error al borrar de la bd'+err) */ });
        }
      }
    ]
  });

  alert.present();

 }
 guardarSitio(){
  let sitio = {
    lat: this.coords.lat,
    lng: this.coords.lng ,
    address: this.address,
    description: this.description,
    foto: this.foto
  }
 
}

ionViewDidEnter(){
  this.db.getSitios().then((res)=>{
 this.sitios = [];
 for(var i = 0; i < res.rows.length; i++){
     this.sitios.push({
       id: res.rows.item(i).id,
       lat: res.rows.item(i).lat,
       lng: res.rows.item(i).lng,
       address: res.rows.item(i).address,
       description: res.rows.item(i).description,
       foto: res.rows.item(i).foto
     });
 }

 },(err)=>{ /* alert('error al sacar de la bd'+err) */ })
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad ListFincasPage');
  }

}
