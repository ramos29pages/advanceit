import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeldeskpInsightsComponent } from './heldeskp-insights.component';

describe('HeldeskpInsightsComponent', () => {
  let component: HeldeskpInsightsComponent;
  let fixture: ComponentFixture<HeldeskpInsightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeldeskpInsightsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeldeskpInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
