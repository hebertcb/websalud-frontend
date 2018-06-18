import { TestBed, inject } from '@angular/core/testing';

import { RedesService } from './redes.service';

describe('RedesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RedesService]
    });
  });

  it('should be created', inject([RedesService], (service: RedesService) => {
    expect(service).toBeTruthy();
  }));
});
