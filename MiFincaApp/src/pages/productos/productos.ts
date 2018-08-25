import { InventarioServices } from './../../Service/Inventario-Services';
import { ProductosServices } from './../../Service/Productos-Service';
import { ConsultarProductosPage } from './../consultar-productos/consultar-productos';
import { Productos } from './../../app/Clases/Productos';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@IonicPage()
@Component({
  selector: 'page-productos',
  templateUrl: 'productos.html',
})
export class ProductosPage {
  producto: Array<any> = [];
  form: FormGroup;
  productos: Productos;
  constructor(public InventarioServices: InventarioServices, public ProductosServices: ProductosServices, private fb: FormBuilder, public navCtrl: NavController, public navParams: NavParams) {
    this.form = this.fb.group({
      productos: ['', Validators.required],
      descripcion: ['', Validators.required],
      cantidad: ['', Validators.required]
    });
    this.producto = [
      { title: 'Fertilizantes ', value: 1 },
      { title: 'Abono', value: 2 }]
  }
  Agregar(value) {
    let data = { idHerramientas: 0, IdMaquinaria: 0, idProductos: value }
    this.InventarioServices.add(data).subscribe(res => {
      this.navCtrl.setRoot(ConsultarProductosPage);
    })
  }
  guardarProductos() {
    this.ProductosServices.add(this.form.value).subscribe(value => { //agrega una herramienta
      this.ProductosServices.Identity().subscribe(value => { // ultimo id herramienta
        this.ProductosServices.getId(value[0].idproductos).subscribe(valor => {
     
          this.Agregar(valor[0].idproductos);
        })
      })
    })
  }
  OnGoBack() {
    this.navCtrl.setRoot(HomePage);
  }
  Consultar() {
    this.navCtrl.setRoot(ConsultarProductosPage);
  }
  ionViewDidLoad() {

  }

}
