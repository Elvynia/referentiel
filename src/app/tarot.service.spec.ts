import { TestBed, inject } from '@angular/core/testing';

import { TarotService } from './tarot.service';

describe('TarotService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TarotService]
    });
  });

  it('should be created', inject([TarotService], (service: TarotService) => {
    expect(service).toBeTruthy();
  }));
});
