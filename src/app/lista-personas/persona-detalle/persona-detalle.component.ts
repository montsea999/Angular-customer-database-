import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { Persona } from './Persona';
import { AgendaService } from 'src/app/lista-personas/agenda.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-persona-detalle',
  templateUrl: './persona-detalle.component.html',
  styleUrls: ['./persona-detalle.component.css']
})
export class PersonaDetalleComponent implements OnInit {


 @Input('personaSeleccionada') personaSeleccionada : Persona;
 @Input('indice') indice : number;
 
 @Output() volver: EventEmitter<any> = new EventEmitter();
 

  formularioEdicion:FormGroup ;
  
  nombre: string;
  apellido: string;
  edad: number;
  dni: string;
  cumpleanyos: Date;
  colorFavorito: string;
  sexo: string;
  notas: string;  

  constructor(public agenda : AgendaService , 
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute, private router: Router) { 
   
  }

  ngOnInit() {

    console.log("init detalle");
    console.log(this.personaSeleccionada);
    console.log(this.indice);

    
    /* indicamos las validaciones de nombre, apellido y colorFavorito (más de 3 dígitos), dni (mínimo y máximo de nueve dígitos), 
    edad (entre 0 y 125), y que todos los campos sean requeridos.  */

      this.formularioEdicion = this.formBuilder.group({
        'nombre' : [null, (Validators.required, Validators.minLength(3))],
        'apellido' : [null, (Validators.required, Validators.minLength(3))],
        'edad': [null, [Validators.required, Validators.min(0), Validators.max(125)]],  
        'dni' : [null, [Validators.required, Validators.minLength(9), Validators.maxLength(9)]], 
        'cumple' : [null, Validators.required] ,
        'colorFavorito' : [null, (Validators.required, Validators.minLength(3))],
        'sexo' : [null, Validators.required],
        'notas' : [null, Validators.required]

       });
       
      this.initPersona(this.personaSeleccionada);

  }

  submit(f) {

    var personaEditada: Persona = new Persona(
      f.nombre,
      f.apellido,
      f.edad, 
      f.dni,
      f.cumple,
      f.colorFavorito,
      f.sexo,
      f.notas
    );

    this.agenda.guardar(personaEditada, this.indice);
    this.volver.emit();
  }

  initPersona(data:Persona) {
      this.formularioEdicion.setValue({
        nombre: data.getNombre(),
        apellido : data.getApellido(),
        edad : data.getEdad(),
        dni : data.getDNI(),
        cumple: data.getCumpleanyos(),
        colorFavorito : data.getColorFavorito(),
        sexo : data.getSexo(),
        notas : data.getNotas()
       });
  }
}



      
