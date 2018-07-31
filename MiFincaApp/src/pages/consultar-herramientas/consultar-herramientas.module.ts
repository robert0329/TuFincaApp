import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultarHerramientasPage } from './consultar-herramientas';

@NgModule({
  declarations: [
    ConsultarHerramientasPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsultarHerramientasPage),
  ],
})
export class ConsultarHerramientasPageModule {}
