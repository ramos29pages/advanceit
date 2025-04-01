import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseTechComponent } from './enterprise-tech.component';

describe('EnterpriseTechComponent', () => {
  let component: EnterpriseTechComponent;
  let fixture: ComponentFixture<EnterpriseTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnterpriseTechComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterpriseTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
