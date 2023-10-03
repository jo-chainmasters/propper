import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProposalComponent } from './new-proposal.component';

describe('NewProposalComponent', () => {
  let component: NewProposalComponent;
  let fixture: ComponentFixture<NewProposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProposalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
