import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculosService } from '../vehiculos.service';
import { Vehiculo } from '../vehiculo';

@Component({
  selector: 'app-listar-vehiculos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar-vehiculos.component.html',
  styleUrls: ['./listar-vehiculos.component.scss']
})
export class ListarVehiculosComponent implements OnInit {
  vehiculos: Vehiculo[] = [];
  conteoPorMarca: { [marca: string]: number } = {};

  constructor(private vehiculosService: VehiculosService) {}

  ngOnInit(): void {
    this.vehiculosService.getVehiculos().subscribe(data => {
      this.vehiculos = data;
      this.conteoPorMarca = this.contarPorMarca(data);
    });
  }

  contarPorMarca(lista: Vehiculo[]): { [marca: string]: number } {
    const conteo: { [marca: string]: number } = {};
    for (const v of lista) {
      conteo[v.marca] = (conteo[v.marca] || 0) + 1;
    }
    return conteo;
  }

}
