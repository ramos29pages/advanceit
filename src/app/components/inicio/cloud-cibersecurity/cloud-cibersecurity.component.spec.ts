import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudCibersecurityComponent } from './cloud-cibersecurity.component';

describe('CloudCibersecurityComponent', () => {
  let component: CloudCibersecurityComponent;
  let fixture: ComponentFixture<CloudCibersecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudCibersecurityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudCibersecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
