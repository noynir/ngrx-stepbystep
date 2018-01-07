import { TestBed, inject } from '@angular/core/testing';

import { TeamsDataService } from './teams-data.service';

describe('TeamsDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeamsDataService]
    });
  });

  it('should be created', inject([TeamsDataService], (service: TeamsDataService) => {
    expect(service).toBeTruthy();
  }));
});
