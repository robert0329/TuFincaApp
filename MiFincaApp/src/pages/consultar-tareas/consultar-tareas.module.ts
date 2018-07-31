import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultarTareasPage } from './consultar-tareas';

@NgModule({
  declarations: [
    ConsultarTareasPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsultarTareasPage),
  ],
})
export class ConsultarTareasPageModule {}
