import { TestBed } from '@angular/core/testing';

import { CoinApiService } from './coin-api.service';

describe('CoinApiService', () => {
  let service: CoinApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoinApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
