import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandSliderComponent } from './brand-slider.component';

describe('BrandSliderComponent', () => {
  let component: BrandSliderComponent;
  let fixture: ComponentFixture<BrandSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
