import { TestBed } from '@angular/core/testing';
import { VehiculosService } from './vehiculos.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('VehiculosService', () => {
  let service: VehiculosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(VehiculosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
