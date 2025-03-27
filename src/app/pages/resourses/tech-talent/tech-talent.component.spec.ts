import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechTalentComponent } from './tech-talent.component';

describe('TechTalentComponent', () => {
  let component: TechTalentComponent;
  let fixture: ComponentFixture<TechTalentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechTalentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechTalentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
