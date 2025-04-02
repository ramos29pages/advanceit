import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetDisposalComponent } from './asset-disposal.component';

describe('AssetDisposalComponent', () => {
  let component: AssetDisposalComponent;
  let fixture: ComponentFixture<AssetDisposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetDisposalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetDisposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
