import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [],
})
export class VerPaisComponent implements OnInit {
  pais!: Country;
  constructor(
    private activateRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    this.activateRoute.params
      .pipe(
        switchMap(({ id }) => this.paisService.getPaisAlpha(id)),
        tap(console.log)
      )
      .subscribe((pais) => {
        this.pais = pais;
      });
    // this.activateRoute.params.subscribe(({ id }) => {
    //   this.paisService.getPaisAlpha(id).subscribe((pais) => {
    //     console.log(pais);
    //   });
    // });
  }
}
