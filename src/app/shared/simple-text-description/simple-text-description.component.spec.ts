import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleTextDescriptionComponent } from './simple-text-description.component';

describe('SimpleTextDescriptionComponent', () => {
  let component: SimpleTextDescriptionComponent;
  let fixture: ComponentFixture<SimpleTextDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleTextDescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleTextDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
