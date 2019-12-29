import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListaPersonasComponent } from './lista-personas/lista-personas.component'
import {PersonaDetalleComponent } from './lista-personas/persona-detalle/persona-detalle.component'
import { AppComponent } from './app.component';


const routes: Routes = [{
  path: '',
  component: AppComponent
}, {
  path: 'detalle/:dni',
  component: PersonaDetalleComponent
}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

