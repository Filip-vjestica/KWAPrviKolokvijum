import { TestBed } from '@angular/core/testing';

import { DeoService } from './deo.service';

describe('DeoService', () => {
  let service: DeoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
