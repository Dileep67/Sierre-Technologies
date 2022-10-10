import { TestBed } from '@angular/core/testing';

import { UesrutilityService } from './userutility.service';

describe('UesrutilityService', () => {
  let service: UesrutilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UesrutilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
