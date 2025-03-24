import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsChatbotComponent } from './products-chatbot.component';

describe('ProductsChatbotComponent', () => {
  let component: ProductsChatbotComponent;
  let fixture: ComponentFixture<ProductsChatbotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsChatbotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsChatbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
