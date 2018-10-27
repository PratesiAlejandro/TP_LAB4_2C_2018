import { NgModule } from '@angular/core';
// importo del module principal
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../componentes/login/login.component';
import { HomeComponent } from '../componentes/home/home.component';
import { PaginaNoEncontradaComponent} from '../componentes/pagina-no-encontrada/pagina-no-encontrada.component';
import { ListadoEmpleadosComponent } from '../componentes/listado-empleados/listado-empleados.component';

// declaro donde quiero que se dirija
const MiRuteo = [
  { path: 'Login', component: LoginComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'ListaEmpleados', component: ListadoEmpleadosComponent },
  { path: '', redirectTo: '/Login', pathMatch: 'full' },
  { path: '**', component: PaginaNoEncontradaComponent }
];

@NgModule({
    imports: [
      RouterModule.forRoot(MiRuteo)
    ],
    exports: [
      RouterModule
    ]
  })
  export class Rutas { }