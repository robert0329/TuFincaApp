import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Finca } from "../../../app/Clases/Finca";
import { FincaService } from '../../../Service/Finca-Service';
import { ListaFincasPage } from '../lista-fincas/lista-fincas';
/**
 * Generated class for the FincasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fincas',
  templateUrl: 'fincas.html',
})
export class FincasPage {
  form: FormGroup;

  finca: Finca;
  //arreglos
  FincaArray: Array<Finca> = [];
  FincaFilter: Array<Finca> = [];
  nombre: string = '';
  dess: string = '';

  constructor(private FincaServicio: FincaService, private fb: FormBuilder, public navCtrl: NavController, public navParams: NavParams) {
    this.createMyForm();
    this.finca = new Finca();

  }
  private createMyForm() {
    return this.form = this.fb.group({
      id: ['0', Validators.required],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }
  
  OnGoBack() {
    this.navCtrl.setRoot(ListaFincasPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FincasPage');
  }

  addFinca() {
     this.FincaServicio.addFinca(this.form.value).subscribe(res => {
       console.log(res);
     });
    this.limpiar();
    this.navCtrl.setRoot(ListaFincasPage);
  }
  getVecino(id:number) {
    this.FincaServicio.getFincas(1).subscribe(res => {
       console.log(res.nombre);
       
     });    
     
   }
 
   buscarSolicitud()
   {
     this.FincaServicio.getFinca().subscribe(find=>{
       this.FincaArray=find;
       this.FincaFilter=this.FincaArray;
     });
   }
 
   filtrar()
   {
     this.FincaFilter = this.FincaArray.filter((veci:Finca)=>veci.nombre.includes(this.nombre));
     console.log(this.FincaArray);
 
   }
 
   limpiar()
   {
    return this.form = this.fb.group({
      id: ['0', Validators.required],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
    
   }

}
