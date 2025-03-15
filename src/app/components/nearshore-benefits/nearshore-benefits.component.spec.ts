import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NearshoreBenefitsComponent } from './nearshore-benefits.component';

describe('NearshoreBenefitsComponent', () => {
  let component: NearshoreBenefitsComponent;
  let fixture: ComponentFixture<NearshoreBenefitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NearshoreBenefitsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NearshoreBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
