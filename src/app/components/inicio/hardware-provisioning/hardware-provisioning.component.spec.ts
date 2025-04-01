import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwareProvisioningComponent } from './hardware-provisioning.component';

describe('HardwareProvisioningComponent', () => {
  let component: HardwareProvisioningComponent;
  let fixture: ComponentFixture<HardwareProvisioningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HardwareProvisioningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardwareProvisioningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
