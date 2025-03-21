import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlianzasComponent } from './alianzas.component';

describe('AlianzasComponent', () => {
  let component: AlianzasComponent;
  let fixture: ComponentFixture<AlianzasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlianzasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlianzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
