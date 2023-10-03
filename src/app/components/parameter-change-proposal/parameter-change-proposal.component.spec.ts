import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParameterChangeProposalComponent } from './parameter-change-proposal.component';

describe('ParameterChangeProposalComponent', () => {
  let component: ParameterChangeProposalComponent;
  let fixture: ComponentFixture<ParameterChangeProposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParameterChangeProposalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParameterChangeProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
