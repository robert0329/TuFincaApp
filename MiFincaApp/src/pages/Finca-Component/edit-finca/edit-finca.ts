import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { FormGroup, Validators,FormBuilder} from '@angular/forms';
import { FincaService } from '../../../Service/Finca-Service';
import { ListaFincasPage } from '../lista-fincas/lista-fincas';
/**
 * Generated class for the EditFincaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-finca',
  templateUrl: 'edit-finca.html',
})
export class EditFincaPage {

  form: FormGroup;
  nombre: string;
  id: string; 
  descripcion: string;

  constructor(private FincaServicio: FincaService,public viewCtrl: ViewController, 
    public navCtrl: NavController, public navParams: NavParams,private fb: FormBuilder,) {

      this.Formulario();
      console.log(this.navParams.data);
    this.nombre = this.navParams.data.nombre;
    this.descripcion = this.navParams.data.descripcion;
    this.id = this.navParams.data.id;
  }

  Formulario(){
    this.form = this.fb.group({
      id: ['', Validators.required],
        nombre: ['', Validators.required],
        descripcion: ['', Validators.required],
    });
  }
  closeModal() {
    this.viewCtrl.dismiss();
  }
  ionViewDidLoad() {
    
  }
  Modificar() {
    this.FincaServicio.AddUpdate(this.form.value).subscribe(res => {
      this.viewCtrl.dismiss();
      this.navCtrl.setRoot(ListaFincasPage);
    });
   //this.limpiar();
  }
}
