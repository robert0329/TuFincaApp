import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditFincaPage } from './edit-finca';

@NgModule({
  declarations: [
    EditFincaPage,
  ],
  imports: [
    IonicPageModule.forChild(EditFincaPage),
  ],
})
export class EditFincaPageModule {}
