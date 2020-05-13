import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Tienda } from 'src/app/models/Tienda';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8'
  })
}

@Injectable({
  providedIn: 'root'
})


export class TiendasService {
  tiendasURL: string = "http://localhost:3000/tiendas";

  constructor(private http: HttpClient) { }

  getTiendas(): Observable<Tienda[]> {
    return this.http.get<Tienda[]>(this.tiendasURL, httpOptions);
  }

  deleteTienda(tienda: Tienda): Observable<Tienda> {
    console.log("se elimina la tienda " + tienda._id);
    return this.http.delete<Tienda>(`${this.tiendasURL}/${tienda._id}`, httpOptions);
  }

  updateTienda(tienda: Tienda): Observable<Tienda> {
    return this.http.put<Tienda>(`${this.tiendasURL}/${tienda._id}`, tienda, httpOptions);
  }

  addTienda(tienda: Tienda): Observable<Tienda> {
    return this.http.post<Tienda>(this.tiendasURL, tienda, httpOptions);
  }

}
