import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientUpdateProposalComponent } from './client-update-proposal.component';

describe('ClientUpdateProposalComponent', () => {
  let component: ClientUpdateProposalComponent;
  let fixture: ComponentFixture<ClientUpdateProposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientUpdateProposalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientUpdateProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
