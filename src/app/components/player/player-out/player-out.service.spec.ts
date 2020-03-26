import { TestBed } from '@angular/core/testing';

import { PlayerOutService } from './player-out.service';

describe('PlayerOutService', () => {
  let service: PlayerOutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerOutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
