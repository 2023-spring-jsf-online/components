import { TestBed } from '@angular/core/testing';

import { Pizza1Service } from './pizza1.service';

describe('Pizza1Service', () => {
  let service: Pizza1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pizza1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
