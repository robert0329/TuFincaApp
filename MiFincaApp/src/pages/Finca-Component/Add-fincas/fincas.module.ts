import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FincasPage } from './fincas';

@NgModule({
  declarations: [
    FincasPage,
  ],
  imports: [
    IonicPageModule.forChild(FincasPage),
  ],
})
export class FincasPageModule {}
