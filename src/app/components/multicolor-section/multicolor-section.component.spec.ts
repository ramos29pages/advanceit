import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MulticolorSectionComponent } from './multicolor-section.component';

describe('MulticolorSectionComponent', () => {
  let component: MulticolorSectionComponent;
  let fixture: ComponentFixture<MulticolorSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MulticolorSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MulticolorSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
