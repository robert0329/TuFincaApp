import { FincaService } from './../../Service/Finca-Service';
import { ParcelasServices } from './../../Service/Parcela-Service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { HomePage } from '../home/home';
import { SiembraServices } from '../../Service/Siembra-Services';
import { UsuarioService } from '../../Service/Usuario-Service';
import { CultivosServices } from '../../Service/Cultivos-Service';

@IonicPage()
@Component({
  selector: 'page-siembra',
  templateUrl: 'siembra.html',
})
export class SiembraPage {
  parcela: Array<any> = [];
  frutos: Array<any> = [];
  form: FormGroup;
  constructor(public FrutosService: CultivosServices,  public FincaService: FincaService, public ParcelasServices: ParcelasServices, private Usuarios: UsuarioService, public SiembraService: SiembraServices, private fb: FormBuilder, public navCtrl: NavController, public navParams: NavParams) {
    this.form = this.fb.group({ fecha: ['', Validators.required], idfrutos: ['', Validators.required], idparcelas: ['', Validators.required], descripcion: ['', Validators.required] });

    this.Usuarios.authu().subscribe(result => {
      this.FincaService.getFincas(result[0].idpersona).subscribe(resultado => {
        resultado.forEach(element => {
          this.ParcelasServices.getParcelaIdfinca(element.idfinca).subscribe(resultado => {
            resultado.forEach(element => {
              this.parcela.push(element)
            });        
          })
        });
      })
    })
    this.FrutosService.get().subscribe(resultado =>{
      resultado.forEach(element => {
        this.frutos.push(element);
      });
    })

  }
  guardarSiembra() {
    
    let siembra = { idparcela: this.form.value.idparcelas, idfrutos: this.form.value.idfrutos, fecha: this.form.value.fecha, descripcion: this.form.value.descripcion };

    // this.SiembraService.add(siembra).subscribe(result => {
    // })
  }
  OnGoBack() {
    this.navCtrl.setRoot(HomePage);
  }
  ionViewDidLoad() {

  }

}
