import { TestBed } from '@angular/core/testing';

import { GeoDbService } from './geo-db.service';

describe('GeoDbService', () => {
  let service: GeoDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeoDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
