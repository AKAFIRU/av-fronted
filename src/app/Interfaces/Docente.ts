import { Seccion } from "./Seccion";

export interface Docente {
    id: number;
    nombre: string;
    apellido: string;
    correo: string;
    codigoInsti: string;
    seccions?: Seccion[];
  }