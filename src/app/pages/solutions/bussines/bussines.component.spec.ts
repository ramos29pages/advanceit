import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BussinesComponent } from './bussines.component';

describe('BussinesComponent', () => {
  let component: BussinesComponent;
  let fixture: ComponentFixture<BussinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BussinesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BussinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
