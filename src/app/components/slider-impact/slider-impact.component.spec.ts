import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderImpactComponent } from './slider-impact.component';

describe('SliderImpactComponent', () => {
  let component: SliderImpactComponent;
  let fixture: ComponentFixture<SliderImpactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderImpactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderImpactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
