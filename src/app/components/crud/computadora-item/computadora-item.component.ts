import { Component, OnInit } from '@angular/core';
import { ComputadorasService } from 'src/app/services/computadoras.service';
import { Router } from '@angular/router';
import { Compus } from 'src/app/models/Computadora';

@Component({
  selector: 'app-computadora-item',
  templateUrl: './computadora-item.component.html',
  styleUrls: ['./computadora-item.component.css']
})
export class ComputadoraItemComponent implements OnInit {
  idComputadora: string;
  nombreGabinete: string;
  linkImagen: string;
  ramComputadora: string;
  procesadorComputadora: string;
  tarjetaMadreComputadora: string;
  fuenteComputadora: string;
  refrigeracionComputadora: string;
  precioComputadora: string;
  tarjetaVideoComputadora: string;
  hddComputadora: string;
  ssdComputadora: string;

  constructor(private cpuService: ComputadorasService,
    private router: Router) { }

  ngOnInit(): void {
    this.idComputadora = history.state.data;
    this.getNombreComputadoraById(this.idComputadora);
  }

  edit(url: string, gabinete: string, ram: string, procesador: string,
      mobo: string, fuente: string, refrigeracion: string, precio: number,
      video: string, hdd: string, ssd: string
  ) {
      let computadora: Compus = {
        imagen: url,
        gabinete,
        ram,
        procesador,
        tarjetaMadre: mobo,
        fuente,
        refrigeracion,
        precio,
        tarjetaVideo: video,
        hdd,
        ssd
      };

      this.cpuService.updateComputadora(computadora, this.idComputadora).subscribe(res => {
        console.log(res);
        this.router.navigateByUrl('/crud-computadoras');
      }, err => {
        console.log(err);
      });
  }

  /**
   * Método que obtiene el nombre de la computadora a ser editada, utilizando
   * su id.
   * @param id Id de la tienda a ser editada
   */
  getNombreComputadoraById(id: string) {
    this.cpuService.getComputadoraById(id).subscribe(
      (res) => {
        console.log(res);
        this.linkImagen = res.imagen;
        this.nombreGabinete = res.gabinete;
        this.ramComputadora = res.ram;
        this.procesadorComputadora = res.procesador;
        this.tarjetaMadreComputadora = res.tarjetaMadre;
        this.fuenteComputadora = res.fuente;
        this.refrigeracionComputadora = res.refrigeracion;
        this.precioComputadora = res.precio.toString();
        this.tarjetaVideoComputadora = res.tarjetaVideo || "";
        this.hddComputadora = res.hdd || "";
        this.ssdComputadora = res.ssd || "";
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
