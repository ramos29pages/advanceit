import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicticInfoComponent } from './logictic-info.component';

describe('LogicticInfoComponent', () => {
  let component: LogicticInfoComponent;
  let fixture: ComponentFixture<LogicticInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogicticInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogicticInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
