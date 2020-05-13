export interface Computadora {
  success: boolean;
  count: number;
  compus: Compus[];
}

export interface Compus {
  _id: string;
  imagen: string;
  gabinete: string;
  ram: string;
  procesador: string;
  tarjetaMadre: string;
  fuente: string;
  refrigeracion: string;
  tarjetaVideo: string;
  hdd?: string;
  ssd?: string;
  precio: number;
  __v: number;
}