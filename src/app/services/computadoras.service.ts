import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Computadora, Compus } from '../models/Computadora';


const url = 'http://localhost:3000/computadora/';

@Injectable({
  providedIn: 'root'
})
export class ComputadorasService {

  constructor(private http: HttpClient) { }

  getComputadoras() {
    return this.http.get<Computadora>(`${url}`);
  }

  getComputadoraById(id: string) {
    return this.http.get<Compus>(`${url}${id}`);
  }

  postComputadoras(computadora: Compus) {
    return this.http.post(`${url}`, computadora);
  }

  deleteComputadora(id: string) {
    return this.http.delete<Compus>(`${url}${id}`);
  }

  updateComputadora(computadora: Compus, id: string) {
    return this.http.put<Compus>(`${url}${id}`, computadora);
  }
}
