import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowWeHelpRetailersComponent } from './how-we-help-retailers.component';

describe('HowWeHelpRetailersComponent', () => {
  let component: HowWeHelpRetailersComponent;
  let fixture: ComponentFixture<HowWeHelpRetailersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowWeHelpRetailersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowWeHelpRetailersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
