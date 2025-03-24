import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MulticolorImageComponent } from './multicolor-image.component';

describe('MulticolorImageComponent', () => {
  let component: MulticolorImageComponent;
  let fixture: ComponentFixture<MulticolorImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MulticolorImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MulticolorImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
