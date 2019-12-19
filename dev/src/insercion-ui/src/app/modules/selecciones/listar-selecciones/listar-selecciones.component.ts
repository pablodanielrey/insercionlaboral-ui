import { Component, OnInit, Inject } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { InsercionlaboralService } from 'src/app/shared/insercionlaboral.service';
import {SelectionModel} from '@angular/cdk/collections';
import { filter, switchMap } from 'rxjs/operators';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogoComponent } from './dialogo.component';

@Component({
  selector: 'app-listar-selecciones',
  templateUrl: './listar-selecciones.component.html',
  styleUrls: ['./listar-selecciones.component.scss']
})
export class ListarSeleccionesComponent implements OnInit {

  inscripciones$: Observable<any>;
  inscripciones_filtradas$: Observable<any>;
  selection: SelectionModel<any>;
  f$ = new BehaviorSubject<void>(null);

  _columnas = ['fecha','empresa','oferta','postulantes','estado','acciones']

  columnas() {
    return this._columnas;
  }

  constructor(service: InsercionlaboralService, public dialog: MatDialog) { 
    let uid = '';
    this.selection = new SelectionModel<any>(true, []);
    this.inscripciones$ = service.obtenerSelecciones(uid);
    this.inscripciones_filtradas$ = this.f$.pipe(
      switchMap(_ => this.inscripciones$.pipe(
        filter(n => !this.selection.isSelected(n))
      ))
    );
  }



  openDialog() {
    this.dialog.open(DialogoComponent, {
      data: {
       
      }
    });
  }

  ngOnInit() {
    this.selection.changed.subscribe(x => this.f$.next());
    this.f$.next();
  }

}




