import { TestBed, inject } from '@angular/core/testing';

import { RolesDataService } from './roles-data.service';

describe('RolesDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RolesDataService]
    });
  });

  it('should be created', inject([RolesDataService], (service: RolesDataService) => {
    expect(service).toBeTruthy();
  }));
});
