import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeimpactComponent } from './weimpact.component';

describe('WeimpactComponent', () => {
  let component: WeimpactComponent;
  let fixture: ComponentFixture<WeimpactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeimpactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeimpactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
