import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrierSalesComponent } from './carrier-sales.component';

describe('CarrierSalesComponent', () => {
  let component: CarrierSalesComponent;
  let fixture: ComponentFixture<CarrierSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrierSalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrierSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
