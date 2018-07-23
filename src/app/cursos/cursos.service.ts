import { Injectable } from '@angular/core';
import { Profesor, Curso, Categoria } from './cursos.model'

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private cursos: Curso[];
  private profesores: Profesor[];
  private categorias: Categoria[];

  constructor() {
    this.categorias = [
      {
        id: 0,
        nombre: 'Autonomo'
      },
      {
        id: 1,
        nombre: 'Informática'
      },
      {
        id: 2,
        nombre: 'Matemáticas'
      },
      {
        id: 3,
        nombre: 'Diseño'
      }
    ];

    this.profesores = [];

    this.cursos = [];
  }

  getCursos(){
    
    if(localStorage.getItem('cursos')){
      this.cursos = JSON.parse(localStorage.getItem('cursos'));
    }

    return this.cursos;
  }

  getCategorias(){
    return this.categorias;
  }

  getProfesores(){

    if(localStorage.getItem('profesores')){
      this.profesores = JSON.parse(localStorage.getItem('profesores'));
    }

    return this.profesores;
    
  }

  agregarProfesor(profesor : Profesor){
    this.profesores.push(profesor);
    localStorage.setItem('profesores', JSON.stringify(this.profesores));
  }

  nuevoProfesor() : Profesor{
    return {
      id: this.profesores.length,
      dni: 0,
      nombre: '',
      direcion: '',
      telefono: 123456789
    };
  }

  agregarCurso(curso : Curso){
    this.cursos.push(curso);
    localStorage.setItem('cursos', JSON.stringify(this.cursos));
  }

  nuevoCurso() : Curso{
    return {
      id: this.cursos.length,
      nombre: '',
      profesor: 0,
      lugar: '',
      fechaInicio: new Date(Date.now()),
      cupos: 0,
      categoria: 0
    }
  }
}
