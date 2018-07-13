import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaFincasPage } from './lista-fincas';

@NgModule({
  declarations: [
    ListaFincasPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaFincasPage),
  ],
})
export class ListaFincasPageModule {}
