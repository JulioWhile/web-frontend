import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TiendasService } from 'src/app/services/tiendas.service';
import { Tienda } from 'src/app/models/Tienda';

@Component({
  selector: 'app-tienda-item',
  templateUrl: './tienda-item.component.html',
  styleUrls: ['./tienda-item.component.css']
})
export class TiendaItemComponent implements OnInit {
  @Input() tienda: Tienda;
  @Output() deleteTienda: EventEmitter<Tienda> = new EventEmitter();

  constructor(private servicioTienda: TiendasService) { }

  ngOnInit(): void {
  }

  onDelete(tienda: Tienda) {
    this.deleteTienda.emit(tienda);
    console.log("se le hizo click al a tienda " + tienda._id);
  }

}
