import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as mainchainBeaconV1TxRegistry from "./beacon/v1/tx.registry";
import * as mainchainEnterpriseV1TxRegistry from "./enterprise/v1/tx.registry";
import * as mainchainWrkchainV1TxRegistry from "./wrkchain/v1/tx.registry";
import * as mainchainBeaconV1TxAmino from "./beacon/v1/tx.amino";
import * as mainchainEnterpriseV1TxAmino from "./enterprise/v1/tx.amino";
import * as mainchainWrkchainV1TxAmino from "./wrkchain/v1/tx.amino";
export const mainchainAminoConverters = {
  ...mainchainBeaconV1TxAmino.AminoConverter,
  ...mainchainEnterpriseV1TxAmino.AminoConverter,
  ...mainchainWrkchainV1TxAmino.AminoConverter
};
export const mainchainProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...mainchainBeaconV1TxRegistry.registry, ...mainchainEnterpriseV1TxRegistry.registry, ...mainchainWrkchainV1TxRegistry.registry];
export const getSigningMainchainClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...mainchainProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...mainchainAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningMainchainClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningMainchainClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: (registry as any),
    aminoTypes
  });
  return client;
};