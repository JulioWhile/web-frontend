import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tienda-add',
  templateUrl: './tienda-add.component.html',
  styleUrls: ['./tienda-add.component.css']
})
export class TiendaAddComponent implements OnInit {
  nombre: string;
  logo: string;
  ubicacion: string;
  @Output() addTienda: EventEmitter<any> = new EventEmitter();

  constructor() { } 

  ngOnInit(): void {
  }

  onSubmit() {
    const tienda = {
      nombre: this.nombre,
      logo: this.logo,
      ubicacion: this.ubicacion
    }
    this.addTienda.emit(tienda);
  }

}
