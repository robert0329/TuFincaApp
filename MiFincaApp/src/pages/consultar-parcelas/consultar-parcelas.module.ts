import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultarParcelasPage } from './consultar-parcelas';

@NgModule({
  declarations: [
    ConsultarParcelasPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsultarParcelasPage),
  ],
})
export class ConsultarParcelasPageModule {}
