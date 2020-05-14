import { TestBed } from '@angular/core/testing';

import { DeoNamestajService } from './deo-namestaj.service';

describe('DeoNamestajService', () => {
  let service: DeoNamestajService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeoNamestajService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
