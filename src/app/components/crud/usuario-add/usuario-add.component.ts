import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { User } from 'src/app/models/Usuario';

@Component({
  selector: 'app-usuario-add',
  templateUrl: './usuario-add.component.html',
  styleUrls: ['./usuario-add.component.css']
})
export class UsuarioAddComponent implements OnInit {
  idUsuario: string;
  usern: string;

  constructor(private router: Router, private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.idUsuario = history.state.data;
    this.getUsernameById(this.idUsuario);
  }

  edit(username: string, password: string, nivel: number) {
    let usuario: User = {
      username,
      password,
      nivel,
    };
    this.usuariosService.updateUsuario(usuario, this.idUsuario).subscribe(
      (res) => {
        console.log(res);
        this.router.navigateByUrl('/crud-usuarios');
      },
      (err) => {
        console.log(err);
      }
    );
  }

  /**
   * Método que obtiene el usuario a ser editado, utilizando
   * su id.
   * @param id Id del usuario a ser editado
   */
  getUsernameById(id: string) {
    this.usuariosService.getUsuarioById(id).subscribe(
      (res) => {
        console.log("esto es un res", res);
        this.usern = res.username;
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
