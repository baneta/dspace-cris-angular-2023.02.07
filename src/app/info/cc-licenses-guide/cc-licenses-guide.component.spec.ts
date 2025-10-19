import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcLicensesGuideComponent } from './cc-licenses-guide.component';

describe('CcLicensesGuideComponent', () => {
  let component: CcLicensesGuideComponent;
  let fixture: ComponentFixture<CcLicensesGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CcLicensesGuideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcLicensesGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
