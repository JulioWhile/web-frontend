import { Component, OnInit } from '@angular/core';
import { TiendasService } from 'src/app/services/tiendas.service';
import { Tiend } from 'src/app/models/Tienda';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-tiendas',
  templateUrl: './crud-tiendas.component.html',
  styleUrls: ['./crud-tiendas.component.css'],
})
export class CrudTiendasComponent implements OnInit {
  rutaActual = this.router.url;
  tiendas: Tiend[] = [];
  constructor(private tiendaService: TiendasService, private router: Router) {}

  ngOnInit(): void {
    this.getTiendas();
  }

  add(url: string, nombre: string, ubicacion: string) {
    let tienda: Tiend = {
      nombre,
      logo: url,
      ubicacion: ubicacion,
    };
    this.tiendaService.addTienda(tienda).subscribe(
      (res) => {
        this.getTiendas();
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  update(id: string) {
    this.router.navigateByUrl(`${this.rutaActual}/${id}`, {
      state: { data: id },
    });
  }

  delete(id: string) {
    this.tiendaService.deleteTienda(id).subscribe(
      (res) => {
        this.getTiendas();
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getTiendas() {
    this.tiendas = [];

    this.tiendaService.getTiendas().subscribe((tienda) => {
      console.log(tienda);
      tienda.tiendas.forEach(element => {
        this.tiendas.push(element);
      });
    });
  }
}
