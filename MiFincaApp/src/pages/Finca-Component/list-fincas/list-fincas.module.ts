import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListFincasPage } from './list-fincas';

@NgModule({
  declarations: [
    ListFincasPage,
  ],
  imports: [
    IonicPageModule.forChild(ListFincasPage),
  ],
})
export class ListFincasPageModule {}
