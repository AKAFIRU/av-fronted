import { Seccion } from "./Seccion";

export interface Curso {
    id: number;
    cursoNombre: string;
    ciclo: number;
    cursoSilabo?: Uint8Array; // Usa Uint8Array para representar los datos binarios de cursoSilabo
    seccions?: Seccion[];
  }