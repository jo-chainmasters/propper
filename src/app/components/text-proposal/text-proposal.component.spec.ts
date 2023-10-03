import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextProposalComponent } from './text-proposal.component';

describe('TextProposalComponent', () => {
  let component: TextProposalComponent;
  let fixture: ComponentFixture<TextProposalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextProposalComponent]
    });
    fixture = TestBed.createComponent(TextProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
