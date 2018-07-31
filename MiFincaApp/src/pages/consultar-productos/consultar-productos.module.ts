import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultarProductosPage } from './consultar-productos';

@NgModule({
  declarations: [
    ConsultarProductosPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsultarProductosPage),
  ],
})
export class ConsultarProductosPageModule {}
