import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `,
  ],
})
export class PorRegionComponent {
  region = '';
  paises: Country[] = [];
  hayError = false;
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActive = '';
  constructor(private paisService: PaisService) {}

  getClaseCSS(region: string): string {
    return region === this.regionActive
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  activarRegion(region: string): void {
    // TODO: Cargar el llamado al servicio

    if (region === this.regionActive) {
      return;
    }
    this.regionActive = region;
    this.paises = [];
    this.paisService.buscarRegion(region).subscribe((pais) => {
      this.paises = pais;
    });
  }
}
