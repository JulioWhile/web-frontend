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
  @Output() deleteTienda: EventEmitter<string> = new EventEmitter();
  @Output() updateTienda: EventEmitter<string> = new EventEmitter();

  constructor(private servicioTienda: TiendasService) { }

  ngOnInit(): void {
  }

  onDelete(idTienda: string) {
    this.deleteTienda.emit(idTienda);
    console.log("se le hizo click al a tienda " + idTienda);
  }

  onUpdate(tienda: Tienda) {

  }

}
