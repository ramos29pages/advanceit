import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitledesSectionComponent } from './titledes-section.component';

describe('TitledesSectionComponent', () => {
  let component: TitledesSectionComponent;
  let fixture: ComponentFixture<TitledesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitledesSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitledesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
