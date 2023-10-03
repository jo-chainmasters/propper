export abstract class BaseProposalComponent {
  public abstract send(): any;

  public getProposalId(txEvents: any[]) {
    for (let txEvent of txEvents) {
      if(txEvent.type === 'submit_proposal') {
        for (let attribute of txEvent.attributes) {
          if(attribute.key === 'proposal_id') {
            return attribute.value;
          }
        }
      }
    }
  }
}
