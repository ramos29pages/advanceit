import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdgGoalsComponent } from './sdg-goals.component';

describe('SdgGoalsComponent', () => {
  let component: SdgGoalsComponent;
  let fixture: ComponentFixture<SdgGoalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SdgGoalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SdgGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
