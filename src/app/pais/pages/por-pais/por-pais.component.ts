import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent {
  termino = '';
  paises: Country[] = [];
  hayError = false;

  constructor(private paisService: PaisService) {}

  buscar(termino: string): void {
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais(this.termino).subscribe(
      (pais) => {
        console.log(pais);
        this.paises = pais;
      },
      (err) => {
        this.hayError = true;
        this.paises = [];
      }
    );
  }
}
