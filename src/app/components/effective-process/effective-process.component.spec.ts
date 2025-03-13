import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectiveProcessComponent } from './effective-process.component';

describe('EffectiveProcessComponent', () => {
  let component: EffectiveProcessComponent;
  let fixture: ComponentFixture<EffectiveProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EffectiveProcessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EffectiveProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
