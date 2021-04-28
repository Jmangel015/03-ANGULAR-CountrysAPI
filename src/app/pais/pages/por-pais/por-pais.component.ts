import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class PorPaisComponent {
  termino = '';
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  hayError = false;

  mostrarSugerenias = false;

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

  sugerencias(termino: string): void {
    this.mostrarSugerenias = true;
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPais(termino).subscribe(
      (paises) => {
        this.paisesSugeridos = paises.splice(0, 5);
      },
      (err) => {
        this.paisesSugeridos = [];
      }
    );
  }

  buscarSugerido(terino: string): void {
    this.buscar(terino);
  }
}
