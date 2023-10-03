import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityPoolSpendProposalComponent } from './community-pool-spend-proposal.component';

describe('CommunityPoolSpendProposalComponent', () => {
  let component: CommunityPoolSpendProposalComponent;
  let fixture: ComponentFixture<CommunityPoolSpendProposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityPoolSpendProposalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunityPoolSpendProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
