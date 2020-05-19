import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario, User } from 'src/app/models/Usuario';

const usuariosURL = "http://localhost:3000/usuarios/";

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {
  constructor(private http: HttpClient) {}

  getUsuarios() {
    return this.http.get<Usuario>(usuariosURL);
  }

  getUsuarioById(id: string) {
    return this.http.get<User>(`${usuariosURL}${id}`);
  }

  deleteUsuario(id: string) {
    return this.http.delete<User>(`${usuariosURL}${id}`);
  }

  updateUsuario(usuario: User, id: string) {
    return this.http.put<User>(`${usuariosURL}${id}`, usuario);
  }

  addUsuario(usuario: User) {
    return this.http.post<User>(usuariosURL, usuario);
  }
}
