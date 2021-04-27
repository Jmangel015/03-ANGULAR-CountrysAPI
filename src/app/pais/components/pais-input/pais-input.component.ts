import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
})
export class PaisInputComponent implements OnInit {
  @Output() Enter: EventEmitter<string> = new EventEmitter();

  @Output() Debounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();
  termino = '';

  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(300)).subscribe((valor) => {
      console.log('debounce', valor);
    });
  }

  buscar(): void {
    this.Enter.emit(this.termino);
  }

  teclaPresionada(): void {
    this.debouncer.next(this.termino);
  }
}
