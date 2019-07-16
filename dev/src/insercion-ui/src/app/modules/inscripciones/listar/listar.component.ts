import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InsercionlaboralService } from 'src/app/shared/insercionlaboral.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  inscripciones$: Observable<any>;

  constructor(service: InsercionlaboralService) { 
    let uid = '';
    this.inscripciones$ = service.obtenerInscripciones(uid);
  }

  ngOnInit() {
  }

}
