import { Injectable } from '@angular/core';
import { Persona } from './persona-detalle/Persona';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  public personas: Persona[] = [];

  constructor() {

    this.personas.push(new Persona(" PEPE ", " GARCIA ", 30, "66555658D", new Date("11/12/1987"), "AZUL", "HOMBRE",
      "AMANTE DE LOS ANIMALES"));

    this.personas.push(new Persona(" MARIA ", " GARCIA ", 30, "54545454J", new Date("12/06/1987"), "VERDE", "MUJER",
      "ES VIDEOGAMER"));
    this.personas.push(new Persona(" ANA ", " GARCIA ", 30, "38255418J", new Date("10/02/1987"), "NEGRO", "MUJER",
      "LE GUSTA LA POESÍA"));

  }

  public guardar(persona: Persona, index: number) {
    if (index < 0) {
      console.log("añadimos");
      this.personas.push(persona);

    } else {
      console.log("editamos: " + persona);
      this.personas[index] = persona;
    }
  }

  public borrar(index: number) {
    console.log("borramos" + index);
    this.personas.splice(index,1);
  }

  public listaPersonas(): Persona[] {
    return this.personas;
  }

  public getPersonaPorDNI(dni: string): Observable<Persona> {
    return of(this.personas.filter((persona: Persona) => { if (dni == persona.getDNI()) return persona })[0]);
  }
}
