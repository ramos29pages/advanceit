import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailBenefitsComponent } from './retail-benefits.component';

describe('RetailBenefitsComponent', () => {
  let component: RetailBenefitsComponent;
  let fixture: ComponentFixture<RetailBenefitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetailBenefitsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetailBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
