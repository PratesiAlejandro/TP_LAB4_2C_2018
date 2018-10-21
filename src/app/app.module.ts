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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PaginaNoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    Rutas
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
