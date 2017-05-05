import { TestBed, inject } from '@angular/core/testing';

import { AppMotionService } from './app-motion.service';

describe('AppMotionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppMotionService]
    });
  });

  it('should ...', inject([AppMotionService], (service: AppMotionService) => {
    expect(service).toBeTruthy();
  }));
});
