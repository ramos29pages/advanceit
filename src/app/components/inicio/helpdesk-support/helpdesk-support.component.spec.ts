import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpdeskSupportComponent } from './helpdesk-support.component';

describe('HelpdeskSupportComponent', () => {
  let component: HelpdeskSupportComponent;
  let fixture: ComponentFixture<HelpdeskSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpdeskSupportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpdeskSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
