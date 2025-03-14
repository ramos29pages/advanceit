import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamFormLiteComponent } from './team-form-lite.component';

describe('TeamFormLiteComponent', () => {
  let component: TeamFormLiteComponent;
  let fixture: ComponentFixture<TeamFormLiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamFormLiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamFormLiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
