import { Component, OnInit } from '@angular/core';
import { ComputadorasService } from 'src/app/services/computadoras.service';
import { Compus } from 'src/app/models/Computadora';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-computadoras',
  templateUrl: './crud-computadoras.component.html',
  styleUrls: ['./crud-computadoras.component.css']
})
export class CrudComputadorasComponent implements OnInit {
  rutaActual = this.router.url;
  computadoras: Compus[] = [];

  constructor(private cpuService: ComputadorasService,
    private router: Router) { }

  ngOnInit(): void {
    this.getComputadoras();
  }

  update(id: string) {
    this.router.navigateByUrl(`${this.rutaActual}/${id}`, {
      state: { data: id },
    });
  }

  delete(id: string) {
    this.cpuService.deleteComputadora(id).subscribe(
      (res) => {
        this.getComputadoras();
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  add(url: string, gabinete: string, ram: string, procesador: string,
      mobo: string, fuente: string, refrigeracion: string, precio: string,
      video: string, hdd: string, ssd: string) {
      
      let newPrecio = parseInt(precio);
      let computadora: Compus = {
        imagen: url,
        gabinete,
        ram,
        procesador,
        tarjetaMadre: mobo,
        fuente,
        refrigeracion,
        precio: newPrecio,
        tarjetaVideo: video,
        hdd,
        ssd
      };

      this.cpuService.postComputadoras(computadora).subscribe(res => {
        this.getComputadoras();
        console.log(res);
      }, err => {
        console.log(err);
      });

  }

  getComputadoras() {
    this.computadoras = [];

    this.cpuService.getComputadoras().subscribe((computadora) => {
      computadora.compus.forEach(element => {
        this.computadoras.push(element);
      });
    });
  }

}
