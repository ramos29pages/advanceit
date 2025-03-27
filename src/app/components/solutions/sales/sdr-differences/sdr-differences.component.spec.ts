import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdrDifferencesComponent } from './sdr-differences.component';

describe('SdrDifferencesComponent', () => {
  let component: SdrDifferencesComponent;
  let fixture: ComponentFixture<SdrDifferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SdrDifferencesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SdrDifferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
