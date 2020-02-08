import { TestBed } from '@angular/core/testing';

import { MapService } from './map.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('MapService', () => {
  let service: MapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    TestBed.inject(HttpClient);
    service = TestBed.inject(MapService);
  });

  it('创建实例', () => {
    expect(service).toBeTruthy();
  });
});
