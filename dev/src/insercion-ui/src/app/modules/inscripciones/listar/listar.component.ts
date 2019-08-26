import { Component, OnInit } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { InsercionlaboralService } from 'src/app/shared/insercionlaboral.service';
import {SelectionModel} from '@angular/cdk/collections';
import { filter, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  inscripciones$: Observable<any>;
  inscripciones_filtradas$: Observable<any>;
  selection: SelectionModel<any>;
  f$ = new BehaviorSubject<void>(null);

  _columnas = ['postulante','carrera','fecha','oferta','materias','promedio','edad','residencia','experiencia','acciones']

  columnas() {
    return this._columnas;
  }

  constructor(service: InsercionlaboralService) { 
    let uid = '';
    this.selection = new SelectionModel<any>(true, []);
    this.inscripciones$ = service.obtenerInscripciones(uid);
    this.inscripciones_filtradas$ = this.f$.pipe(
      switchMap(_ => this.inscripciones$.pipe(
        filter(n => !this.selection.isSelected(n))
      ))
    );
  }

  ngOnInit() {
    this.selection.changed.subscribe(x => this.f$.next());
    this.f$.next();
  }

  

}
