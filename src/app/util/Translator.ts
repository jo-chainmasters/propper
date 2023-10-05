export class Translator {
  public static proposalType: {[key: string]: string} = {
    '/cosmos.gov.v1beta1.TextProposal': 'Text Proposal',
    '/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal': 'Blockchain Upgrade Proposal',
    '/cosmos.distribution.v1beta1.CommunityPoolSpendProposal': 'Community Pool Spend Proposal',
    '/cosmos.params.v1beta1.ParameterChangeProposal': 'Blockchain Parameter Change Proposal',
    '/ibc.core.client.v1.ClientUpdateProposal': 'IBC Client Update Proposal'
  };

  public static proposalStatus: {[key: string]: string} = {
    'PROPOSAL_STATUS_PASSED': 'Passed',
    'PROPOSAL_STATUS_REJECTED': 'Rejected',
    'PROPOSAL_STATUS_DEPOSIT_PERIOD': 'Deposit Phase',
    'PROPOSAL_STATUS_VOTING_PERIOD': 'Voting Phase'
  };

  // public static translate(map: string, key: string) {
  //   return Translator[map][key];
  // }
}
