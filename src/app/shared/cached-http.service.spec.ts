import { TestBed, inject } from '@angular/core/testing';

import { CachedHttpService } from './cached-http.service';

describe('CachedHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CachedHttpService]
    });
  });

  it('should ...', inject([CachedHttpService], (service: CachedHttpService) => {
    expect(service).toBeTruthy();
  }));
});
