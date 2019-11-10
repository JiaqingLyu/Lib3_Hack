import { TestBed } from '@angular/core/testing';

import { StudentlistsService } from './studentlists.service';

describe('StudentlistsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentlistsService = TestBed.get(StudentlistsService);
    expect(service).toBeTruthy();
  });
});
