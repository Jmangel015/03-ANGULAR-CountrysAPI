import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent {
  termino = '';

  constructor(private paisService: PaisService) {}

  buscar(): void {
    console.log(this.termino);

    this.paisService.buscarPais(this.termino).subscribe((resp) => {
      console.log(resp);
    });
  }
}
