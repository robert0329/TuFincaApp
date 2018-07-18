import { TareasEmpleadosPage } from './../pages/tareas/tareas-empleados/tareas-empleados';
import { UsuarioService } from './../Service/Usuario-Service';

import { EditFincaPage } from './../pages/Finca-Component/edit-finca/edit-finca';

import { EmpleadosPage } from './../pages/empleados/empleados';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FincasPage } from '../pages/Finca-Component/Add-fincas/fincas';
import { CosechaPage } from '../pages/cosecha/cosecha';
import { GastosPage } from '../pages/gastos/gastos';
import { ListaFincasPage } from '../pages/Finca-Component/lista-fincas/lista-fincas';
import { HerramientasPage } from '../pages/herramientas/herramientas';
import { MaquinariaPage } from '../pages/maquinaria/maquinaria';
import { PagosPage } from '../pages/pagos/pagos';
import { ParcelaPage } from '../pages/parcela/parcela';
import { ProductosPage } from '../pages/productos/productos';
import { SiembraPage } from '../pages/siembra/siembra';
import { SuplidorPage } from '../pages/suplidor/suplidor';
import { TareasPage } from '../pages/tareas/tareas';
import { LoginPage } from './../pages/login/login';
import { SQLite } from '@ionic-native/sqlite';
import {FincaService} from '../Service/Finca-Service';
import {TareasServices} from '../Service/Tareas-Services';
import { HttpClientModule } from '@angular/common/http';
import { AuthService  } from '../providers/auth-service/auth-service';


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
    LoginPage,ListaFincasPage,EditFincaPage,TareasEmpleadosPage
    

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
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
    LoginPage,ListaFincasPage,EditFincaPage,TareasEmpleadosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FincaService,
    UsuarioService,
    TareasServices,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    SQLite
  ]
})
export class AppModule {}
