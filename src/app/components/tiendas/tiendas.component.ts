import { Component, OnInit } from '@angular/core';
import { TiendasService } from 'src/app/services/tiendas.service';

@Component({
  selector: 'app-tiendas',
  templateUrl: './tiendas.component.html',
  styleUrls: ['./tiendas.component.css']
})
export class TiendasComponent implements OnInit {
  tiendas = [];
  constructor(private tiendasService: TiendasService) { }

  ngOnInit(): void {
    this.tiendasService.getTiendas().subscribe(tienda => {
      tienda.forEach(element => {
        this.tiendas.push(element);
        console.log(this.tiendas);
      });
    });
  }

}
