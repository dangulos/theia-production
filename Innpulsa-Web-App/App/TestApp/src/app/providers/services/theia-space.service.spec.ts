import { TestBed } from '@angular/core/testing';

import { TheiaSpaceService } from './theia-space.service';

describe('TheiaSpaceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TheiaSpaceService = TestBed.get(TheiaSpaceService);
    expect(service).toBeTruthy();
  });
});
