import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
})
export class PaisInputComponent {
  @Output() Enter: EventEmitter<string> = new EventEmitter();

  termino = '';

  buscar(): void {
    this.Enter.emit(this.termino);
  }
}
