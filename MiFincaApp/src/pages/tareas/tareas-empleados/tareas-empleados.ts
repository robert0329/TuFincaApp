import { Finca } from './../../../app/Clases/Finca';
import { HomePage } from './../../home/home';
import { Tareas } from './../../../app/Clases/Tareas';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TareasServices } from '../../../Service/Tareas-Services';
import { AuthService } from '../../../providers/auth-service/auth-service';
/**
 * Generated class for the TareasEmpleadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tareas-empleados',
  templateUrl: 'tareas-empleados.html',
})
export class TareasEmpleadosPage {
  Array: Array<any> = [];
  idpersona ='';
  

  constructor(private Tareas: TareasServices,private auth: AuthService,public navCtrl: NavController, public navParams: NavParams) {
    let info = this.auth.getUserInfo();
    this.idpersona = info['idpersona'];

    this.Tareas.getTareasId(this.idpersona).subscribe(value => {
      value.forEach(element => {
        if(element.activa == "true"){
          this.Array.push(element);
        }else
        {
  
        }    
      });
      
    });
  }
  public openModal(idtarea,finca,fecha,descripcion,idpersona){
    var data = { idtarea:idtarea, finca:finca,descripcion:descripcion,fecha:fecha,idpersona:this.idpersona, activa:"false" };
    this.Tareas.Update(data).subscribe(res => {
     
    });
}
  OnGoBack() {
    this.navCtrl.setRoot(HomePage);
  }
  ionViewDidLoad() {
    // console.log('ionViewDidLoad TareasEmpleadosPage');
  }

}
