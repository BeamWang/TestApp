import { TestBed, inject } from '@angular/core/testing';

import { MapService } from './map.service';

describe('MapService', () => {
  let service: MapService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [MapService]});
    // service = TestBed.inject(MapService);
  });

  it('创建实例', inject([MapService], (service: MapService) => {
    expect(service).toBeTruthy();
  }));
});
