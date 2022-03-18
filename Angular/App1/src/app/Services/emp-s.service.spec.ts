import { TestBed } from '@angular/core/testing';

import { EmpSService } from './emp-s.service';

describe('EmpSService', () => {
  let service: EmpSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
