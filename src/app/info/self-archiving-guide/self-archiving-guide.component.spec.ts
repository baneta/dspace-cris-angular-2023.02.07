import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfArchivingGuideComponent } from './self-archiving-guide.component';

describe('SelfArchivingGuideComponent', () => {
  let component: SelfArchivingGuideComponent;
  let fixture: ComponentFixture<SelfArchivingGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfArchivingGuideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelfArchivingGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
