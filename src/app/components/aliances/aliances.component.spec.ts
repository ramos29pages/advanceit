import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AliancesComponent } from './aliances.component';

describe('AliancesComponent', () => {
  let component: AliancesComponent;
  let fixture: ComponentFixture<AliancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AliancesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AliancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
