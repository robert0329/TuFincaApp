import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ImagePicker } from '@ionic-native/image-picker';

/**
 * Generated class for the FincasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fincas',
  templateUrl: 'fincas.html',
})
export class FincasPage {
  form: FormGroup;
  private imageSrc: string;
  constructor(private imagePicker: ImagePicker,private fb: FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
    this.crearFormulario();
    
    
  }
  
  crearFormulario() {
    this.form = this.fb.group({
      id: ['',Validators.required],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      foto: ['', Validators.required]
    });
  }
  private openGallery (): void {
    let cameraOptions = {
      sourceType: ImagePicker.PictureSourceType.PHOTOLIBRARY,
      destinationType: Camera.DestinationType.FILE_URI,      
      quality: 100,
      targetWidth: 1000,
      targetHeight: 1000,
      encodingType: Camera.EncodingType.JPEG,      
      correctOrientation: true
    }
  
    Camera.getPicture(cameraOptions)
      .then(file_uri => this.imageSrc = file_uri, 
      err => console.log(err));   
  }
  guardarFinca() {
    
  }
  OnGoBack(){
    this.navCtrl.setRoot(HomePage);
    //this.navCtrl.popToRoot();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FincasPage');
  }

}
