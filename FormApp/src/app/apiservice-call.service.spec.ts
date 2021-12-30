import { TestBed } from '@angular/core/testing';

import { ApiserviceCallService } from './apiservice-call.service';

describe('ApiserviceCallService', () => {
  let service: ApiserviceCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiserviceCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
