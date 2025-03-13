import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsGridComponent } from './solutions-grid.component';

describe('SolutionsGridComponent', () => {
  let component: SolutionsGridComponent;
  let fixture: ComponentFixture<SolutionsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolutionsGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolutionsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
