import { CursosService } from "./../cursos.service";
import { Profesor } from "./../cursos.model";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo-profesor',
  templateUrl: './nuevo-profesor.component.html',
  styleUrls: ['./nuevo-profesor.component.css']
})
export class NuevoProfesorComponent implements OnInit {

  private profesor: Profesor;

  constructor(private cursosServices : CursosService) { }

  ngOnInit() {
    this.profesor = this.cursosServices.nuevoProfesor();
  }

  nuevoProfesor() : void{
    this.cursosServices.agregarProfesor(this.profesor);
    this.profesor = this.cursosServices.nuevoProfesor();
  }
}
