import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareUpgradeProposalComponent } from './software-upgrade-proposal.component';

describe('SoftwareUpgradeProposalComponent', () => {
  let component: SoftwareUpgradeProposalComponent;
  let fixture: ComponentFixture<SoftwareUpgradeProposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwareUpgradeProposalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareUpgradeProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
