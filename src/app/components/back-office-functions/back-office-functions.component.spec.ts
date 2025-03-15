import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackOfficeFunctionsComponent } from './back-office-functions.component';

describe('BackOfficeFunctionsComponent', () => {
  let component: BackOfficeFunctionsComponent;
  let fixture: ComponentFixture<BackOfficeFunctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackOfficeFunctionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackOfficeFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
