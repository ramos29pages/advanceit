import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconBigboxComponent } from './icon-bigbox.component';

describe('IconBigboxComponent', () => {
  let component: IconBigboxComponent;
  let fixture: ComponentFixture<IconBigboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconBigboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconBigboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
