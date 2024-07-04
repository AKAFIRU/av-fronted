import { Seccion } from "./Seccion";

export interface Proyecto {
    id: number;
    proyectoNombre: string;
    fechaFinali: Date;
    fechaCreacion: Date;
    //entregables?: any[]; // Ajusta el tipo según la estructura de tu modelo Entregable
    seccions?: Seccion[];    // Ajusta el tipo según la estructura de tu modelo Seccion
  }