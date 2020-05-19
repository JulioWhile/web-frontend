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
  nombreUsuario: string;
  correoUsuario: string;
  nivelUsuario: number;

  constructor(private router: Router, private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.idUsuario = history.state.data;
    this.getUsernameById(this.idUsuario);
  }

  edit(name: string, email: string, nivel: number) {
    let usuario: User = {
      name,
      email,
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
        this.nombreUsuario = res.name;
        this.correoUsuario = res.email;
        this.nivelUsuario = res.nivel;
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
