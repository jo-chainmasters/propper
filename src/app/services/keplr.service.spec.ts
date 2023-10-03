import { TestBed } from '@angular/core/testing';

import { KeplrService } from './keplr.service';

describe('KeplrService', () => {
  let service: KeplrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeplrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
