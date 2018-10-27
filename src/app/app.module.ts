import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

//RUTEO
import { RouterModule, Routes } from '@angular/router';
import { Rutas } from './Rutas/app.rutas';

//COMPONENTES CREADOS 
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { PaginaNoEncontradaComponent } from './componentes/pagina-no-encontrada/pagina-no-encontrada.component';
import { NavBarLoginComponent } from './componentes/nav-bar-login/nav-bar-login.component';
import { NavBarGeneralComponent } from './componentes/nav-bar-general/nav-bar-general.component';
import { ListadoEmpleadosComponent } from './componentes/listado-empleados/listado-empleados.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PaginaNoEncontradaComponent,
    NavBarLoginComponent,
    NavBarGeneralComponent,
    ListadoEmpleadosComponent
  ],
  imports: [
    BrowserModule,
    Rutas
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
