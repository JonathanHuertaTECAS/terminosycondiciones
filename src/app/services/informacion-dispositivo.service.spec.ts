import { TestBed } from '@angular/core/testing';

import { InformacionDispositivoService } from './informacion-dispositivo.service';

describe('InformacionDispositivoService', () => {
  let service: InformacionDispositivoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformacionDispositivoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
