import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tienda, Tiend } from 'src/app/models/Tienda';

const url = 'http://localhost:3000/tiendas/';

@Injectable({
  providedIn: 'root',
})
export class TiendasService {
  constructor(private http: HttpClient) {}

  getTiendas() {
    return this.http.get<Tienda>(url);
  }

  getTiendaById(id: string) {
    return this.http.get<Tiend>(`${url}${id}`);
  }

  deleteTienda(id: string) {
    return this.http.delete<Tiend>(`${url}${id}`);
  }

  updateTienda(tienda: Tiend, id: string) {
    console.log('tienda service', tienda);
    return this.http.put<Tiend>(`${url}${id}`, tienda);
  }

  addTienda(tienda: Tiend) {
    console.log(tienda);
    return this.http.post<Tiend>(url, tienda);
  }
}
