import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipoDirectivoComponent } from './equipo-directivo.component';

describe('EquipoDirectivoComponent', () => {
  let component: EquipoDirectivoComponent;
  let fixture: ComponentFixture<EquipoDirectivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipoDirectivoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipoDirectivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
