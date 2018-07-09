import { EmpleadosPage } from './../pages/empleados/empleados';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
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
import { LoginPage } from './../pages/login/login';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    
    FincasPage,
    CosechaPage,
    GastosPage,
    HerramientasPage,
    MaquinariaPage,
    PagosPage,
    ParcelaPage,
    ProductosPage,
    SiembraPage,
    SuplidorPage,
    TareasPage,
    ListPage,EmpleadosPage,
    LoginPage
    

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,FincasPage,CosechaPage,
    GastosPage,
    HerramientasPage,
    MaquinariaPage,
    PagosPage,
    ParcelaPage,
    ProductosPage,
    SiembraPage,
    SuplidorPage,
    TareasPage,EmpleadosPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
