import { TestBed } from '@angular/core/testing';

import { InsercionlaboralService } from './insercionlaboral.service';

describe('InsercionlaboralService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InsercionlaboralService = TestBed.get(InsercionlaboralService);
    expect(service).toBeTruthy();
  });
});
