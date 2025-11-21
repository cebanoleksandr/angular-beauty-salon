import { TestBed } from '@angular/core/testing';

import { NotFound } from './not-found';

describe('NotFound', () => {
  let service: NotFound;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotFound);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
