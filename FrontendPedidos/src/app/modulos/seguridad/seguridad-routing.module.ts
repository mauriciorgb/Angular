import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { IdentificacionComponent } from './identificacion/identificacion.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';

const routes: Routes = [
  {
    path:"identificar",
    component: IdentificacionComponent
  },
  {
    path:"registro",
    component: RegistrarseComponent
  },
  {
    path:"cerrarSesion",
    component: CerrarSesionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
