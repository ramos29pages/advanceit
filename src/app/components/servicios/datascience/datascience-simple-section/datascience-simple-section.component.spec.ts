import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatascienceSimpleSectionComponent } from './datascience-simple-section.component';

describe('DatascienceSimpleSectionComponent', () => {
  let component: DatascienceSimpleSectionComponent;
  let fixture: ComponentFixture<DatascienceSimpleSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatascienceSimpleSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatascienceSimpleSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
