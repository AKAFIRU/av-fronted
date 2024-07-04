import { Curso } from "./Curso";
import { Docente } from "./Docente";
import { Proyecto } from "./Proyecto";

export interface Seccion {
    id: number;
    secNombre: string;
    curso: Curso;
    docente: Docente;
    proyectos?: Proyecto[];
  }