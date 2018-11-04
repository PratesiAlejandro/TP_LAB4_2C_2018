import { TestBed } from '@angular/core/testing';

import { ServicioEmpleadoService } from './servicio-empleado.service';

describe('ServicioEmpleadoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioEmpleadoService = TestBed.get(ServicioEmpleadoService);
    expect(service).toBeTruthy();
  });
});
