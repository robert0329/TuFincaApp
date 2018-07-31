import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultarEmpleadosPage } from './consultar-empleados';

@NgModule({
  declarations: [
    ConsultarEmpleadosPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsultarEmpleadosPage),
  ],
})
export class ConsultarEmpleadosPageModule {}
