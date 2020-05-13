import { Component, OnInit } from '@angular/core';
import { Tienda } from 'src/app/models/Tienda'

import { TiendasService } from 'src/app/services/tiendas.service';

@Component({
  selector: 'app-crud-tiendas',
  templateUrl: './crud-tiendas.component.html',
  styleUrls: ['./crud-tiendas.component.css']
})

export class CrudTiendasComponent implements OnInit {
  tiendas: Tienda[];

  constructor(private servicioTienda: TiendasService) { }

  ngOnInit(): void {
    this.getTiendas();
  }

  getTiendas(){
    this.servicioTienda.getTiendas().subscribe((tiendas)=> {
      this.tiendas = tiendas;
    });
  }

  deleteTienda(tienda: Tienda) {
    // AQUÍ SE LLAMA AL SERVICIO PARA ELIMINAR LA TIENDA
    // this.tiendas = this.tiendas.filter(t => t._id != tienda._id);
    console.log(`Tienda eliminada en crud-tiendas: ${tienda._id}`);
    this.servicioTienda.deleteTienda(tienda).subscribe((t)=>{
      console.log(`Tienda eliminada: ${t._id}`);
      this.getTiendas();
    });

  }




}
