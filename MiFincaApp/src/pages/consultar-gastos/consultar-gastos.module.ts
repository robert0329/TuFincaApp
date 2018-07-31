import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultarGastosPage } from './consultar-gastos';

@NgModule({
  declarations: [
    ConsultarGastosPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsultarGastosPage),
  ],
})
export class ConsultarGastosPageModule {}
