import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoryPolicyComponent } from './repository-policy.component';

describe('RepositoryPolicyComponent', () => {
  let component: RepositoryPolicyComponent;
  let fixture: ComponentFixture<RepositoryPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepositoryPolicyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepositoryPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
