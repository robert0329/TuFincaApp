import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultarCultivosPage } from './consultar-cultivos';

@NgModule({
  declarations: [
    ConsultarCultivosPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsultarCultivosPage),
  ],
})
export class ConsultarCultivosPageModule {}
