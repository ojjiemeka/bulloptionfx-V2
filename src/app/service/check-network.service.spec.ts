import { TestBed } from '@angular/core/testing';

import { CheckNetworkService } from './check-network.service';

describe('CheckNetworkService', () => {
  let service: CheckNetworkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckNetworkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
