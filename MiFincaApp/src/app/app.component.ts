import { FincasPage } from './../pages/Finca-Component/Add-fincas/fincas';

import { TareasEmpleadosPage } from './../pages/tareas/tareas-empleados/tareas-empleados';
import { EmpleadosPage } from './../pages/empleados/empleados';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { CosechaPage } from '../pages/cosecha/cosecha';
import { GastosPage } from '../pages/gastos/gastos';
import { HerramientasPage } from '../pages/herramientas/herramientas';
import { MaquinariaPage } from '../pages/maquinaria/maquinaria';
import { ParcelaPage } from '../pages/parcela/parcela';
import { ProductosPage } from '../pages/productos/productos';
import { SiembraPage } from '../pages/siembra/siembra';
import { SuplidorPage } from '../pages/suplidor/suplidor';
import { TareasPage } from '../pages/tareas/tareas';
import { CultivosPage } from '../pages/cultivos/cultivos';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  pages: Array<{ title: string, component: any }>;
  constructor(public platform: Platform,
    public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
  }
  public administrador() {
    this.pages = [
      { title: 'Home', component: HomePage },

      { title: 'Registro Finca', component: FincasPage },
      { title: 'Registro Frutos', component: CultivosPage },
      { title: 'Registro Cosecha', component: CosechaPage },

      { title: 'Registro Herramientas', component: HerramientasPage },
      // { title: 'Registro Maquinaria', component: MaquinariaPage },
      { title: 'Registro Parcela', component: ParcelaPage },
      { title: 'Registro Productos', component: ProductosPage },

      { title: 'Registro Siembra', component: SiembraPage },
      { title: 'Registro Tareas', component: TareasPage },
      // { title: 'Registro Suplidor', component: SuplidorPage },
      { title: 'Registro Empleados', component: EmpleadosPage },

      // { title: 'Consultar Cosechas', component: ConsultarCosechasPage },
      // { title: 'Consultar Cultivos', component: ConsultarCultivosPage },
      // { title: 'Consultar Empleados', component: ConsultarEmpleadosPage },
      // { title: 'Consultar Fincas', component: ConsultarFincasPage },

      // { title: 'Consultar Gastos', component: ConsultarGastosPage },
      // { title: 'Consultar Herramientas', component: ConsultarHerramientasPage },
      // { title: 'Consultar Maquinaria', component: ConsultarMaquinariaPage },
      // { title: 'Consultar Parcelas', component: ConsultarParcelasPage },

      // { title: 'Consultar Productos', component: ConsultarProductosPage },
      // { title: 'Consultar Siembras', component: ConsultarSiembrasPage },
      // { title: 'Consultar Suplidor', component: ConsultarSuplidorPage },
      // { title: 'Consultar Tareas', component: ConsultarTareasPage },
    ];
  }
  public supervisor() {
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Tareas', component: TareasPage },
      { title: 'Registro Cosecha', component: CosechaPage },
      { title: 'Registro Herramientas', component: HerramientasPage },
      { title: 'Registro Maquinaria', component: MaquinariaPage },
      { title: 'Productos', component: ProductosPage },
      { title: 'Siembra', component: SiembraPage },
      { title: 'Registro Tareas', component: TareasPage },
    ];
  }

  public empleado() {
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Tareas', component: TareasEmpleadosPage },
      // { title: 'Registro Fincas', component: FincasPage },
      // { title: 'Registro Cosecha', component: CosechaPage },
      // { title: 'Gastos', component: GastosPage },
      // { title: 'Registro Herramientas', component: HerramientasPage },
      // { title: 'Registro Maquinaria', component: MaquinariaPage },
      // { title: 'Parcela', component: ParcelaPage },
      // { title: 'Productos', component: ProductosPage },
      // { title: 'Siembra', component: SiembraPage },
      // { title: 'Registro Tareas', component: TareasPage },
      // {title:'Suplidor', component:SuplidorPage},
      //  {title:'Registro Empleados', component:EmpleadosPage},
      // {title:'Listado', component:ListaFincasPage}   
    ];
  }
  public suplidor() {
    this.pages = [
      { title: 'Home', component: HomePage },
      //  { title: 'Tareas', component: TareasPage },
      // { title: 'Registro Fincas', component: FincasPage },
      //  { title: 'Registro Cosecha', component: CosechaPage },
      // // { title: 'Gastos', component: GastosPage },
      //  { title: 'Registro Herramientas', component: HerramientasPage },
      //  { title: 'Registro Maquinaria', component: MaquinariaPage },
      // { title: 'Parcela', component: ParcelaPage },
      //  { title: 'Productos', component: ProductosPage },
      //  { title: 'Siembra', component: SiembraPage },
      //  { title: 'Registro Tareas', component: TareasPage },
      { title: 'Suplidor', component: SuplidorPage },
      //  {title:'Registro Empleados', component:EmpleadosPage},
      // {title:'Listado', component:ListaFincasPage}   
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
