import { TestBed } from '@angular/core/testing';

import { SitNGoService } from './sit-n-go.service';

describe('SitNGoService', () => {
  let service: SitNGoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SitNGoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
