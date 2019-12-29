import { Component, OnInit,EventEmitter } from '@angular/core';
import {AgendaService} from './agenda.service';
import { Router, ActivatedRoute } from '@angular/router';

import { Output } from '@angular/core';

@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.css']
})
export class ListaPersonasComponent implements OnInit {

  @Output() seleccionar: EventEmitter<any> = new EventEmitter();

  constructor(public agenda: AgendaService) {  


   }

  ngOnInit() {

    this.agenda.listaPersonas();
    
  }

 borrar(i:number){
   this.agenda.borrar(i);
 }

}
