import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderIndustriesComponent } from './slider-industries.component';

describe('SliderIndustriesComponent', () => {
  let component: SliderIndustriesComponent;
  let fixture: ComponentFixture<SliderIndustriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderIndustriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderIndustriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
