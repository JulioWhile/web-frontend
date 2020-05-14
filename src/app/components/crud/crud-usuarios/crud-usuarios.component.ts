import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { User } from 'src/app/models/Usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-usuarios',
  templateUrl: './crud-usuarios.component.html',
  styleUrls: ['./crud-usuarios.component.css']
})
export class CrudUsuariosComponent implements OnInit {
  rutaActual = this.router.url;
  users: User[] = [];
  constructor(private usuariosService: UsuariosService, private router: Router) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  add(username: string, password: string, nivel: number) {
    let usuario: User = {
      username,
      password,
      nivel: nivel,
    };
    this.usuariosService.addUsuario(usuario).subscribe(
      (res) => {
        this.getUsuarios();
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  update(id: string) {
    console.log(this.rutaActual);
    this.router.navigateByUrl(`${this.rutaActual}/${id}`, {
      state: { data: id },
    });
  }

  delete(id: string) {
    this.usuariosService.deleteUsuario(id).subscribe(
      (res) => {
        this.getUsuarios();
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getUsuarios() {
    this.users = [];
    this.usuariosService.getUsuarios().subscribe((usuario) => {
      usuario.users.forEach((element) => {
        this.users.push(element)
      });
    });
  }
}
