import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CursosService } from "./cursos.service";
import { NuevoProfesorComponent } from './nuevo-profesor/nuevo-profesor.component';
import { NuevoCursoComponent } from './nuevo-curso/nuevo-curso.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [NuevoProfesorComponent, NuevoCursoComponent, ListadoComponent],
  providers:[
    CursosService
  ],
  exports: [
    NuevoProfesorComponent,
    NuevoCursoComponent,
    ListadoComponent
  ]
})
export class CursosModule { }
