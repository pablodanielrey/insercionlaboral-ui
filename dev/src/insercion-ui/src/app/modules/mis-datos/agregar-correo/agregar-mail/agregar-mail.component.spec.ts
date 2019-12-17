import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarMailComponent } from './agregar-mail.component';

describe('AgregarMailComponent', () => {
  let component: AgregarMailComponent;
  let fixture: ComponentFixture<AgregarMailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarMailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
