import { Component, OnInit } from '@angular/core';
import { Profesor, Curso, Categoria } from "./../cursos.model";
import { CursosService} from "./../cursos.service";

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  private cursos: Curso[];
  private profesores: Profesor[];
  private categorias: Categoria[];

  constructor(private cursosService : CursosService) { }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
  }

}
