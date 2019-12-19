import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearSeleccionComponent } from './crear-seleccion.component';

describe('CrearSeleccionComponent', () => {
  let component: CrearSeleccionComponent;
  let fixture: ComponentFixture<CrearSeleccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearSeleccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearSeleccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
