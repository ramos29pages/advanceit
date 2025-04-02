import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenceOptimizationComponent } from './licence-optimization.component';

describe('LicenceOptimizationComponent', () => {
  let component: LicenceOptimizationComponent;
  let fixture: ComponentFixture<LicenceOptimizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LicenceOptimizationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenceOptimizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
