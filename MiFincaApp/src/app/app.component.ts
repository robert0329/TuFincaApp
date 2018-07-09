import { EmpleadosPage } from './../pages/empleados/empleados';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';
import { FincasPage } from '../pages/fincas/fincas';
import { CosechaPage } from '../pages/cosecha/cosecha';
import { GastosPage } from '../pages/gastos/gastos';
import { HerramientasPage } from '../pages/herramientas/herramientas';
import { MaquinariaPage } from '../pages/maquinaria/maquinaria';
import { PagosPage } from '../pages/pagos/pagos';
import { ParcelaPage } from '../pages/parcela/parcela';
import { ProductosPage } from '../pages/productos/productos';
import { SiembraPage } from '../pages/siembra/siembra';
import { SuplidorPage } from '../pages/suplidor/suplidor';
import { TareasPage } from '../pages/tareas/tareas';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Registro Fincas', component: FincasPage },
      { title: 'Registro Cosecha', component: CosechaPage },
      { title: 'Gastos', component: GastosPage },
      { title: 'Registro Herramientas', component: HerramientasPage },
      { title: 'Registro Maquinaria', component: MaquinariaPage },
      { title: 'Pagos', component: PagosPage },
      { title: 'Parcela', component: ParcelaPage },
      { title: 'Productos', component: ProductosPage },
      { title: 'Siembra', component: SiembraPage },
      { title: 'Registro Tareas', component: TareasPage },
      {title:'Suplidor', component:SuplidorPage},
      {title:'Registro Empleados', component:EmpleadosPage}
    ];

  }
  
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
