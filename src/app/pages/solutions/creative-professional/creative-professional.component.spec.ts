import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreativeProfessionalComponent } from './creative-professional.component';

describe('CreativeProfessionalComponent', () => {
  let component: CreativeProfessionalComponent;
  let fixture: ComponentFixture<CreativeProfessionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreativeProfessionalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreativeProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
