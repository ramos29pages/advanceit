import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeldeskpContactformComponent } from './heldeskp-contactform.component';

describe('HeldeskpContactformComponent', () => {
  let component: HeldeskpContactformComponent;
  let fixture: ComponentFixture<HeldeskpContactformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeldeskpContactformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeldeskpContactformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
