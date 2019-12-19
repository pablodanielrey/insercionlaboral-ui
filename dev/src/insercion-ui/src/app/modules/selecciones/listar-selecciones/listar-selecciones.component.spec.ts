import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSeleccionesComponent } from './listar-selecciones.component';

describe('ListarSeleccionesComponent', () => {
  let component: ListarSeleccionesComponent;
  let fixture: ComponentFixture<ListarSeleccionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarSeleccionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarSeleccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
