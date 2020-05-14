import { TestBed } from '@angular/core/testing';

import { NamestajService } from './namestaj.service';

describe('NamestajService', () => {
  let service: NamestajService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NamestajService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
