import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSimpleComponent } from './product-simple.component';

describe('ProductSimpleComponent', () => {
  let component: ProductSimpleComponent;
  let fixture: ComponentFixture<ProductSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductSimpleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
