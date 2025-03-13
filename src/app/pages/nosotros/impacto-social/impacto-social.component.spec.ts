import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactoSocialComponent } from './impacto-social.component';

describe('ImpactoSocialComponent', () => {
  let component: ImpactoSocialComponent;
  let fixture: ComponentFixture<ImpactoSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImpactoSocialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpactoSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
