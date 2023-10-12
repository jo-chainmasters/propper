import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType, Beacon, BeaconAmino, BeaconSDKType, BeaconTimestamp, BeaconTimestampAmino, BeaconTimestampSDKType } from "./beacon";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** QueryParamsRequest is the request type for the Query/Params RPC method */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/mainchain.beacon.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/mainchain.beacon.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method */
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/mainchain.beacon.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method */
export interface QueryParamsResponseAmino {
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/mainchain.beacon.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/** QueryBeaconRequest is the request type for the Query/Beacon RPC method */
export interface QueryBeaconRequest {
  /** beacon_id is the id of the beacon to query for */
  beaconId: bigint;
}
export interface QueryBeaconRequestProtoMsg {
  typeUrl: "/mainchain.beacon.v1.QueryBeaconRequest";
  value: Uint8Array;
}
/** QueryBeaconRequest is the request type for the Query/Beacon RPC method */
export interface QueryBeaconRequestAmino {
  /** beacon_id is the id of the beacon to query for */
  beacon_id: string;
}
export interface QueryBeaconRequestAminoMsg {
  type: "/mainchain.beacon.v1.QueryBeaconRequest";
  value: QueryBeaconRequestAmino;
}
/** QueryBeaconRequest is the request type for the Query/Beacon RPC method */
export interface QueryBeaconRequestSDKType {
  beacon_id: bigint;
}
/** QueryBeaconResponse is the response type for the Query/Beacon RPC method */
export interface QueryBeaconResponse {
  beacon: Beacon;
}
export interface QueryBeaconResponseProtoMsg {
  typeUrl: "/mainchain.beacon.v1.QueryBeaconResponse";
  value: Uint8Array;
}
/** QueryBeaconResponse is the response type for the Query/Beacon RPC method */
export interface QueryBeaconResponseAmino {
  beacon?: BeaconAmino;
}
export interface QueryBeaconResponseAminoMsg {
  type: "/mainchain.beacon.v1.QueryBeaconResponse";
  value: QueryBeaconResponseAmino;
}
/** QueryBeaconResponse is the response type for the Query/Beacon RPC method */
export interface QueryBeaconResponseSDKType {
  beacon: BeaconSDKType;
}
/** QueryBeaconTimestampRequest is the request type for the Query/BeaconTimestamp RPC method */
export interface QueryBeaconTimestampRequest {
  /** beacon_id is the id of the beacon to query for */
  beaconId: bigint;
  /** timestamp_id is the id of the timestamp to query for */
  timestampId: bigint;
}
export interface QueryBeaconTimestampRequestProtoMsg {
  typeUrl: "/mainchain.beacon.v1.QueryBeaconTimestampRequest";
  value: Uint8Array;
}
/** QueryBeaconTimestampRequest is the request type for the Query/BeaconTimestamp RPC method */
export interface QueryBeaconTimestampRequestAmino {
  /** beacon_id is the id of the beacon to query for */
  beacon_id: string;
  /** timestamp_id is the id of the timestamp to query for */
  timestamp_id: string;
}
export interface QueryBeaconTimestampRequestAminoMsg {
  type: "/mainchain.beacon.v1.QueryBeaconTimestampRequest";
  value: QueryBeaconTimestampRequestAmino;
}
/** QueryBeaconTimestampRequest is the request type for the Query/BeaconTimestamp RPC method */
export interface QueryBeaconTimestampRequestSDKType {
  beacon_id: bigint;
  timestamp_id: bigint;
}
/** QueryBeaconTimestampResponse is the response type for the Query/BeaconTimestamp RPC method */
export interface QueryBeaconTimestampResponse {
  timestamp: BeaconTimestamp;
  beaconId: bigint;
  owner: string;
}
export interface QueryBeaconTimestampResponseProtoMsg {
  typeUrl: "/mainchain.beacon.v1.QueryBeaconTimestampResponse";
  value: Uint8Array;
}
/** QueryBeaconTimestampResponse is the response type for the Query/BeaconTimestamp RPC method */
export interface QueryBeaconTimestampResponseAmino {
  timestamp?: BeaconTimestampAmino;
  beacon_id: string;
  owner: string;
}
export interface QueryBeaconTimestampResponseAminoMsg {
  type: "/mainchain.beacon.v1.QueryBeaconTimestampResponse";
  value: QueryBeaconTimestampResponseAmino;
}
/** QueryBeaconTimestampResponse is the response type for the Query/BeaconTimestamp RPC method */
export interface QueryBeaconTimestampResponseSDKType {
  timestamp: BeaconTimestampSDKType;
  beacon_id: bigint;
  owner: string;
}
/** QueryBeaconsFilteredRequest is the request type for the Query/BeaconsFiltered RPC method */
export interface QueryBeaconsFilteredRequest {
  /** moniker is the moniker of the beacon to search for */
  moniker: string;
  /** owner is an address to search for */
  owner: string;
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}
export interface QueryBeaconsFilteredRequestProtoMsg {
  typeUrl: "/mainchain.beacon.v1.QueryBeaconsFilteredRequest";
  value: Uint8Array;
}
/** QueryBeaconsFilteredRequest is the request type for the Query/BeaconsFiltered RPC method */
export interface QueryBeaconsFilteredRequestAmino {
  /** moniker is the moniker of the beacon to search for */
  moniker: string;
  /** owner is an address to search for */
  owner: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryBeaconsFilteredRequestAminoMsg {
  type: "/mainchain.beacon.v1.QueryBeaconsFilteredRequest";
  value: QueryBeaconsFilteredRequestAmino;
}
/** QueryBeaconsFilteredRequest is the request type for the Query/BeaconsFiltered RPC method */
export interface QueryBeaconsFilteredRequestSDKType {
  moniker: string;
  owner: string;
  pagination: PageRequestSDKType;
}
/** QueryBeaconsFilteredResponse is the response type for the Query/BeaconsFiltered RPC method */
export interface QueryBeaconsFilteredResponse {
  beacons: Beacon[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
export interface QueryBeaconsFilteredResponseProtoMsg {
  typeUrl: "/mainchain.beacon.v1.QueryBeaconsFilteredResponse";
  value: Uint8Array;
}
/** QueryBeaconsFilteredResponse is the response type for the Query/BeaconsFiltered RPC method */
export interface QueryBeaconsFilteredResponseAmino {
  beacons: BeaconAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryBeaconsFilteredResponseAminoMsg {
  type: "/mainchain.beacon.v1.QueryBeaconsFilteredResponse";
  value: QueryBeaconsFilteredResponseAmino;
}
/** QueryBeaconsFilteredResponse is the response type for the Query/BeaconsFiltered RPC method */
export interface QueryBeaconsFilteredResponseSDKType {
  beacons: BeaconSDKType[];
  pagination: PageResponseSDKType;
}
/** QueryBeaconStorageRequest is the request type for the Query/BeaconStorage RPC method */
export interface QueryBeaconStorageRequest {
  /** beacon_id is the id of the beacon to query for */
  beaconId: bigint;
}
export interface QueryBeaconStorageRequestProtoMsg {
  typeUrl: "/mainchain.beacon.v1.QueryBeaconStorageRequest";
  value: Uint8Array;
}
/** QueryBeaconStorageRequest is the request type for the Query/BeaconStorage RPC method */
export interface QueryBeaconStorageRequestAmino {
  /** beacon_id is the id of the beacon to query for */
  beacon_id: string;
}
export interface QueryBeaconStorageRequestAminoMsg {
  type: "/mainchain.beacon.v1.QueryBeaconStorageRequest";
  value: QueryBeaconStorageRequestAmino;
}
/** QueryBeaconStorageRequest is the request type for the Query/BeaconStorage RPC method */
export interface QueryBeaconStorageRequestSDKType {
  beacon_id: bigint;
}
/** QueryBeaconStorageResponse is the response type for the Query/BeaconStorage RPC method */
export interface QueryBeaconStorageResponse {
  beaconId: bigint;
  owner: string;
  /** current_limit is the current in-state storage limit for this beacon */
  currentLimit: bigint;
  /** current_used is the number of in-state slots currently used */
  currentUsed: bigint;
  /** max is the maximum possible slots a beacon can have, as defined by the beacon module params */
  max: bigint;
  /** max_purchasable is the maximum number a beacon can purchase without exceeding max */
  maxPurchasable: bigint;
}
export interface QueryBeaconStorageResponseProtoMsg {
  typeUrl: "/mainchain.beacon.v1.QueryBeaconStorageResponse";
  value: Uint8Array;
}
/** QueryBeaconStorageResponse is the response type for the Query/BeaconStorage RPC method */
export interface QueryBeaconStorageResponseAmino {
  beacon_id: string;
  owner: string;
  /** current_limit is the current in-state storage limit for this beacon */
  current_limit: string;
  /** current_used is the number of in-state slots currently used */
  current_used: string;
  /** max is the maximum possible slots a beacon can have, as defined by the beacon module params */
  max: string;
  /** max_purchasable is the maximum number a beacon can purchase without exceeding max */
  max_purchasable: string;
}
export interface QueryBeaconStorageResponseAminoMsg {
  type: "/mainchain.beacon.v1.QueryBeaconStorageResponse";
  value: QueryBeaconStorageResponseAmino;
}
/** QueryBeaconStorageResponse is the response type for the Query/BeaconStorage RPC method */
export interface QueryBeaconStorageResponseSDKType {
  beacon_id: bigint;
  owner: string;
  current_limit: bigint;
  current_used: bigint;
  max: bigint;
  max_purchasable: bigint;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/mainchain.beacon.v1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    return {};
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/mainchain.beacon.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/mainchain.beacon.v1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/mainchain.beacon.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBeaconRequest(): QueryBeaconRequest {
  return {
    beaconId: BigInt(0)
  };
}
export const QueryBeaconRequest = {
  typeUrl: "/mainchain.beacon.v1.QueryBeaconRequest",
  encode(message: QueryBeaconRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.beaconId !== BigInt(0)) {
      writer.uint32(8).uint64(message.beaconId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBeaconRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBeaconRequest();
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
  fromPartial(object: Partial<QueryBeaconRequest>): QueryBeaconRequest {
    const message = createBaseQueryBeaconRequest();
    message.beaconId = object.beaconId !== undefined && object.beaconId !== null ? BigInt(object.beaconId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryBeaconRequestAmino): QueryBeaconRequest {
    return {
      beaconId: BigInt(object.beacon_id)
    };
  },
  toAmino(message: QueryBeaconRequest): QueryBeaconRequestAmino {
    const obj: any = {};
    obj.beacon_id = message.beaconId ? message.beaconId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBeaconRequestAminoMsg): QueryBeaconRequest {
    return QueryBeaconRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBeaconRequestProtoMsg): QueryBeaconRequest {
    return QueryBeaconRequest.decode(message.value);
  },
  toProto(message: QueryBeaconRequest): Uint8Array {
    return QueryBeaconRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBeaconRequest): QueryBeaconRequestProtoMsg {
    return {
      typeUrl: "/mainchain.beacon.v1.QueryBeaconRequest",
      value: QueryBeaconRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBeaconResponse(): QueryBeaconResponse {
  return {
    beacon: Beacon.fromPartial({})
  };
}
export const QueryBeaconResponse = {
  typeUrl: "/mainchain.beacon.v1.QueryBeaconResponse",
  encode(message: QueryBeaconResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.beacon !== undefined) {
      Beacon.encode(message.beacon, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBeaconResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBeaconResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.beacon = Beacon.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryBeaconResponse>): QueryBeaconResponse {
    const message = createBaseQueryBeaconResponse();
    message.beacon = object.beacon !== undefined && object.beacon !== null ? Beacon.fromPartial(object.beacon) : undefined;
    return message;
  },
  fromAmino(object: QueryBeaconResponseAmino): QueryBeaconResponse {
    return {
      beacon: object?.beacon ? Beacon.fromAmino(object.beacon) : undefined
    };
  },
  toAmino(message: QueryBeaconResponse): QueryBeaconResponseAmino {
    const obj: any = {};
    obj.beacon = message.beacon ? Beacon.toAmino(message.beacon) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBeaconResponseAminoMsg): QueryBeaconResponse {
    return QueryBeaconResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBeaconResponseProtoMsg): QueryBeaconResponse {
    return QueryBeaconResponse.decode(message.value);
  },
  toProto(message: QueryBeaconResponse): Uint8Array {
    return QueryBeaconResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBeaconResponse): QueryBeaconResponseProtoMsg {
    return {
      typeUrl: "/mainchain.beacon.v1.QueryBeaconResponse",
      value: QueryBeaconResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBeaconTimestampRequest(): QueryBeaconTimestampRequest {
  return {
    beaconId: BigInt(0),
    timestampId: BigInt(0)
  };
}
export const QueryBeaconTimestampRequest = {
  typeUrl: "/mainchain.beacon.v1.QueryBeaconTimestampRequest",
  encode(message: QueryBeaconTimestampRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.beaconId !== BigInt(0)) {
      writer.uint32(8).uint64(message.beaconId);
    }
    if (message.timestampId !== BigInt(0)) {
      writer.uint32(16).uint64(message.timestampId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBeaconTimestampRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBeaconTimestampRequest();
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
  fromPartial(object: Partial<QueryBeaconTimestampRequest>): QueryBeaconTimestampRequest {
    const message = createBaseQueryBeaconTimestampRequest();
    message.beaconId = object.beaconId !== undefined && object.beaconId !== null ? BigInt(object.beaconId.toString()) : BigInt(0);
    message.timestampId = object.timestampId !== undefined && object.timestampId !== null ? BigInt(object.timestampId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryBeaconTimestampRequestAmino): QueryBeaconTimestampRequest {
    return {
      beaconId: BigInt(object.beacon_id),
      timestampId: BigInt(object.timestamp_id)
    };
  },
  toAmino(message: QueryBeaconTimestampRequest): QueryBeaconTimestampRequestAmino {
    const obj: any = {};
    obj.beacon_id = message.beaconId ? message.beaconId.toString() : undefined;
    obj.timestamp_id = message.timestampId ? message.timestampId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBeaconTimestampRequestAminoMsg): QueryBeaconTimestampRequest {
    return QueryBeaconTimestampRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBeaconTimestampRequestProtoMsg): QueryBeaconTimestampRequest {
    return QueryBeaconTimestampRequest.decode(message.value);
  },
  toProto(message: QueryBeaconTimestampRequest): Uint8Array {
    return QueryBeaconTimestampRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBeaconTimestampRequest): QueryBeaconTimestampRequestProtoMsg {
    return {
      typeUrl: "/mainchain.beacon.v1.QueryBeaconTimestampRequest",
      value: QueryBeaconTimestampRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBeaconTimestampResponse(): QueryBeaconTimestampResponse {
  return {
    timestamp: BeaconTimestamp.fromPartial({}),
    beaconId: BigInt(0),
    owner: ""
  };
}
export const QueryBeaconTimestampResponse = {
  typeUrl: "/mainchain.beacon.v1.QueryBeaconTimestampResponse",
  encode(message: QueryBeaconTimestampResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.timestamp !== undefined) {
      BeaconTimestamp.encode(message.timestamp, writer.uint32(10).fork()).ldelim();
    }
    if (message.beaconId !== BigInt(0)) {
      writer.uint32(16).uint64(message.beaconId);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBeaconTimestampResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBeaconTimestampResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = BeaconTimestamp.decode(reader, reader.uint32());
          break;
        case 2:
          message.beaconId = reader.uint64();
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
  fromPartial(object: Partial<QueryBeaconTimestampResponse>): QueryBeaconTimestampResponse {
    const message = createBaseQueryBeaconTimestampResponse();
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BeaconTimestamp.fromPartial(object.timestamp) : undefined;
    message.beaconId = object.beaconId !== undefined && object.beaconId !== null ? BigInt(object.beaconId.toString()) : BigInt(0);
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: QueryBeaconTimestampResponseAmino): QueryBeaconTimestampResponse {
    return {
      timestamp: object?.timestamp ? BeaconTimestamp.fromAmino(object.timestamp) : undefined,
      beaconId: BigInt(object.beacon_id),
      owner: object.owner
    };
  },
  toAmino(message: QueryBeaconTimestampResponse): QueryBeaconTimestampResponseAmino {
    const obj: any = {};
    obj.timestamp = message.timestamp ? BeaconTimestamp.toAmino(message.timestamp) : undefined;
    obj.beacon_id = message.beaconId ? message.beaconId.toString() : undefined;
    obj.owner = message.owner;
    return obj;
  },
  fromAminoMsg(object: QueryBeaconTimestampResponseAminoMsg): QueryBeaconTimestampResponse {
    return QueryBeaconTimestampResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBeaconTimestampResponseProtoMsg): QueryBeaconTimestampResponse {
    return QueryBeaconTimestampResponse.decode(message.value);
  },
  toProto(message: QueryBeaconTimestampResponse): Uint8Array {
    return QueryBeaconTimestampResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBeaconTimestampResponse): QueryBeaconTimestampResponseProtoMsg {
    return {
      typeUrl: "/mainchain.beacon.v1.QueryBeaconTimestampResponse",
      value: QueryBeaconTimestampResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBeaconsFilteredRequest(): QueryBeaconsFilteredRequest {
  return {
    moniker: "",
    owner: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryBeaconsFilteredRequest = {
  typeUrl: "/mainchain.beacon.v1.QueryBeaconsFilteredRequest",
  encode(message: QueryBeaconsFilteredRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.moniker !== "") {
      writer.uint32(10).string(message.moniker);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBeaconsFilteredRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBeaconsFilteredRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moniker = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryBeaconsFilteredRequest>): QueryBeaconsFilteredRequest {
    const message = createBaseQueryBeaconsFilteredRequest();
    message.moniker = object.moniker ?? "";
    message.owner = object.owner ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryBeaconsFilteredRequestAmino): QueryBeaconsFilteredRequest {
    return {
      moniker: object.moniker,
      owner: object.owner,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryBeaconsFilteredRequest): QueryBeaconsFilteredRequestAmino {
    const obj: any = {};
    obj.moniker = message.moniker;
    obj.owner = message.owner;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBeaconsFilteredRequestAminoMsg): QueryBeaconsFilteredRequest {
    return QueryBeaconsFilteredRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBeaconsFilteredRequestProtoMsg): QueryBeaconsFilteredRequest {
    return QueryBeaconsFilteredRequest.decode(message.value);
  },
  toProto(message: QueryBeaconsFilteredRequest): Uint8Array {
    return QueryBeaconsFilteredRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBeaconsFilteredRequest): QueryBeaconsFilteredRequestProtoMsg {
    return {
      typeUrl: "/mainchain.beacon.v1.QueryBeaconsFilteredRequest",
      value: QueryBeaconsFilteredRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBeaconsFilteredResponse(): QueryBeaconsFilteredResponse {
  return {
    beacons: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryBeaconsFilteredResponse = {
  typeUrl: "/mainchain.beacon.v1.QueryBeaconsFilteredResponse",
  encode(message: QueryBeaconsFilteredResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.beacons) {
      Beacon.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBeaconsFilteredResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBeaconsFilteredResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.beacons.push(Beacon.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryBeaconsFilteredResponse>): QueryBeaconsFilteredResponse {
    const message = createBaseQueryBeaconsFilteredResponse();
    message.beacons = object.beacons?.map(e => Beacon.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryBeaconsFilteredResponseAmino): QueryBeaconsFilteredResponse {
    return {
      beacons: Array.isArray(object?.beacons) ? object.beacons.map((e: any) => Beacon.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryBeaconsFilteredResponse): QueryBeaconsFilteredResponseAmino {
    const obj: any = {};
    if (message.beacons) {
      obj.beacons = message.beacons.map(e => e ? Beacon.toAmino(e) : undefined);
    } else {
      obj.beacons = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBeaconsFilteredResponseAminoMsg): QueryBeaconsFilteredResponse {
    return QueryBeaconsFilteredResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBeaconsFilteredResponseProtoMsg): QueryBeaconsFilteredResponse {
    return QueryBeaconsFilteredResponse.decode(message.value);
  },
  toProto(message: QueryBeaconsFilteredResponse): Uint8Array {
    return QueryBeaconsFilteredResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBeaconsFilteredResponse): QueryBeaconsFilteredResponseProtoMsg {
    return {
      typeUrl: "/mainchain.beacon.v1.QueryBeaconsFilteredResponse",
      value: QueryBeaconsFilteredResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBeaconStorageRequest(): QueryBeaconStorageRequest {
  return {
    beaconId: BigInt(0)
  };
}
export const QueryBeaconStorageRequest = {
  typeUrl: "/mainchain.beacon.v1.QueryBeaconStorageRequest",
  encode(message: QueryBeaconStorageRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.beaconId !== BigInt(0)) {
      writer.uint32(8).uint64(message.beaconId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBeaconStorageRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBeaconStorageRequest();
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
  fromPartial(object: Partial<QueryBeaconStorageRequest>): QueryBeaconStorageRequest {
    const message = createBaseQueryBeaconStorageRequest();
    message.beaconId = object.beaconId !== undefined && object.beaconId !== null ? BigInt(object.beaconId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryBeaconStorageRequestAmino): QueryBeaconStorageRequest {
    return {
      beaconId: BigInt(object.beacon_id)
    };
  },
  toAmino(message: QueryBeaconStorageRequest): QueryBeaconStorageRequestAmino {
    const obj: any = {};
    obj.beacon_id = message.beaconId ? message.beaconId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBeaconStorageRequestAminoMsg): QueryBeaconStorageRequest {
    return QueryBeaconStorageRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBeaconStorageRequestProtoMsg): QueryBeaconStorageRequest {
    return QueryBeaconStorageRequest.decode(message.value);
  },
  toProto(message: QueryBeaconStorageRequest): Uint8Array {
    return QueryBeaconStorageRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBeaconStorageRequest): QueryBeaconStorageRequestProtoMsg {
    return {
      typeUrl: "/mainchain.beacon.v1.QueryBeaconStorageRequest",
      value: QueryBeaconStorageRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBeaconStorageResponse(): QueryBeaconStorageResponse {
  return {
    beaconId: BigInt(0),
    owner: "",
    currentLimit: BigInt(0),
    currentUsed: BigInt(0),
    max: BigInt(0),
    maxPurchasable: BigInt(0)
  };
}
export const QueryBeaconStorageResponse = {
  typeUrl: "/mainchain.beacon.v1.QueryBeaconStorageResponse",
  encode(message: QueryBeaconStorageResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.beaconId !== BigInt(0)) {
      writer.uint32(8).uint64(message.beaconId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.currentLimit !== BigInt(0)) {
      writer.uint32(24).uint64(message.currentLimit);
    }
    if (message.currentUsed !== BigInt(0)) {
      writer.uint32(32).uint64(message.currentUsed);
    }
    if (message.max !== BigInt(0)) {
      writer.uint32(40).uint64(message.max);
    }
    if (message.maxPurchasable !== BigInt(0)) {
      writer.uint32(48).uint64(message.maxPurchasable);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBeaconStorageResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBeaconStorageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.beaconId = reader.uint64();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.currentLimit = reader.uint64();
          break;
        case 4:
          message.currentUsed = reader.uint64();
          break;
        case 5:
          message.max = reader.uint64();
          break;
        case 6:
          message.maxPurchasable = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryBeaconStorageResponse>): QueryBeaconStorageResponse {
    const message = createBaseQueryBeaconStorageResponse();
    message.beaconId = object.beaconId !== undefined && object.beaconId !== null ? BigInt(object.beaconId.toString()) : BigInt(0);
    message.owner = object.owner ?? "";
    message.currentLimit = object.currentLimit !== undefined && object.currentLimit !== null ? BigInt(object.currentLimit.toString()) : BigInt(0);
    message.currentUsed = object.currentUsed !== undefined && object.currentUsed !== null ? BigInt(object.currentUsed.toString()) : BigInt(0);
    message.max = object.max !== undefined && object.max !== null ? BigInt(object.max.toString()) : BigInt(0);
    message.maxPurchasable = object.maxPurchasable !== undefined && object.maxPurchasable !== null ? BigInt(object.maxPurchasable.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryBeaconStorageResponseAmino): QueryBeaconStorageResponse {
    return {
      beaconId: BigInt(object.beacon_id),
      owner: object.owner,
      currentLimit: BigInt(object.current_limit),
      currentUsed: BigInt(object.current_used),
      max: BigInt(object.max),
      maxPurchasable: BigInt(object.max_purchasable)
    };
  },
  toAmino(message: QueryBeaconStorageResponse): QueryBeaconStorageResponseAmino {
    const obj: any = {};
    obj.beacon_id = message.beaconId ? message.beaconId.toString() : undefined;
    obj.owner = message.owner;
    obj.current_limit = message.currentLimit ? message.currentLimit.toString() : undefined;
    obj.current_used = message.currentUsed ? message.currentUsed.toString() : undefined;
    obj.max = message.max ? message.max.toString() : undefined;
    obj.max_purchasable = message.maxPurchasable ? message.maxPurchasable.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBeaconStorageResponseAminoMsg): QueryBeaconStorageResponse {
    return QueryBeaconStorageResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBeaconStorageResponseProtoMsg): QueryBeaconStorageResponse {
    return QueryBeaconStorageResponse.decode(message.value);
  },
  toProto(message: QueryBeaconStorageResponse): Uint8Array {
    return QueryBeaconStorageResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBeaconStorageResponse): QueryBeaconStorageResponseProtoMsg {
    return {
      typeUrl: "/mainchain.beacon.v1.QueryBeaconStorageResponse",
      value: QueryBeaconStorageResponse.encode(message).finish()
    };
  }
};