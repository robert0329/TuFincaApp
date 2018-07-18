import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TareasEmpleadosPage } from './tareas-empleados';

@NgModule({
  declarations: [
    TareasEmpleadosPage,
  ],
  imports: [
    IonicPageModule.forChild(TareasEmpleadosPage),
  ],
})
export class TareasEmpleadosPageModule {}
