export interface Tienda {
  success: boolean;
  count: number;
  tiendas: Tiend[];
}

export interface Tiend {
  _id?: string;
  nombre: string;
  logo: string;
  ubicacion: string;
  __v?: number;
}
