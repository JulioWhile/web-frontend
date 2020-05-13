import { Component, OnInit } from '@angular/core';
import { ComputadorasService } from 'src/app/services/computadoras.service';
import { Compus } from 'src/app/models/Computadora';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  computadoras: Compus[] = [];
  constructor(private cpuService: ComputadorasService) { }

  ngOnInit(): void {
    this.cpuService.getComputadoras().subscribe(cpu => {
      cpu.compus.forEach(element => {
        this.computadoras.push(element);
      });
    });
  }

}
