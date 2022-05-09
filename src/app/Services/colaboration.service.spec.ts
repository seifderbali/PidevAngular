import { TestBed } from '@angular/core/testing';

import { ColaborationService } from './colaboration.service';

describe('ColaborationService', () => {
  let service: ColaborationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColaborationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
