import { Component, OnInit } from '@angular/core';
import { Curso, Categoria, Profesor } from "./../cursos.model";
import { CursosService } from "./../cursos.service";

@Component({
  selector: 'app-nuevo-curso',
  templateUrl: './nuevo-curso.component.html',
  styleUrls: ['./nuevo-curso.component.css']
})
export class NuevoCursoComponent implements OnInit {

  curso: Curso;
  profesores: Profesor[];
  categorias: Categoria[];

  constructor(private cursosService : CursosService) { }

  ngOnInit() {
    this.curso = this.cursosService.nuevoCurso();
    this.profesores = this.cursosService.getProfesores();
    this.categorias = this.cursosService.getCategorias();
  }

  nuevoCurso() : void {
    this.cursosService.agregarCurso(this.curso);
    this.curso = this.cursosService.nuevoCurso();
  }

}
