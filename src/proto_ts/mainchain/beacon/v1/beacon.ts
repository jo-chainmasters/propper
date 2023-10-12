import { BinaryReader, BinaryWriter } from "../../../binary";
/** Beacon holds metadata about a registered beacon */
export interface Beacon {
  /** beacon_id is the id of the beacon */
  beaconId: bigint;
  /** moniker is the readable id of the beacon */
  moniker: string;
  /** name is the human friendly name of the beacon */
  name: string;
  /** last_timestamp_id is the current highest recorded timestamp id for the beacon */
  lastTimestampId: bigint;
  /** first_id_in_state is the lowest recorded timestamp id currently held in state for the beacon */
  firstIdInState: bigint;
  /** num_in_state is the current number of timestamps stored in state for the beacon */
  numInState: bigint;
  /** reg_time is the unix epoch of the beacon's registration time */
  regTime: bigint;
  /** owner is the owner address of the beacon */
  owner: string;
}
export interface BeaconProtoMsg {
  typeUrl: "/mainchain.beacon.v1.Beacon";
  value: Uint8Array;
}
/** Beacon holds metadata about a registered beacon */
export interface BeaconAmino {
  /** beacon_id is the id of the beacon */
  beacon_id: string;
  /** moniker is the readable id of the beacon */
  moniker: string;
  /** name is the human friendly name of the beacon */
  name: string;
  /** last_timestamp_id is the current highest recorded timestamp id for the beacon */
  last_timestamp_id: string;
  /** first_id_in_state is the lowest recorded timestamp id currently held in state for the beacon */
  first_id_in_state: string;
  /** num_in_state is the current number of timestamps stored in state for the beacon */
  num_in_state: string;
  /** reg_time is the unix epoch of the beacon's registration time */
  reg_time: string;
  /** owner is the owner address of the beacon */
  owner: string;
}
export interface BeaconAminoMsg {
  type: "/mainchain.beacon.v1.Beacon";
  value: BeaconAmino;
}
/** Beacon holds metadata about a registered beacon */
export interface BeaconSDKType {
  beacon_id: bigint;
  moniker: string;
  name: string;
  last_timestamp_id: bigint;
  first_id_in_state: bigint;
  num_in_state: bigint;
  reg_time: bigint;
  owner: string;
}
/** BeaconStorageLimit holds tata about the beacon's current in-state storage limit */
export interface BeaconStorageLimit {
  /** beacon_id is the id of the beacon */
  beaconId: bigint;
  /** in_state_limit is the current maximum number of timestmamps that will be held in state for the beacon */
  inStateLimit: bigint;
}
export interface BeaconStorageLimitProtoMsg {
  typeUrl: "/mainchain.beacon.v1.BeaconStorageLimit";
  value: Uint8Array;
}
/** BeaconStorageLimit holds tata about the beacon's current in-state storage limit */
export interface BeaconStorageLimitAmino {
  /** beacon_id is the id of the beacon */
  beacon_id: string;
  /** in_state_limit is the current maximum number of timestmamps that will be held in state for the beacon */
  in_state_limit: string;
}
export interface BeaconStorageLimitAminoMsg {
  type: "/mainchain.beacon.v1.BeaconStorageLimit";
  value: BeaconStorageLimitAmino;
}
/** BeaconStorageLimit holds tata about the beacon's current in-state storage limit */
export interface BeaconStorageLimitSDKType {
  beacon_id: bigint;
  in_state_limit: bigint;
}
/** BeaconTimestamp holds each hash submitted to a registered beacon */
export interface BeaconTimestamp {
  /** timestamp_id is the id of the timestamp */
  timestampId: bigint;
  /** submit_time is the unix epoch of the timestamp's record time */
  submitTime: bigint;
  /** hash is the actual data stored for the timestamp */
  hash: string;
}
export interface BeaconTimestampProtoMsg {
  typeUrl: "/mainchain.beacon.v1.BeaconTimestamp";
  value: Uint8Array;
}
/** BeaconTimestamp holds each hash submitted to a registered beacon */
export interface BeaconTimestampAmino {
  /** timestamp_id is the id of the timestamp */
  timestamp_id: string;
  /** submit_time is the unix epoch of the timestamp's record time */
  submit_time: string;
  /** hash is the actual data stored for the timestamp */
  hash: string;
}
export interface BeaconTimestampAminoMsg {
  type: "/mainchain.beacon.v1.BeaconTimestamp";
  value: BeaconTimestampAmino;
}
/** BeaconTimestamp holds each hash submitted to a registered beacon */
export interface BeaconTimestampSDKType {
  timestamp_id: bigint;
  submit_time: bigint;
  hash: string;
}
/** Params defines the parameters for the beacon module. */
export interface Params {
  /** fee_register is the cost to register a beacon */
  feeRegister: bigint;
  /** fee_record is the cost to record a single timestamp */
  feeRecord: bigint;
  /** fee_purchase_storage is the cost to purchase a single additional unit of in-state storage */
  feePurchaseStorage: bigint;
  /** denom is the expected denomination to pay for fees, e.g. nund */
  denom: string;
  /** default_storage_limit is the default in-state storage limit for all new beacons */
  defaultStorageLimit: bigint;
  /** max_storage_limit is the maximum in-state storage slots any one beacon can have */
  maxStorageLimit: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/mainchain.beacon.v1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the beacon module. */
export interface ParamsAmino {
  /** fee_register is the cost to register a beacon */
  fee_register: string;
  /** fee_record is the cost to record a single timestamp */
  fee_record: string;
  /** fee_purchase_storage is the cost to purchase a single additional unit of in-state storage */
  fee_purchase_storage: string;
  /** denom is the expected denomination to pay for fees, e.g. nund */
  denom: string;
  /** default_storage_limit is the default in-state storage limit for all new beacons */
  default_storage_limit: string;
  /** max_storage_limit is the maximum in-state storage slots any one beacon can have */
  max_storage_limit: string;
}
export interface ParamsAminoMsg {
  type: "/mainchain.beacon.v1.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the beacon module. */
export interface ParamsSDKType {
  fee_register: bigint;
  fee_record: bigint;
  fee_purchase_storage: bigint;
  denom: string;
  default_storage_limit: bigint;
  max_storage_limit: bigint;
}
function createBaseBeacon(): Beacon {
  return {
    beaconId: BigInt(0),
    moniker: "",
    name: "",
    lastTimestampId: BigInt(0),
    firstIdInState: BigInt(0),
    numInState: BigInt(0),
    regTime: BigInt(0),
    owner: ""
  };
}
export const Beacon = {
  typeUrl: "/mainchain.beacon.v1.Beacon",
  encode(message: Beacon, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.beaconId !== BigInt(0)) {
      writer.uint32(8).uint64(message.beaconId);
    }
    if (message.moniker !== "") {
      writer.uint32(18).string(message.moniker);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.lastTimestampId !== BigInt(0)) {
      writer.uint32(32).uint64(message.lastTimestampId);
    }
    if (message.firstIdInState !== BigInt(0)) {
      writer.uint32(40).uint64(message.firstIdInState);
    }
    if (message.numInState !== BigInt(0)) {
      writer.uint32(48).uint64(message.numInState);
    }
    if (message.regTime !== BigInt(0)) {
      writer.uint32(56).uint64(message.regTime);
    }
    if (message.owner !== "") {
      writer.uint32(66).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Beacon {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBeacon();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.beaconId = reader.uint64();
          break;
        case 2:
          message.moniker = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.lastTimestampId = reader.uint64();
          break;
        case 5:
          message.firstIdInState = reader.uint64();
          break;
        case 6:
          message.numInState = reader.uint64();
          break;
        case 7:
          message.regTime = reader.uint64();
          break;
        case 8:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Beacon>): Beacon {
    const message = createBaseBeacon();
    message.beaconId = object.beaconId !== undefined && object.beaconId !== null ? BigInt(object.beaconId.toString()) : BigInt(0);
    message.moniker = object.moniker ?? "";
    message.name = object.name ?? "";
    message.lastTimestampId = object.lastTimestampId !== undefined && object.lastTimestampId !== null ? BigInt(object.lastTimestampId.toString()) : BigInt(0);
    message.firstIdInState = object.firstIdInState !== undefined && object.firstIdInState !== null ? BigInt(object.firstIdInState.toString()) : BigInt(0);
    message.numInState = object.numInState !== undefined && object.numInState !== null ? BigInt(object.numInState.toString()) : BigInt(0);
    message.regTime = object.regTime !== undefined && object.regTime !== null ? BigInt(object.regTime.toString()) : BigInt(0);
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: BeaconAmino): Beacon {
    return {
      beaconId: BigInt(object.beacon_id),
      moniker: object.moniker,
      name: object.name,
      lastTimestampId: BigInt(object.last_timestamp_id),
      firstIdInState: BigInt(object.first_id_in_state),
      numInState: BigInt(object.num_in_state),
      regTime: BigInt(object.reg_time),
      owner: object.owner
    };
  },
  toAmino(message: Beacon): BeaconAmino {
    const obj: any = {};
    obj.beacon_id = message.beaconId ? message.beaconId.toString() : undefined;
    obj.moniker = message.moniker;
    obj.name = message.name;
    obj.last_timestamp_id = message.lastTimestampId ? message.lastTimestampId.toString() : undefined;
    obj.first_id_in_state = message.firstIdInState ? message.firstIdInState.toString() : undefined;
    obj.num_in_state = message.numInState ? message.numInState.toString() : undefined;
    obj.reg_time = message.regTime ? message.regTime.toString() : undefined;
    obj.owner = message.owner;
    return obj;
  },
  fromAminoMsg(object: BeaconAminoMsg): Beacon {
    return Beacon.fromAmino(object.value);
  },
  fromProtoMsg(message: BeaconProtoMsg): Beacon {
    return Beacon.decode(message.value);
  },
  toProto(message: Beacon): Uint8Array {
    return Beacon.encode(message).finish();
  },
  toProtoMsg(message: Beacon): BeaconProtoMsg {
    return {
      typeUrl: "/mainchain.beacon.v1.Beacon",
      value: Beacon.encode(message).finish()
    };
  }
};
function createBaseBeaconStorageLimit(): BeaconStorageLimit {
  return {
    beaconId: BigInt(0),
    inStateLimit: BigInt(0)
  };
}
export const BeaconStorageLimit = {
  typeUrl: "/mainchain.beacon.v1.BeaconStorageLimit",
  encode(message: BeaconStorageLimit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.beaconId !== BigInt(0)) {
      writer.uint32(8).uint64(message.beaconId);
    }
    if (message.inStateLimit !== BigInt(0)) {
      writer.uint32(16).uint64(message.inStateLimit);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BeaconStorageLimit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBeaconStorageLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.beaconId = reader.uint64();
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
  fromPartial(object: Partial<BeaconStorageLimit>): BeaconStorageLimit {
    const message = createBaseBeaconStorageLimit();
    message.beaconId = object.beaconId !== undefined && object.beaconId !== null ? BigInt(object.beaconId.toString()) : BigInt(0);
    message.inStateLimit = object.inStateLimit !== undefined && object.inStateLimit !== null ? BigInt(object.inStateLimit.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: BeaconStorageLimitAmino): BeaconStorageLimit {
    return {
      beaconId: BigInt(object.beacon_id),
      inStateLimit: BigInt(object.in_state_limit)
    };
  },
  toAmino(message: BeaconStorageLimit): BeaconStorageLimitAmino {
    const obj: any = {};
    obj.beacon_id = message.beaconId ? message.beaconId.toString() : undefined;
    obj.in_state_limit = message.inStateLimit ? message.inStateLimit.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: BeaconStorageLimitAminoMsg): BeaconStorageLimit {
    return BeaconStorageLimit.fromAmino(object.value);
  },
  fromProtoMsg(message: BeaconStorageLimitProtoMsg): BeaconStorageLimit {
    return BeaconStorageLimit.decode(message.value);
  },
  toProto(message: BeaconStorageLimit): Uint8Array {
    return BeaconStorageLimit.encode(message).finish();
  },
  toProtoMsg(message: BeaconStorageLimit): BeaconStorageLimitProtoMsg {
    return {
      typeUrl: "/mainchain.beacon.v1.BeaconStorageLimit",
      value: BeaconStorageLimit.encode(message).finish()
    };
  }
};
function createBaseBeaconTimestamp(): BeaconTimestamp {
  return {
    timestampId: BigInt(0),
    submitTime: BigInt(0),
    hash: ""
  };
}
export const BeaconTimestamp = {
  typeUrl: "/mainchain.beacon.v1.BeaconTimestamp",
  encode(message: BeaconTimestamp, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.timestampId !== BigInt(0)) {
      writer.uint32(8).uint64(message.timestampId);
    }
    if (message.submitTime !== BigInt(0)) {
      writer.uint32(16).uint64(message.submitTime);
    }
    if (message.hash !== "") {
      writer.uint32(26).string(message.hash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BeaconTimestamp {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBeaconTimestamp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestampId = reader.uint64();
          break;
        case 2:
          message.submitTime = reader.uint64();
          break;
        case 3:
          message.hash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<BeaconTimestamp>): BeaconTimestamp {
    const message = createBaseBeaconTimestamp();
    message.timestampId = object.timestampId !== undefined && object.timestampId !== null ? BigInt(object.timestampId.toString()) : BigInt(0);
    message.submitTime = object.submitTime !== undefined && object.submitTime !== null ? BigInt(object.submitTime.toString()) : BigInt(0);
    message.hash = object.hash ?? "";
    return message;
  },
  fromAmino(object: BeaconTimestampAmino): BeaconTimestamp {
    return {
      timestampId: BigInt(object.timestamp_id),
      submitTime: BigInt(object.submit_time),
      hash: object.hash
    };
  },
  toAmino(message: BeaconTimestamp): BeaconTimestampAmino {
    const obj: any = {};
    obj.timestamp_id = message.timestampId ? message.timestampId.toString() : undefined;
    obj.submit_time = message.submitTime ? message.submitTime.toString() : undefined;
    obj.hash = message.hash;
    return obj;
  },
  fromAminoMsg(object: BeaconTimestampAminoMsg): BeaconTimestamp {
    return BeaconTimestamp.fromAmino(object.value);
  },
  fromProtoMsg(message: BeaconTimestampProtoMsg): BeaconTimestamp {
    return BeaconTimestamp.decode(message.value);
  },
  toProto(message: BeaconTimestamp): Uint8Array {
    return BeaconTimestamp.encode(message).finish();
  },
  toProtoMsg(message: BeaconTimestamp): BeaconTimestampProtoMsg {
    return {
      typeUrl: "/mainchain.beacon.v1.BeaconTimestamp",
      value: BeaconTimestamp.encode(message).finish()
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
  typeUrl: "/mainchain.beacon.v1.Params",
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
      typeUrl: "/mainchain.beacon.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};