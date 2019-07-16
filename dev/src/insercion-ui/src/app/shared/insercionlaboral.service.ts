import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsercionlaboralService {

  constructor() { }

  obtenerInscripciones(uid: string): Observable<any[]> {
    return of([]);
  }

}
