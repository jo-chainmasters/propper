import { BinaryReader, BinaryWriter } from "../../../binary";
/** MsgRegisterBeacon represents a message to register a new beacon */
export interface MsgRegisterBeacon {
  /** moniker is a short identifier for a beacon */
  moniker: string;
  /** name is a long name for a beacon */
  name: string;
  /** owner is the address of the owner of the beacon */
  owner: string;
}
export interface MsgRegisterBeaconProtoMsg {
  typeUrl: "/mainchain.beacon.v1.MsgRegisterBeacon";
  value: Uint8Array;
}
/** MsgRegisterBeacon represents a message to register a new beacon */
export interface MsgRegisterBeaconAmino {
  /** moniker is a short identifier for a beacon */
  moniker: string;
  /** name is a long name for a beacon */
  name: string;
  /** owner is the address of the owner of the beacon */
  owner: string;
}
export interface MsgRegisterBeaconAminoMsg {
  type: "/mainchain.beacon.v1.MsgRegisterBeacon";
  value: MsgRegisterBeaconAmino;
}
/** MsgRegisterBeacon represents a message to register a new beacon */
export interface MsgRegisterBeaconSDKType {
  moniker: string;
  name: string;
  owner: string;
}
/** MsgRegisterBeaconResponse defines the Msg/RegisterBeacon response type. */
export interface MsgRegisterBeaconResponse {
  /** beacon_id is the id of the new beacon */
  beaconId: bigint;
}
export interface MsgRegisterBeaconResponseProtoMsg {
  typeUrl: "/mainchain.beacon.v1.MsgRegisterBeaconResponse";
  value: Uint8Array;
}
/** MsgRegisterBeaconResponse defines the Msg/RegisterBeacon response type. */
export interface MsgRegisterBeaconResponseAmino {
  /** beacon_id is the id of the new beacon */
  beacon_id: string;
}
export interface MsgRegisterBeaconResponseAminoMsg {
  type: "/mainchain.beacon.v1.MsgRegisterBeaconResponse";
  value: MsgRegisterBeaconResponseAmino;
}
/** MsgRegisterBeaconResponse defines the Msg/RegisterBeacon response type. */
export interface MsgRegisterBeaconResponseSDKType {
  beacon_id: bigint;
}
/** MsgRecordBeaconTimestamp represents a message to record a timestamp for a registered beacon */
export interface MsgRecordBeaconTimestamp {
  /** beacon_id is the id of the beacon the timestamp is being submitted for */
  beaconId: bigint;
  /** hash is the hash or data being submitted */
  hash: string;
  /** submit_time is a unix epoch value of the submission time */
  submitTime: bigint;
  /** owner is the address of the owner of the beacon */
  owner: string;
}
export interface MsgRecordBeaconTimestampProtoMsg {
  typeUrl: "/mainchain.beacon.v1.MsgRecordBeaconTimestamp";
  value: Uint8Array;
}
/** MsgRecordBeaconTimestamp represents a message to record a timestamp for a registered beacon */
export interface MsgRecordBeaconTimestampAmino {
  /** beacon_id is the id of the beacon the timestamp is being submitted for */
  beacon_id: string;
  /** hash is the hash or data being submitted */
  hash: string;
  /** submit_time is a unix epoch value of the submission time */
  submit_time: string;
  /** owner is the address of the owner of the beacon */
  owner: string;
}
export interface MsgRecordBeaconTimestampAminoMsg {
  type: "/mainchain.beacon.v1.MsgRecordBeaconTimestamp";
  value: MsgRecordBeaconTimestampAmino;
}
/** MsgRecordBeaconTimestamp represents a message to record a timestamp for a registered beacon */
export interface MsgRecordBeaconTimestampSDKType {
  beacon_id: bigint;
  hash: string;
  submit_time: bigint;
  owner: string;
}
/** MsgRecordBeaconTimestampResponse defines the Msg/RecordBeacon response type. */
export interface MsgRecordBeaconTimestampResponse {
  /** beacon_id is the id of the beacon */
  beaconId: bigint;
  /** timestamp_id is the id of the new timestamp */
  timestampId: bigint;
}
export interface MsgRecordBeaconTimestampResponseProtoMsg {
  typeUrl: "/mainchain.beacon.v1.MsgRecordBeaconTimestampResponse";
  value: Uint8Array;
}
/** MsgRecordBeaconTimestampResponse defines the Msg/RecordBeacon response type. */
export interface MsgRecordBeaconTimestampResponseAmino {
  /** beacon_id is the id of the beacon */
  beacon_id: string;
  /** timestamp_id is the id of the new timestamp */
  timestamp_id: string;
}
export interface MsgRecordBeaconTimestampResponseAminoMsg {
  type: "/mainchain.beacon.v1.MsgRecordBeaconTimestampResponse";
  value: MsgRecordBeaconTimestampResponseAmino;
}
/** MsgRecordBeaconTimestampResponse defines the Msg/RecordBeacon response type. */
export interface MsgRecordBeaconTimestampResponseSDKType {
  beacon_id: bigint;
  timestamp_id: bigint;
}
export interface MsgPurchaseBeaconStateStorage {
  /** beacon_id is the id of the beacon the storage is being purchased for */
  beaconId: bigint;
  /** number is the number of state storage spaces to purchase */
  number: bigint;
  /** owner is the address of the owner of the beacon */
  owner: string;
}
export interface MsgPurchaseBeaconStateStorageProtoMsg {
  typeUrl: "/mainchain.beacon.v1.MsgPurchaseBeaconStateStorage";
  value: Uint8Array;
}
export interface MsgPurchaseBeaconStateStorageAmino {
  /** beacon_id is the id of the beacon the storage is being purchased for */
  beacon_id: string;
  /** number is the number of state storage spaces to purchase */
  number: string;
  /** owner is the address of the owner of the beacon */
  owner: string;
}
export interface MsgPurchaseBeaconStateStorageAminoMsg {
  type: "/mainchain.beacon.v1.MsgPurchaseBeaconStateStorage";
  value: MsgPurchaseBeaconStateStorageAmino;
}
export interface MsgPurchaseBeaconStateStorageSDKType {
  beacon_id: bigint;
  number: bigint;
  owner: string;
}
export interface MsgPurchaseBeaconStateStorageResponse {
  /** beacon_id is the id of the beacon the storage is being purchased for */
  beaconId: bigint;
  /** number_purchased is the number of state storage spaces purchased */
  numberPurchased: bigint;
  /** num_can_purchase is the number of remaining slots available for purchase */
  numCanPurchase: bigint;
}
export interface MsgPurchaseBeaconStateStorageResponseProtoMsg {
  typeUrl: "/mainchain.beacon.v1.MsgPurchaseBeaconStateStorageResponse";
  value: Uint8Array;
}
export interface MsgPurchaseBeaconStateStorageResponseAmino {
  /** beacon_id is the id of the beacon the storage is being purchased for */
  beacon_id: string;
  /** number_purchased is the number of state storage spaces purchased */
  number_purchased: string;
  /** num_can_purchase is the number of remaining slots available for purchase */
  num_can_purchase: string;
}
export interface MsgPurchaseBeaconStateStorageResponseAminoMsg {
  type: "/mainchain.beacon.v1.MsgPurchaseBeaconStateStorageResponse";
  value: MsgPurchaseBeaconStateStorageResponseAmino;
}
export interface MsgPurchaseBeaconStateStorageResponseSDKType {
  beacon_id: bigint;
  number_purchased: bigint;
  num_can_purchase: bigint;
}
function createBaseMsgRegisterBeacon(): MsgRegisterBeacon {
  return {
    moniker: "",
    name: "",
    owner: ""
  };
}
export const MsgRegisterBeacon = {
  typeUrl: "/mainchain.beacon.v1.MsgRegisterBeacon",
  encode(message: MsgRegisterBeacon, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.moniker !== "") {
      writer.uint32(10).string(message.moniker);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterBeacon {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterBeacon();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moniker = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRegisterBeacon>): MsgRegisterBeacon {
    const message = createBaseMsgRegisterBeacon();
    message.moniker = object.moniker ?? "";
    message.name = object.name ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: MsgRegisterBeaconAmino): MsgRegisterBeacon {
    return {
      moniker: object.moniker,
      name: object.name,
      owner: object.owner
    };
  },
  toAmino(message: MsgRegisterBeacon): MsgRegisterBeaconAmino {
    const obj: any = {};
    obj.moniker = message.moniker;
    obj.name = message.name;
    obj.owner = message.owner;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterBeaconAminoMsg): MsgRegisterBeacon {
    return MsgRegisterBeacon.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterBeaconProtoMsg): MsgRegisterBeacon {
    return MsgRegisterBeacon.decode(message.value);
  },
  toProto(message: MsgRegisterBeacon): Uint8Array {
    return MsgRegisterBeacon.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterBeacon): MsgRegisterBeaconProtoMsg {
    return {
      typeUrl: "/mainchain.beacon.v1.MsgRegisterBeacon",
      value: MsgRegisterBeacon.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterBeaconResponse(): MsgRegisterBeaconResponse {
  return {
    beaconId: BigInt(0)
  };
}
export const MsgRegisterBeaconResponse = {
  typeUrl: "/mainchain.beacon.v1.MsgRegisterBeaconResponse",
  encode(message: MsgRegisterBeaconResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.beaconId !== BigInt(0)) {
      writer.uint32(8).uint64(message.beaconId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterBeaconResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterBeaconResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.beaconId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRegisterBeaconResponse>): MsgRegisterBeaconResponse {
    const message = createBaseMsgRegisterBeaconResponse();
    message.beaconId = object.beaconId !== undefined && object.beaconId !== null ? BigInt(object.beaconId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgRegisterBeaconResponseAmino): MsgRegisterBeaconResponse {
    return {
      beaconId: BigInt(object.beacon_id)
    };
  },
  toAmino(message: MsgRegisterBeaconResponse): MsgRegisterBeaconResponseAmino {
    const obj: any = {};
    obj.beacon_id = message.beaconId ? message.beaconId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterBeaconResponseAminoMsg): MsgRegisterBeaconResponse {
    return MsgRegisterBeaconResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterBeaconResponseProtoMsg): MsgRegisterBeaconResponse {
    return MsgRegisterBeaconResponse.decode(message.value);
  },
  toProto(message: MsgRegisterBeaconResponse): Uint8Array {
    return MsgRegisterBeaconResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterBeaconResponse): MsgRegisterBeaconResponseProtoMsg {
    return {
      typeUrl: "/mainchain.beacon.v1.MsgRegisterBeaconResponse",
      value: MsgRegisterBeaconResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRecordBeaconTimestamp(): MsgRecordBeaconTimestamp {
  return {
    beaconId: BigInt(0),
    hash: "",
    submitTime: BigInt(0),
    owner: ""
  };
}
export const MsgRecordBeaconTimestamp = {
  typeUrl: "/mainchain.beacon.v1.MsgRecordBeaconTimestamp",
  encode(message: MsgRecordBeaconTimestamp, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.beaconId !== BigInt(0)) {
      writer.uint32(8).uint64(message.beaconId);
    }
    if (message.hash !== "") {
      writer.uint32(18).string(message.hash);
    }
    if (message.submitTime !== BigInt(0)) {
      writer.uint32(24).uint64(message.submitTime);
    }
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRecordBeaconTimestamp {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecordBeaconTimestamp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.beaconId = reader.uint64();
          break;
        case 2:
          message.hash = reader.string();
          break;
        case 3:
          message.submitTime = reader.uint64();
          break;
        case 4:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRecordBeaconTimestamp>): MsgRecordBeaconTimestamp {
    const message = createBaseMsgRecordBeaconTimestamp();
    message.beaconId = object.beaconId !== undefined && object.beaconId !== null ? BigInt(object.beaconId.toString()) : BigInt(0);
    message.hash = object.hash ?? "";
    message.submitTime = object.submitTime !== undefined && object.submitTime !== null ? BigInt(object.submitTime.toString()) : BigInt(0);
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: MsgRecordBeaconTimestampAmino): MsgRecordBeaconTimestamp {
    return {
      beaconId: BigInt(object.beacon_id),
      hash: object.hash,
      submitTime: BigInt(object.submit_time),
      owner: object.owner
    };
  },
  toAmino(message: MsgRecordBeaconTimestamp): MsgRecordBeaconTimestampAmino {
    const obj: any = {};
    obj.beacon_id = message.beaconId ? message.beaconId.toString() : undefined;
    obj.hash = message.hash;
    obj.submit_time = message.submitTime ? message.submitTime.toString() : undefined;
    obj.owner = message.owner;
    return obj;
  },
  fromAminoMsg(object: MsgRecordBeaconTimestampAminoMsg): MsgRecordBeaconTimestamp {
    return MsgRecordBeaconTimestamp.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRecordBeaconTimestampProtoMsg): MsgRecordBeaconTimestamp {
    return MsgRecordBeaconTimestamp.decode(message.value);
  },
  toProto(message: MsgRecordBeaconTimestamp): Uint8Array {
    return MsgRecordBeaconTimestamp.encode(message).finish();
  },
  toProtoMsg(message: MsgRecordBeaconTimestamp): MsgRecordBeaconTimestampProtoMsg {
    return {
      typeUrl: "/mainchain.beacon.v1.MsgRecordBeaconTimestamp",
      value: MsgRecordBeaconTimestamp.encode(message).finish()
    };
  }
};
function createBaseMsgRecordBeaconTimestampResponse(): MsgRecordBeaconTimestampResponse {
  return {
    beaconId: BigInt(0),
    timestampId: BigInt(0)
  };
}
export const MsgRecordBeaconTimestampResponse = {
  typeUrl: "/mainchain.beacon.v1.MsgRecordBeaconTimestampResponse",
  encode(message: MsgRecordBeaconTimestampResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.beaconId !== BigInt(0)) {
      writer.uint32(8).uint64(message.beaconId);
    }
    if (message.timestampId !== BigInt(0)) {
      writer.uint32(16).uint64(message.timestampId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRecordBeaconTimestampResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecordBeaconTimestampResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.beaconId = reader.uint64();
          break;
        case 2:
          message.timestampId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRecordBeaconTimestampResponse>): MsgRecordBeaconTimestampResponse {
    const message = createBaseMsgRecordBeaconTimestampResponse();
    message.beaconId = object.beaconId !== undefined && object.beaconId !== null ? BigInt(object.beaconId.toString()) : BigInt(0);
    message.timestampId = object.timestampId !== undefined && object.timestampId !== null ? BigInt(object.timestampId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgRecordBeaconTimestampResponseAmino): MsgRecordBeaconTimestampResponse {
    return {
      beaconId: BigInt(object.beacon_id),
      timestampId: BigInt(object.timestamp_id)
    };
  },
  toAmino(message: MsgRecordBeaconTimestampResponse): MsgRecordBeaconTimestampResponseAmino {
    const obj: any = {};
    obj.beacon_id = message.beaconId ? message.beaconId.toString() : undefined;
    obj.timestamp_id = message.timestampId ? message.timestampId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRecordBeaconTimestampResponseAminoMsg): MsgRecordBeaconTimestampResponse {
    return MsgRecordBeaconTimestampResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRecordBeaconTimestampResponseProtoMsg): MsgRecordBeaconTimestampResponse {
    return MsgRecordBeaconTimestampResponse.decode(message.value);
  },
  toProto(message: MsgRecordBeaconTimestampResponse): Uint8Array {
    return MsgRecordBeaconTimestampResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRecordBeaconTimestampResponse): MsgRecordBeaconTimestampResponseProtoMsg {
    return {
      typeUrl: "/mainchain.beacon.v1.MsgRecordBeaconTimestampResponse",
      value: MsgRecordBeaconTimestampResponse.encode(message).finish()
    };
  }
};
function createBaseMsgPurchaseBeaconStateStorage(): MsgPurchaseBeaconStateStorage {
  return {
    beaconId: BigInt(0),
    number: BigInt(0),
    owner: ""
  };
}
export const MsgPurchaseBeaconStateStorage = {
  typeUrl: "/mainchain.beacon.v1.MsgPurchaseBeaconStateStorage",
  encode(message: MsgPurchaseBeaconStateStorage, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.beaconId !== BigInt(0)) {
      writer.uint32(8).uint64(message.beaconId);
    }
    if (message.number !== BigInt(0)) {
      writer.uint32(16).uint64(message.number);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPurchaseBeaconStateStorage {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPurchaseBeaconStateStorage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.beaconId = reader.uint64();
          break;
        case 2:
          message.number = reader.uint64();
          break;
        case 3:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgPurchaseBeaconStateStorage>): MsgPurchaseBeaconStateStorage {
    const message = createBaseMsgPurchaseBeaconStateStorage();
    message.beaconId = object.beaconId !== undefined && object.beaconId !== null ? BigInt(object.beaconId.toString()) : BigInt(0);
    message.number = object.number !== undefined && object.number !== null ? BigInt(object.number.toString()) : BigInt(0);
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: MsgPurchaseBeaconStateStorageAmino): MsgPurchaseBeaconStateStorage {
    return {
      beaconId: BigInt(object.beacon_id),
      number: BigInt(object.number),
      owner: object.owner
    };
  },
  toAmino(message: MsgPurchaseBeaconStateStorage): MsgPurchaseBeaconStateStorageAmino {
    const obj: any = {};
    obj.beacon_id = message.beaconId ? message.beaconId.toString() : undefined;
    obj.number = message.number ? message.number.toString() : undefined;
    obj.owner = message.owner;
    return obj;
  },
  fromAminoMsg(object: MsgPurchaseBeaconStateStorageAminoMsg): MsgPurchaseBeaconStateStorage {
    return MsgPurchaseBeaconStateStorage.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPurchaseBeaconStateStorageProtoMsg): MsgPurchaseBeaconStateStorage {
    return MsgPurchaseBeaconStateStorage.decode(message.value);
  },
  toProto(message: MsgPurchaseBeaconStateStorage): Uint8Array {
    return MsgPurchaseBeaconStateStorage.encode(message).finish();
  },
  toProtoMsg(message: MsgPurchaseBeaconStateStorage): MsgPurchaseBeaconStateStorageProtoMsg {
    return {
      typeUrl: "/mainchain.beacon.v1.MsgPurchaseBeaconStateStorage",
      value: MsgPurchaseBeaconStateStorage.encode(message).finish()
    };
  }
};
function createBaseMsgPurchaseBeaconStateStorageResponse(): MsgPurchaseBeaconStateStorageResponse {
  return {
    beaconId: BigInt(0),
    numberPurchased: BigInt(0),
    numCanPurchase: BigInt(0)
  };
}
export const MsgPurchaseBeaconStateStorageResponse = {
  typeUrl: "/mainchain.beacon.v1.MsgPurchaseBeaconStateStorageResponse",
  encode(message: MsgPurchaseBeaconStateStorageResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.beaconId !== BigInt(0)) {
      writer.uint32(8).uint64(message.beaconId);
    }
    if (message.numberPurchased !== BigInt(0)) {
      writer.uint32(16).uint64(message.numberPurchased);
    }
    if (message.numCanPurchase !== BigInt(0)) {
      writer.uint32(24).uint64(message.numCanPurchase);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPurchaseBeaconStateStorageResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPurchaseBeaconStateStorageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.beaconId = reader.uint64();
          break;
        case 2:
          message.numberPurchased = reader.uint64();
          break;
        case 3:
          message.numCanPurchase = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgPurchaseBeaconStateStorageResponse>): MsgPurchaseBeaconStateStorageResponse {
    const message = createBaseMsgPurchaseBeaconStateStorageResponse();
    message.beaconId = object.beaconId !== undefined && object.beaconId !== null ? BigInt(object.beaconId.toString()) : BigInt(0);
    message.numberPurchased = object.numberPurchased !== undefined && object.numberPurchased !== null ? BigInt(object.numberPurchased.toString()) : BigInt(0);
    message.numCanPurchase = object.numCanPurchase !== undefined && object.numCanPurchase !== null ? BigInt(object.numCanPurchase.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgPurchaseBeaconStateStorageResponseAmino): MsgPurchaseBeaconStateStorageResponse {
    return {
      beaconId: BigInt(object.beacon_id),
      numberPurchased: BigInt(object.number_purchased),
      numCanPurchase: BigInt(object.num_can_purchase)
    };
  },
  toAmino(message: MsgPurchaseBeaconStateStorageResponse): MsgPurchaseBeaconStateStorageResponseAmino {
    const obj: any = {};
    obj.beacon_id = message.beaconId ? message.beaconId.toString() : undefined;
    obj.number_purchased = message.numberPurchased ? message.numberPurchased.toString() : undefined;
    obj.num_can_purchase = message.numCanPurchase ? message.numCanPurchase.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgPurchaseBeaconStateStorageResponseAminoMsg): MsgPurchaseBeaconStateStorageResponse {
    return MsgPurchaseBeaconStateStorageResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPurchaseBeaconStateStorageResponseProtoMsg): MsgPurchaseBeaconStateStorageResponse {
    return MsgPurchaseBeaconStateStorageResponse.decode(message.value);
  },
  toProto(message: MsgPurchaseBeaconStateStorageResponse): Uint8Array {
    return MsgPurchaseBeaconStateStorageResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgPurchaseBeaconStateStorageResponse): MsgPurchaseBeaconStateStorageResponseProtoMsg {
    return {
      typeUrl: "/mainchain.beacon.v1.MsgPurchaseBeaconStateStorageResponse",
      value: MsgPurchaseBeaconStateStorageResponse.encode(message).finish()
    };
  }
};