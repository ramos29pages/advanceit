import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalForwardComponent } from './global-forward.component';

describe('GlobalForwardComponent', () => {
  let component: GlobalForwardComponent;
  let fixture: ComponentFixture<GlobalForwardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalForwardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalForwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
