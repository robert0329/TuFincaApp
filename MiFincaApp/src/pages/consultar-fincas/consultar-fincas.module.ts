import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultarFincasPage } from './consultar-fincas';

@NgModule({
  declarations: [
    ConsultarFincasPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsultarFincasPage),
  ],
})
export class ConsultarFincasPageModule {}
