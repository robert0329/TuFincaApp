import { ProductosServices } from './../../Service/Productos-Service';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

@IonicPage()
@Component({
  selector: 'page-consultar-productos',
  templateUrl: 'consultar-productos.html',
})
export class ConsultarProductosPage {
  Lista: Array<any> = [];
  Array: Array<any> = [];
  searchTerm: string = '';
  items: any = []
  searching: any = false;
  searchControl: FormControl;
  constructor(public ProductosServices: ProductosServices, public navCtrl: NavController, public navParams: NavParams) {
    this.searchControl = new FormControl();

  }
  Filtro() {
    this.ProductosServices.get().subscribe(value => {
      this.Array = value; var arr = {};
      for (var i = 0, len = this.Array.length; i < len; i++) 
      arr[this.Array[i]['productos']] = this.Array[i];
      this.Array = new Array();
      for (var key in arr) this.Array.push(arr[key]);
      for (let index = 0; index < this.Array.length; index++) {
        this.ProductosServices.getProducto(this.Array[index].productos).subscribe(value2 => {
          for (let index = 0; index < value2.length; index++) 
          { 
            this.Lista.push(value2[index]); 
          }
        })
      }
    })
  }
  public openModal() {

  }
  filterItems(searchTerm) {
    return this.Lista.filter((item) => {
      return item.productos.toLowerCase().indexOf(
        searchTerm.toLowerCase()) > -1;
    });
  }
  OnGoBack() {
    this.navCtrl.setRoot(HomePage);
  }

  setFilteredItems() {
    if(this.searchTerm.length > 0){
       this.Lista = this.filterItems(this.searchTerm);
    }else{
      this.Lista = [];
      this.Filtro();
    }
  }
  onSearchInput() {
    this.searching = true;
  }
  ionViewDidLoad() {
    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
      this.searching = false;
      this.setFilteredItems();
    });
    this.Filtro();
  }

}
