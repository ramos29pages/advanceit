import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasEmpresaComponent } from './noticias-empresa.component';

describe('NoticiasEmpresaComponent', () => {
  let component: NoticiasEmpresaComponent;
  let fixture: ComponentFixture<NoticiasEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoticiasEmpresaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiasEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
