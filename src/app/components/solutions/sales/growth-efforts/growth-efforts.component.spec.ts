import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowthEffortsComponent } from './growth-efforts.component';

describe('GrowthEffortsComponent', () => {
  let component: GrowthEffortsComponent;
  let fixture: ComponentFixture<GrowthEffortsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrowthEffortsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrowthEffortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
