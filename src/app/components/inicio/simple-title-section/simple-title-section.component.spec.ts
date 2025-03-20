import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleTitleSectionComponent } from './simple-title-section.component';

describe('SimpleTitleSectionComponent', () => {
  let component: SimpleTitleSectionComponent;
  let fixture: ComponentFixture<SimpleTitleSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleTitleSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleTitleSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
