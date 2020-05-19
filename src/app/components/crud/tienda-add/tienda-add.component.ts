import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TiendasService } from 'src/app/services/tiendas.service';
import { Tiend } from 'src/app/models/Tienda';

@Component({
  selector: 'app-tienda-add',
  templateUrl: './tienda-add.component.html',
  styleUrls: ['./tienda-add.component.css'],
})
export class TiendaAddComponent implements OnInit {
  idTienda: string;
  nombreTienda: string;
  linkFoto: string;
  locacion: string;

  constructor(private router: Router, private tiendaService: TiendasService) {}

  ngOnInit(): void {
    this.idTienda = history.state.data;
    this.getNombreTiendaById(this.idTienda);
  }

  edit(url: string, nombre: string, ubicacion: string) {
    let tienda: Tiend = {
      logo: url,
      nombre,
      ubicacion,
    };
    this.tiendaService.updateTienda(tienda, this.idTienda).subscribe(
      (res) => {
        console.log(res);
        this.router.navigateByUrl('/crud-tiendas');
      },
      (err) => {
        console.log(err);
      }
    );
  }

  /**
   * Método que obtiene el nombre de la tienda a ser editada, utilizando
   * su id.
   * @param id Id de la tienda a ser editada
   */
  getNombreTiendaById(id: string) {
    this.tiendaService.getTiendaById(id).subscribe(
      (res) => {
        this.nombreTienda = res.nombre;
        this.linkFoto = res.logo;
        this.locacion = res.ubicacion;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
