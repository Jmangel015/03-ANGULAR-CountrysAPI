import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [],
})
export class PorCapitalComponent {
  termino = '';
  paises: Country[] = [];
  hayError = false;

  constructor(private paisService: PaisService) {}

  buscar(termino: string): void {
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarCapital(this.termino).subscribe(
      (pais) => {
        this.paises = pais;
      },
      (err) => {
        this.hayError = true;
        this.paises = [];
      }
    );
  }
}
