import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarVehiculosComponent } from './listar-vehiculos.component';
import { VehiculosService } from '../vehiculos.service';
import { of } from 'rxjs';

describe('ListarVehiculosComponent', () => {
  let component: ListarVehiculosComponent;
  let fixture: ComponentFixture<ListarVehiculosComponent>;

  const mockVehiculos = [
    { id: 1, marca: 'Renault', linea: 'Kangoo', modelo: 2017 },
    { id: 2, marca: 'Chevrolet', linea: 'Spark', modelo: 2018 },
    { id: 3, marca: 'Nissan', linea: 'March', modelo: 2019 }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarVehiculosComponent],
      providers: [
        {
          provide: VehiculosService,
          useValue: {
            getVehiculos: () => of(mockVehiculos)
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ListarVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe renderizar una tabla con tres filas de vehículos más el encabezado', () => {
    const tableRows = fixture.nativeElement.querySelectorAll('tbody tr');
    expect(tableRows.length).toBe(3);

    const headerRow = fixture.nativeElement.querySelectorAll('thead tr');
    expect(headerRow.length).toBe(1);
  });
});