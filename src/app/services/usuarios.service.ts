import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Usuario } from 'src/app/models/Usuario';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  usuariosURL: string = "http://localhost:3000/tiendas";

  constructor(private http: HttpClient) { }

  getTiendas(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.usuariosURL, httpOptions);
  }

  deleteTienda(idUsuario: number): Observable<Usuario> {
    return this.http.delete<Usuario>(`${this.usuariosURL}/${idUsuario}`, httpOptions);
  }

  updateTienda(usr: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.usuariosURL}/${usr._id}`, usr, httpOptions);
  }

  addTienda(usr: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.usuariosURL, usr, httpOptions);
  }

}
