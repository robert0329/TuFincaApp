import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MaquinariaPage } from './maquinaria';

@NgModule({
  declarations: [
    MaquinariaPage,
  ],
  imports: [
    IonicPageModule.forChild(MaquinariaPage),
  ],
})
export class MaquinariaPageModule {}
