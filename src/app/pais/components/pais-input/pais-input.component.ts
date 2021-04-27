import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
})
export class PaisInputComponent implements OnInit {
  @Output() Enter: EventEmitter<string> = new EventEmitter();

  @Output() Debounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder = '';

  debouncer: Subject<string> = new Subject();
  termino = '';

  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(300)).subscribe((valor) => {
      this.Debounce.emit(valor);
    });
  }

  buscar(): void {
    this.Enter.emit(this.termino);
  }

  teclaPresionada(): void {
    this.debouncer.next(this.termino);
  }
}
