import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipoVentasComponent } from './equipo-ventas.component';

describe('EquipoVentasComponent', () => {
  let component: EquipoVentasComponent;
  let fixture: ComponentFixture<EquipoVentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipoVentasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipoVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
