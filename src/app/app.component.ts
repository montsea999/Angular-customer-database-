import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Persona } from './lista-personas/persona-detalle/Persona';
import { AgendaService } from './lista-personas/agenda.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MontserratApp';
  personaSeleccionada: Persona;
  indice:number;
  constructor(private router: Router, private activatedRoute: ActivatedRoute,public agenda : AgendaService) {

   }

   ngOnInit(){
     this.router.routeReuseStrategy.shouldReuseRoute = () => false;

   }
  
  seleccionar(indice:number) {
  
   this.indice = indice;
    this.personaSeleccionada = this.agenda.listaPersonas()[indice];
    this.router.navigate([ 'detalle', this.personaSeleccionada.getDNI()]);
  }

  add() {

    this.indice = -1;
     this.personaSeleccionada = new Persona('','',0,'',null,'','','');
     this.router.navigate([ 'detalle', 'nueva']);
   }

  volver(){
    this.personaSeleccionada = null;
    this.router.navigate([ '']);
  }
}
