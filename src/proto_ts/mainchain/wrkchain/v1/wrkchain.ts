import { BinaryReader, BinaryWriter } from "../../../binary";
/** WrkChain holds metadata about a registered wrkchain */
export interface WrkChain {
  /** wrkchain_id is the id of the wrkchain */
  wrkchainId: bigint;
  /** moniker is the readable id of the wrkchain */
  moniker: string;
  /** name is the human friendly name of the wrkchain */
  name: string;
  /** genesis is an optional hash of the wrkchain's genesis block */
  genesis: string;
  /** type is the wrkchain type, e.g. geth, cosmos etc. */
  type: string;
  /** lastblock is the current highest recorded height for the wrkchain */
  lastblock: bigint;
  /** num_blocks is the current number of block hashes stored in state for the wrkchain */
  numBlocks: bigint;
  /** lowest_height is the lowest recorded height currently held in state for the wrkchain */
  lowestHeight: bigint;
  /** reg_time is the unix epoch of the wrkchain's registration time */
  regTime: bigint;
  /** owner is the owner address of the wrkchain */
  owner: string;
}
export interface WrkChainProtoMsg {
  typeUrl: "/mainchain.wrkchain.v1.WrkChain";
  value: Uint8Array;
}
/** WrkChain holds metadata about a registered wrkchain */
export interface WrkChainAmino {
  /** wrkchain_id is the id of the wrkchain */
  wrkchain_id: string;
  /** moniker is the readable id of the wrkchain */
  moniker: string;
  /** name is the human friendly name of the wrkchain */
  name: string;
  /** genesis is an optional hash of the wrkchain's genesis block */
  genesis: string;
  /** type is the wrkchain type, e.g. geth, cosmos etc. */
  type: string;
  /** lastblock is the current highest recorded height for the wrkchain */
  lastblock: string;
  /** num_blocks is the current number of block hashes stored in state for the wrkchain */
  num_blocks: string;
  /** lowest_height is the lowest recorded height currently held in state for the wrkchain */
  lowest_height: string;
  /** reg_time is the unix epoch of the wrkchain's registration time */
  reg_time: string;
  /** owner is the owner address of the wrkchain */
  owner: string;
}
export interface WrkChainAminoMsg {
  type: "/mainchain.wrkchain.v1.WrkChain";
  value: WrkChainAmino;
}
/** WrkChain holds metadata about a registered wrkchain */
export interface WrkChainSDKType {
  wrkchain_id: bigint;
  moniker: string;
  name: string;
  genesis: string;
  type: string;
  lastblock: bigint;
  num_blocks: bigint;
  lowest_height: bigint;
  reg_time: bigint;
  owner: string;
}
/** WrkChainStorageLimit holds tata about the wrkchain's current in-state storage limit */
export interface WrkChainStorageLimit {
  /** wrkchain_id is the id of the wrkchain */
  wrkchainId: bigint;
  /** in_state_limit is the current maximum number of blocks that will be held in state for the wrkchain */
  inStateLimit: bigint;
}
export interface WrkChainStorageLimitProtoMsg {
  typeUrl: "/mainchain.wrkchain.v1.WrkChainStorageLimit";
  value: Uint8Array;
}
/** WrkChainStorageLimit holds tata about the wrkchain's current in-state storage limit */
export interface WrkChainStorageLimitAmino {
  /** wrkchain_id is the id of the wrkchain */
  wrkchain_id: string;
  /** in_state_limit is the current maximum number of blocks that will be held in state for the wrkchain */
  in_state_limit: string;
}
export interface WrkChainStorageLimitAminoMsg {
  type: "/mainchain.wrkchain.v1.WrkChainStorageLimit";
  value: WrkChainStorageLimitAmino;
}
/** WrkChainStorageLimit holds tata about the wrkchain's current in-state storage limit */
export interface WrkChainStorageLimitSDKType {
  wrkchain_id: bigint;
  in_state_limit: bigint;
}
/** WrkChainBlock holds data about a wrkchain's block hash submission */
export interface WrkChainBlock {
  /** height is the block number/height of the stored wrkchain block hash */
  height: bigint;
  /** blockhash is the block hash of the stored wrkchain block */
  blockhash: string;
  /** parenthash is the optional hash of the parent block of the stored wrkchain block hash */
  parenthash: string;
  /** hash1 is an optional hash of any type of the stored wrkchain block hash */
  hash1: string;
  /** hash2 is an optional hash of any type of the stored wrkchain block hash */
  hash2: string;
  /** hash3 is an optional hash of any type of the stored wrkchain block hash */
  hash3: string;
  /** sub_time is the unix epoch of the wkrchain hash submission */
  subTime: bigint;
}
export interface WrkChainBlockProtoMsg {
  typeUrl: "/mainchain.wrkchain.v1.WrkChainBlock";
  value: Uint8Array;
}
/** WrkChainBlock holds data about a wrkchain's block hash submission */
export interface WrkChainBlockAmino {
  /** height is the block number/height of the stored wrkchain block hash */
  height: string;
  /** blockhash is the block hash of the stored wrkchain block */
  blockhash: string;
  /** parenthash is the optional hash of the parent block of the stored wrkchain block hash */
  parenthash: string;
  /** hash1 is an optional hash of any type of the stored wrkchain block hash */
  hash1: string;
  /** hash2 is an optional hash of any type of the stored wrkchain block hash */
  hash2: string;
  /** hash3 is an optional hash of any type of the stored wrkchain block hash */
  hash3: string;
  /** sub_time is the unix epoch of the wkrchain hash submission */
  sub_time: string;
}
export interface WrkChainBlockAminoMsg {
  type: "/mainchain.wrkchain.v1.WrkChainBlock";
  value: WrkChainBlockAmino;
}
/** WrkChainBlock holds data about a wrkchain's block hash submission */
export interface WrkChainBlockSDKType {
  height: bigint;
  blockhash: string;
  parenthash: string;
  hash1: string;
  hash2: string;
  hash3: string;
  sub_time: bigint;
}
/** Params defines the parameters for the wrkchain module. */
export interface Params {
  /** fee_register is the cost to register a wkrchain */
  feeRegister: bigint;
  /** fee_record is the cost to record a single wkrchain hash */
  feeRecord: bigint;
  /** fee_purchase_storage is the cost to purchase a single additional unit of in-state storage */
  feePurchaseStorage: bigint;
  /** denom is the expected denomination to pay for fees, e.g. nund */
  denom: string;
  /** default_storage_limit is the default in-state storage limit for all new wkrchains */
  defaultStorageLimit: bigint;
  /** max_storage_limit is the maximum in-state storage slots any one wkrchain can have */
  maxStorageLimit: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/mainchain.wrkchain.v1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the wrkchain module. */
export interface ParamsAmino {
  /** fee_register is the cost to register a wkrchain */
  fee_register: string;
  /** fee_record is the cost to record a single wkrchain hash */
  fee_record: string;
  /** fee_purchase_storage is the cost to purchase a single additional unit of in-state storage */
  fee_purchase_storage: string;
  /** denom is the expected denomination to pay for fees, e.g. nund */
  denom: string;
  /** default_storage_limit is the default in-state storage limit for all new wkrchains */
  default_storage_limit: string;
  /** max_storage_limit is the maximum in-state storage slots any one wkrchain can have */
  max_storage_limit: string;
}
export interface ParamsAminoMsg {
  type: "/mainchain.wrkchain.v1.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the wrkchain module. */
export interface ParamsSDKType {
  fee_register: bigint;
  fee_record: bigint;
  fee_purchase_storage: bigint;
  denom: string;
  default_storage_limit: bigint;
  max_storage_limit: bigint;
}
function createBaseWrkChain(): WrkChain {
  return {
    wrkchainId: BigInt(0),
    moniker: "",
    name: "",
    genesis: "",
    type: "",
    lastblock: BigInt(0),
    numBlocks: BigInt(0),
    lowestHeight: BigInt(0),
    regTime: BigInt(0),
    owner: ""
  };
}
export const WrkChain = {
  typeUrl: "/mainchain.wrkchain.v1.WrkChain",
  encode(message: WrkChain, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.wrkchainId !== BigInt(0)) {
      writer.uint32(8).uint64(message.wrkchainId);
    }
    if (message.moniker !== "") {
      writer.uint32(18).string(message.moniker);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.genesis !== "") {
      writer.uint32(34).string(message.genesis);
    }
    if (message.type !== "") {
      writer.uint32(42).string(message.type);
    }
    if (message.lastblock !== BigInt(0)) {
      writer.uint32(48).uint64(message.lastblock);
    }
    if (message.numBlocks !== BigInt(0)) {
      writer.uint32(56).uint64(message.numBlocks);
    }
    if (message.lowestHeight !== BigInt(0)) {
      writer.uint32(64).uint64(message.lowestHeight);
    }
    if (message.regTime !== BigInt(0)) {
      writer.uint32(72).uint64(message.regTime);
    }
    if (message.owner !== "") {
      writer.uint32(82).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WrkChain {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWrkChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.wrkchainId = reader.uint64();
          break;
        case 2:
          message.moniker = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.genesis = reader.string();
          break;
        case 5:
          message.type = reader.string();
          break;
        case 6:
          message.lastblock = reader.uint64();
          break;
        case 7:
          message.numBlocks = reader.uint64();
          break;
        case 8:
          message.lowestHeight = reader.uint64();
          break;
        case 9:
          message.regTime = reader.uint64();
          break;
        case 10:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<WrkChain>): WrkChain {
    const message = createBaseWrkChain();
    message.wrkchainId = object.wrkchainId !== undefined && object.wrkchainId !== null ? BigInt(object.wrkchainId.toString()) : BigInt(0);
    message.moniker = object.moniker ?? "";
    message.name = object.name ?? "";
    message.genesis = object.genesis ?? "";
    message.type = object.type ?? "";
    message.lastblock = object.lastblock !== undefined && object.lastblock !== null ? BigInt(object.lastblock.toString()) : BigInt(0);
    message.numBlocks = object.numBlocks !== undefined && object.numBlocks !== null ? BigInt(object.numBlocks.toString()) : BigInt(0);
    message.lowestHeight = object.lowestHeight !== undefined && object.lowestHeight !== null ? BigInt(object.lowestHeight.toString()) : BigInt(0);
    message.regTime = object.regTime !== undefined && object.regTime !== null ? BigInt(object.regTime.toString()) : BigInt(0);
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: WrkChainAmino): WrkChain {
    return {
      wrkchainId: BigInt(object.wrkchain_id),
      moniker: object.moniker,
      name: object.name,
      genesis: object.genesis,
      type: object.type,
      lastblock: BigInt(object.lastblock),
      numBlocks: BigInt(object.num_blocks),
      lowestHeight: BigInt(object.lowest_height),
      regTime: BigInt(object.reg_time),
      owner: object.owner
    };
  },
  toAmino(message: WrkChain): WrkChainAmino {
    const obj: any = {};
    obj.wrkchain_id = message.wrkchainId ? message.wrkchainId.toString() : undefined;
    obj.moniker = message.moniker;
    obj.name = message.name;
    obj.genesis = message.genesis;
    obj.type = message.type;
    obj.lastblock = message.lastblock ? message.lastblock.toString() : undefined;
    obj.num_blocks = message.numBlocks ? message.numBlocks.toString() : undefined;
    obj.lowest_height = message.lowestHeight ? message.lowestHeight.toString() : undefined;
    obj.reg_time = message.regTime ? message.regTime.toString() : undefined;
    obj.owner = message.owner;
    return obj;
  },
  fromAminoMsg(object: WrkChainAminoMsg): WrkChain {
    return WrkChain.fromAmino(object.value);
  },
  fromProtoMsg(message: WrkChainProtoMsg): WrkChain {
    return WrkChain.decode(message.value);
  },
  toProto(message: WrkChain): Uint8Array {
    return WrkChain.encode(message).finish();
  },
  toProtoMsg(message: WrkChain): WrkChainProtoMsg {
    return {
      typeUrl: "/mainchain.wrkchain.v1.WrkChain",
      value: WrkChain.encode(message).finish()
    };
  }
};
function createBaseWrkChainStorageLimit(): WrkChainStorageLimit {
  return {
    wrkchainId: BigInt(0),
    inStateLimit: BigInt(0)
  };
}
export const WrkChainStorageLimit = {
  typeUrl: "/mainchain.wrkchain.v1.WrkChainStorageLimit",
  encode(message: WrkChainStorageLimit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.wrkchainId !== BigInt(0)) {
      writer.uint32(8).uint64(message.wrkchainId);
    }
    if (message.inStateLimit !== BigInt(0)) {
      writer.uint32(16).uint64(message.inStateLimit);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WrkChainStorageLimit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWrkChainStorageLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.wrkchainId = reader.uint64();
          break;
        case 2:
          message.inStateLimit = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<WrkChainStorageLimit>): WrkChainStorageLimit {
    const message = createBaseWrkChainStorageLimit();
    message.wrkchainId = object.wrkchainId !== undefined && object.wrkchainId !== null ? BigInt(object.wrkchainId.toString()) : BigInt(0);
    message.inStateLimit = object.inStateLimit !== undefined && object.inStateLimit !== null ? BigInt(object.inStateLimit.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: WrkChainStorageLimitAmino): WrkChainStorageLimit {
    return {
      wrkchainId: BigInt(object.wrkchain_id),
      inStateLimit: BigInt(object.in_state_limit)
    };
  },
  toAmino(message: WrkChainStorageLimit): WrkChainStorageLimitAmino {
    const obj: any = {};
    obj.wrkchain_id = message.wrkchainId ? message.wrkchainId.toString() : undefined;
    obj.in_state_limit = message.inStateLimit ? message.inStateLimit.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: WrkChainStorageLimitAminoMsg): WrkChainStorageLimit {
    return WrkChainStorageLimit.fromAmino(object.value);
  },
  fromProtoMsg(message: WrkChainStorageLimitProtoMsg): WrkChainStorageLimit {
    return WrkChainStorageLimit.decode(message.value);
  },
  toProto(message: WrkChainStorageLimit): Uint8Array {
    return WrkChainStorageLimit.encode(message).finish();
  },
  toProtoMsg(message: WrkChainStorageLimit): WrkChainStorageLimitProtoMsg {
    return {
      typeUrl: "/mainchain.wrkchain.v1.WrkChainStorageLimit",
      value: WrkChainStorageLimit.encode(message).finish()
    };
  }
};
function createBaseWrkChainBlock(): WrkChainBlock {
  return {
    height: BigInt(0),
    blockhash: "",
    parenthash: "",
    hash1: "",
    hash2: "",
    hash3: "",
    subTime: BigInt(0)
  };
}
export const WrkChainBlock = {
  typeUrl: "/mainchain.wrkchain.v1.WrkChainBlock",
  encode(message: WrkChainBlock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.blockhash !== "") {
      writer.uint32(18).string(message.blockhash);
    }
    if (message.parenthash !== "") {
      writer.uint32(26).string(message.parenthash);
    }
    if (message.hash1 !== "") {
      writer.uint32(34).string(message.hash1);
    }
    if (message.hash2 !== "") {
      writer.uint32(42).string(message.hash2);
    }
    if (message.hash3 !== "") {
      writer.uint32(50).string(message.hash3);
    }
    if (message.subTime !== BigInt(0)) {
      writer.uint32(56).uint64(message.subTime);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WrkChainBlock {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWrkChainBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.uint64();
          break;
        case 2:
          message.blockhash = reader.string();
          break;
        case 3:
          message.parenthash = reader.string();
          break;
        case 4:
          message.hash1 = reader.string();
          break;
        case 5:
          message.hash2 = reader.string();
          break;
        case 6:
          message.hash3 = reader.string();
          break;
        case 7:
          message.subTime = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<WrkChainBlock>): WrkChainBlock {
    const message = createBaseWrkChainBlock();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.blockhash = object.blockhash ?? "";
    message.parenthash = object.parenthash ?? "";
    message.hash1 = object.hash1 ?? "";
    message.hash2 = object.hash2 ?? "";
    message.hash3 = object.hash3 ?? "";
    message.subTime = object.subTime !== undefined && object.subTime !== null ? BigInt(object.subTime.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: WrkChainBlockAmino): WrkChainBlock {
    return {
      height: BigInt(object.height),
      blockhash: object.blockhash,
      parenthash: object.parenthash,
      hash1: object.hash1,
      hash2: object.hash2,
      hash3: object.hash3,
      subTime: BigInt(object.sub_time)
    };
  },
  toAmino(message: WrkChainBlock): WrkChainBlockAmino {
    const obj: any = {};
    obj.height = message.height ? message.height.toString() : undefined;
    obj.blockhash = message.blockhash;
    obj.parenthash = message.parenthash;
    obj.hash1 = message.hash1;
    obj.hash2 = message.hash2;
    obj.hash3 = message.hash3;
    obj.sub_time = message.subTime ? message.subTime.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: WrkChainBlockAminoMsg): WrkChainBlock {
    return WrkChainBlock.fromAmino(object.value);
  },
  fromProtoMsg(message: WrkChainBlockProtoMsg): WrkChainBlock {
    return WrkChainBlock.decode(message.value);
  },
  toProto(message: WrkChainBlock): Uint8Array {
    return WrkChainBlock.encode(message).finish();
  },
  toProtoMsg(message: WrkChainBlock): WrkChainBlockProtoMsg {
    return {
      typeUrl: "/mainchain.wrkchain.v1.WrkChainBlock",
      value: WrkChainBlock.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    feeRegister: BigInt(0),
    feeRecord: BigInt(0),
    feePurchaseStorage: BigInt(0),
    denom: "",
    defaultStorageLimit: BigInt(0),
    maxStorageLimit: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/mainchain.wrkchain.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feeRegister !== BigInt(0)) {
      writer.uint32(8).uint64(message.feeRegister);
    }
    if (message.feeRecord !== BigInt(0)) {
      writer.uint32(16).uint64(message.feeRecord);
    }
    if (message.feePurchaseStorage !== BigInt(0)) {
      writer.uint32(24).uint64(message.feePurchaseStorage);
    }
    if (message.denom !== "") {
      writer.uint32(34).string(message.denom);
    }
    if (message.defaultStorageLimit !== BigInt(0)) {
      writer.uint32(40).uint64(message.defaultStorageLimit);
    }
    if (message.maxStorageLimit !== BigInt(0)) {
      writer.uint32(48).uint64(message.maxStorageLimit);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeRegister = reader.uint64();
          break;
        case 2:
          message.feeRecord = reader.uint64();
          break;
        case 3:
          message.feePurchaseStorage = reader.uint64();
          break;
        case 4:
          message.denom = reader.string();
          break;
        case 5:
          message.defaultStorageLimit = reader.uint64();
          break;
        case 6:
          message.maxStorageLimit = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.feeRegister = object.feeRegister !== undefined && object.feeRegister !== null ? BigInt(object.feeRegister.toString()) : BigInt(0);
    message.feeRecord = object.feeRecord !== undefined && object.feeRecord !== null ? BigInt(object.feeRecord.toString()) : BigInt(0);
    message.feePurchaseStorage = object.feePurchaseStorage !== undefined && object.feePurchaseStorage !== null ? BigInt(object.feePurchaseStorage.toString()) : BigInt(0);
    message.denom = object.denom ?? "";
    message.defaultStorageLimit = object.defaultStorageLimit !== undefined && object.defaultStorageLimit !== null ? BigInt(object.defaultStorageLimit.toString()) : BigInt(0);
    message.maxStorageLimit = object.maxStorageLimit !== undefined && object.maxStorageLimit !== null ? BigInt(object.maxStorageLimit.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      feeRegister: BigInt(object.fee_register),
      feeRecord: BigInt(object.fee_record),
      feePurchaseStorage: BigInt(object.fee_purchase_storage),
      denom: object.denom,
      defaultStorageLimit: BigInt(object.default_storage_limit),
      maxStorageLimit: BigInt(object.max_storage_limit)
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.fee_register = message.feeRegister ? message.feeRegister.toString() : undefined;
    obj.fee_record = message.feeRecord ? message.feeRecord.toString() : undefined;
    obj.fee_purchase_storage = message.feePurchaseStorage ? message.feePurchaseStorage.toString() : undefined;
    obj.denom = message.denom;
    obj.default_storage_limit = message.defaultStorageLimit ? message.defaultStorageLimit.toString() : undefined;
    obj.max_storage_limit = message.maxStorageLimit ? message.maxStorageLimit.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/mainchain.wrkchain.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};