import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPersonasComponent } from './lista-personas/lista-personas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_DATE_LOCALE, MatButtonModule, MatCheckboxModule} from '@angular/material'
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { ReactiveFormsModule  } from '@angular/forms';
import { AgendaService } from './lista-personas/agenda.service';
import { PersonaDetalleComponent } from './lista-personas/persona-detalle/persona-detalle.component'

@NgModule({
  declarations: [
    AppComponent,
    ListaPersonasComponent,
    PersonaDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule 
  ],
  providers: [AgendaService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }

