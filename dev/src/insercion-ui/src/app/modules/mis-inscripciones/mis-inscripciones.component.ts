import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InsercionlaboralService } from 'src/app/shared/insercionlaboral.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-inscripciones',
  templateUrl: './mis-inscripciones.component.html',
  styleUrls: ['./mis-inscripciones.component.scss']
})
export class MisInscripcionesComponent implements OnInit {

  inscripciones$: Observable<any>;

  _columnas = ['fecha','oferta','acciones']

  columnas() {
    return this._columnas;
  }

  constructor(private service: InsercionlaboralService, 
              private router: Router) { 
    let uid = '';
    this.inscripciones$ = service.obtenerInscripciones(uid);
  }

  ngOnInit() {
  }

  crear() {
    this.router.navigate(['/sistema/inscripciones/crear']).then();
  }

}
