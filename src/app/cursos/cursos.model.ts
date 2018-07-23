export interface Curso {
    id: number,
    nombre: string,
    profesor: number,
    lugar: string,
    fechaInicio: Date,
    cupos: number,
    categoria: number
}

export interface Profesor {
    id: number,
    dni: number,
    nombre: string,
    direcion: string,
    telefono: number
}

export interface Categoria{
    id: number
    nombre: string
} 