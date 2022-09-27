import { TestBed } from '@angular/core/testing';

import { DadosexternosService } from './dadosexternos.service';

describe('DadosexternosService', () => {
  let service: DadosexternosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosexternosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
