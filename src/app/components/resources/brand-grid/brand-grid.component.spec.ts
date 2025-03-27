import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandGridComponent } from './brand-grid.component';

describe('BrandGridComponent', () => {
  let component: BrandGridComponent;
  let fixture: ComponentFixture<BrandGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
