import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesOperateComponent } from './countries-operate.component';

describe('CountriesOperateComponent', () => {
  let component: CountriesOperateComponent;
  let fixture: ComponentFixture<CountriesOperateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountriesOperateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountriesOperateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
