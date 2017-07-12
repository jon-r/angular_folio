import { TestBed, inject } from '@angular/core/testing';

import { RouteCommsService } from './route-comms.service';

describe('RouteCommsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteCommsService]
    });
  });

  it('should ...', inject([RouteCommsService], (service: RouteCommsService) => {
    expect(service).toBeTruthy();
  }));
});
