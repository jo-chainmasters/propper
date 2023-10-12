import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { PurchaseOrderStatus, WhitelistAction, purchaseOrderStatusFromJSON, whitelistActionFromJSON } from "./enterprise";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** MsgUndPurchaseOrder represents a message to raise a new purchase order */
export interface MsgUndPurchaseOrder {
  /** purchaser is the address of the account raising the purchase order */
  purchaser: string;
  /** amount is the amount of eFUND in nund */
  amount: Coin;
}
export interface MsgUndPurchaseOrderProtoMsg {
  typeUrl: "/mainchain.enterprise.v1.MsgUndPurchaseOrder";
  value: Uint8Array;
}
/** MsgUndPurchaseOrder represents a message to raise a new purchase order */
export interface MsgUndPurchaseOrderAmino {
  /** purchaser is the address of the account raising the purchase order */
  purchaser: string;
  /** amount is the amount of eFUND in nund */
  amount?: CoinAmino;
}
export interface MsgUndPurchaseOrderAminoMsg {
  type: "/mainchain.enterprise.v1.MsgUndPurchaseOrder";
  value: MsgUndPurchaseOrderAmino;
}
/** MsgUndPurchaseOrder represents a message to raise a new purchase order */
export interface MsgUndPurchaseOrderSDKType {
  purchaser: string;
  amount: CoinSDKType;
}
/** MsgUndPurchaseOrderResponse defines the Msg/UndPurchaseOrder response type. */
export interface MsgUndPurchaseOrderResponse {
  /** MsgUndPurchaseOrderResponse defines the Msg/UndPurchaseOrder response type. */
  purchaseOrderId: bigint;
}
export interface MsgUndPurchaseOrderResponseProtoMsg {
  typeUrl: "/mainchain.enterprise.v1.MsgUndPurchaseOrderResponse";
  value: Uint8Array;
}
/** MsgUndPurchaseOrderResponse defines the Msg/UndPurchaseOrder response type. */
export interface MsgUndPurchaseOrderResponseAmino {
  /** MsgUndPurchaseOrderResponse defines the Msg/UndPurchaseOrder response type. */
  purchase_order_id: string;
}
export interface MsgUndPurchaseOrderResponseAminoMsg {
  type: "/mainchain.enterprise.v1.MsgUndPurchaseOrderResponse";
  value: MsgUndPurchaseOrderResponseAmino;
}
/** MsgUndPurchaseOrderResponse defines the Msg/UndPurchaseOrder response type. */
export interface MsgUndPurchaseOrderResponseSDKType {
  purchase_order_id: bigint;
}
/** MsgProcessUndPurchaseOrder represents a message to processed a raised purchase order */
export interface MsgProcessUndPurchaseOrder {
  /** purchase_order_id is the ID of the purchase order being raised */
  purchaseOrderId: bigint;
  /** decision is an enumerated PurchaseOrderStatus representing, for example accepted/rejected */
  decision: PurchaseOrderStatus;
  /** signer is the address of the authorised decision maker */
  signer: string;
}
export interface MsgProcessUndPurchaseOrderProtoMsg {
  typeUrl: "/mainchain.enterprise.v1.MsgProcessUndPurchaseOrder";
  value: Uint8Array;
}
/** MsgProcessUndPurchaseOrder represents a message to processed a raised purchase order */
export interface MsgProcessUndPurchaseOrderAmino {
  /** purchase_order_id is the ID of the purchase order being raised */
  purchase_order_id: string;
  /** decision is an enumerated PurchaseOrderStatus representing, for example accepted/rejected */
  decision: PurchaseOrderStatus;
  /** signer is the address of the authorised decision maker */
  signer: string;
}
export interface MsgProcessUndPurchaseOrderAminoMsg {
  type: "/mainchain.enterprise.v1.MsgProcessUndPurchaseOrder";
  value: MsgProcessUndPurchaseOrderAmino;
}
/** MsgProcessUndPurchaseOrder represents a message to processed a raised purchase order */
export interface MsgProcessUndPurchaseOrderSDKType {
  purchase_order_id: bigint;
  decision: PurchaseOrderStatus;
  signer: string;
}
/** MsgProcessUndPurchaseOrderResponse defines the Msg/ProcessUndPurchaseOrder response type. */
export interface MsgProcessUndPurchaseOrderResponse {}
export interface MsgProcessUndPurchaseOrderResponseProtoMsg {
  typeUrl: "/mainchain.enterprise.v1.MsgProcessUndPurchaseOrderResponse";
  value: Uint8Array;
}
/** MsgProcessUndPurchaseOrderResponse defines the Msg/ProcessUndPurchaseOrder response type. */
export interface MsgProcessUndPurchaseOrderResponseAmino {}
export interface MsgProcessUndPurchaseOrderResponseAminoMsg {
  type: "/mainchain.enterprise.v1.MsgProcessUndPurchaseOrderResponse";
  value: MsgProcessUndPurchaseOrderResponseAmino;
}
/** MsgProcessUndPurchaseOrderResponse defines the Msg/ProcessUndPurchaseOrder response type. */
export interface MsgProcessUndPurchaseOrderResponseSDKType {}
/**
 * MsgWhitelistAddress represents a message to processed an address whitelist action.
 * only addresses whitelisted by an authorised decision maker can raise new purchase orders
 */
export interface MsgWhitelistAddress {
  /** address is the address for which the action is being executed */
  address: string;
  /** signer is the address of the authorised decision maker */
  signer: string;
  /** whitelist_action is the action being executed, and is either add or remove. */
  whitelistAction: WhitelistAction;
}
export interface MsgWhitelistAddressProtoMsg {
  typeUrl: "/mainchain.enterprise.v1.MsgWhitelistAddress";
  value: Uint8Array;
}
/**
 * MsgWhitelistAddress represents a message to processed an address whitelist action.
 * only addresses whitelisted by an authorised decision maker can raise new purchase orders
 */
export interface MsgWhitelistAddressAmino {
  /** address is the address for which the action is being executed */
  address: string;
  /** signer is the address of the authorised decision maker */
  signer: string;
  /** whitelist_action is the action being executed, and is either add or remove. */
  whitelist_action: WhitelistAction;
}
export interface MsgWhitelistAddressAminoMsg {
  type: "/mainchain.enterprise.v1.MsgWhitelistAddress";
  value: MsgWhitelistAddressAmino;
}
/**
 * MsgWhitelistAddress represents a message to processed an address whitelist action.
 * only addresses whitelisted by an authorised decision maker can raise new purchase orders
 */
export interface MsgWhitelistAddressSDKType {
  address: string;
  signer: string;
  whitelist_action: WhitelistAction;
}
/** MsgWhitelistAddressResponse defines the Msg/WhitelistAddress response type. */
export interface MsgWhitelistAddressResponse {}
export interface MsgWhitelistAddressResponseProtoMsg {
  typeUrl: "/mainchain.enterprise.v1.MsgWhitelistAddressResponse";
  value: Uint8Array;
}
/** MsgWhitelistAddressResponse defines the Msg/WhitelistAddress response type. */
export interface MsgWhitelistAddressResponseAmino {}
export interface MsgWhitelistAddressResponseAminoMsg {
  type: "/mainchain.enterprise.v1.MsgWhitelistAddressResponse";
  value: MsgWhitelistAddressResponseAmino;
}
/** MsgWhitelistAddressResponse defines the Msg/WhitelistAddress response type. */
export interface MsgWhitelistAddressResponseSDKType {}
function createBaseMsgUndPurchaseOrder(): MsgUndPurchaseOrder {
  return {
    purchaser: "",
    amount: Coin.fromPartial({})
  };
}
export const MsgUndPurchaseOrder = {
  typeUrl: "/mainchain.enterprise.v1.MsgUndPurchaseOrder",
  encode(message: MsgUndPurchaseOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.purchaser !== "") {
      writer.uint32(10).string(message.purchaser);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUndPurchaseOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndPurchaseOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.purchaser = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUndPurchaseOrder>): MsgUndPurchaseOrder {
    const message = createBaseMsgUndPurchaseOrder();
    message.purchaser = object.purchaser ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgUndPurchaseOrderAmino): MsgUndPurchaseOrder {
    return {
      purchaser: object.purchaser,
      amount: object?.amount ? Coin.fromAmino(object.amount) : undefined
    };
  },
  toAmino(message: MsgUndPurchaseOrder): MsgUndPurchaseOrderAmino {
    const obj: any = {};
    obj.purchaser = message.purchaser;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUndPurchaseOrderAminoMsg): MsgUndPurchaseOrder {
    return MsgUndPurchaseOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUndPurchaseOrderProtoMsg): MsgUndPurchaseOrder {
    return MsgUndPurchaseOrder.decode(message.value);
  },
  toProto(message: MsgUndPurchaseOrder): Uint8Array {
    return MsgUndPurchaseOrder.encode(message).finish();
  },
  toProtoMsg(message: MsgUndPurchaseOrder): MsgUndPurchaseOrderProtoMsg {
    return {
      typeUrl: "/mainchain.enterprise.v1.MsgUndPurchaseOrder",
      value: MsgUndPurchaseOrder.encode(message).finish()
    };
  }
};
function createBaseMsgUndPurchaseOrderResponse(): MsgUndPurchaseOrderResponse {
  return {
    purchaseOrderId: BigInt(0)
  };
}
export const MsgUndPurchaseOrderResponse = {
  typeUrl: "/mainchain.enterprise.v1.MsgUndPurchaseOrderResponse",
  encode(message: MsgUndPurchaseOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.purchaseOrderId !== BigInt(0)) {
      writer.uint32(8).uint64(message.purchaseOrderId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUndPurchaseOrderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndPurchaseOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.purchaseOrderId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUndPurchaseOrderResponse>): MsgUndPurchaseOrderResponse {
    const message = createBaseMsgUndPurchaseOrderResponse();
    message.purchaseOrderId = object.purchaseOrderId !== undefined && object.purchaseOrderId !== null ? BigInt(object.purchaseOrderId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgUndPurchaseOrderResponseAmino): MsgUndPurchaseOrderResponse {
    return {
      purchaseOrderId: BigInt(object.purchase_order_id)
    };
  },
  toAmino(message: MsgUndPurchaseOrderResponse): MsgUndPurchaseOrderResponseAmino {
    const obj: any = {};
    obj.purchase_order_id = message.purchaseOrderId ? message.purchaseOrderId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUndPurchaseOrderResponseAminoMsg): MsgUndPurchaseOrderResponse {
    return MsgUndPurchaseOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUndPurchaseOrderResponseProtoMsg): MsgUndPurchaseOrderResponse {
    return MsgUndPurchaseOrderResponse.decode(message.value);
  },
  toProto(message: MsgUndPurchaseOrderResponse): Uint8Array {
    return MsgUndPurchaseOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUndPurchaseOrderResponse): MsgUndPurchaseOrderResponseProtoMsg {
    return {
      typeUrl: "/mainchain.enterprise.v1.MsgUndPurchaseOrderResponse",
      value: MsgUndPurchaseOrderResponse.encode(message).finish()
    };
  }
};
function createBaseMsgProcessUndPurchaseOrder(): MsgProcessUndPurchaseOrder {
  return {
    purchaseOrderId: BigInt(0),
    decision: 0,
    signer: ""
  };
}
export const MsgProcessUndPurchaseOrder = {
  typeUrl: "/mainchain.enterprise.v1.MsgProcessUndPurchaseOrder",
  encode(message: MsgProcessUndPurchaseOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.purchaseOrderId !== BigInt(0)) {
      writer.uint32(8).uint64(message.purchaseOrderId);
    }
    if (message.decision !== 0) {
      writer.uint32(16).int32(message.decision);
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgProcessUndPurchaseOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProcessUndPurchaseOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.purchaseOrderId = reader.uint64();
          break;
        case 2:
          message.decision = (reader.int32() as any);
          break;
        case 3:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgProcessUndPurchaseOrder>): MsgProcessUndPurchaseOrder {
    const message = createBaseMsgProcessUndPurchaseOrder();
    message.purchaseOrderId = object.purchaseOrderId !== undefined && object.purchaseOrderId !== null ? BigInt(object.purchaseOrderId.toString()) : BigInt(0);
    message.decision = object.decision ?? 0;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgProcessUndPurchaseOrderAmino): MsgProcessUndPurchaseOrder {
    return {
      purchaseOrderId: BigInt(object.purchase_order_id),
      decision: isSet(object.decision) ? purchaseOrderStatusFromJSON(object.decision) : -1,
      signer: object.signer
    };
  },
  toAmino(message: MsgProcessUndPurchaseOrder): MsgProcessUndPurchaseOrderAmino {
    const obj: any = {};
    obj.purchase_order_id = message.purchaseOrderId ? message.purchaseOrderId.toString() : undefined;
    obj.decision = message.decision;
    obj.signer = message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgProcessUndPurchaseOrderAminoMsg): MsgProcessUndPurchaseOrder {
    return MsgProcessUndPurchaseOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgProcessUndPurchaseOrderProtoMsg): MsgProcessUndPurchaseOrder {
    return MsgProcessUndPurchaseOrder.decode(message.value);
  },
  toProto(message: MsgProcessUndPurchaseOrder): Uint8Array {
    return MsgProcessUndPurchaseOrder.encode(message).finish();
  },
  toProtoMsg(message: MsgProcessUndPurchaseOrder): MsgProcessUndPurchaseOrderProtoMsg {
    return {
      typeUrl: "/mainchain.enterprise.v1.MsgProcessUndPurchaseOrder",
      value: MsgProcessUndPurchaseOrder.encode(message).finish()
    };
  }
};
function createBaseMsgProcessUndPurchaseOrderResponse(): MsgProcessUndPurchaseOrderResponse {
  return {};
}
export const MsgProcessUndPurchaseOrderResponse = {
  typeUrl: "/mainchain.enterprise.v1.MsgProcessUndPurchaseOrderResponse",
  encode(_: MsgProcessUndPurchaseOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgProcessUndPurchaseOrderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProcessUndPurchaseOrderResponse();
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
  fromPartial(_: Partial<MsgProcessUndPurchaseOrderResponse>): MsgProcessUndPurchaseOrderResponse {
    const message = createBaseMsgProcessUndPurchaseOrderResponse();
    return message;
  },
  fromAmino(_: MsgProcessUndPurchaseOrderResponseAmino): MsgProcessUndPurchaseOrderResponse {
    return {};
  },
  toAmino(_: MsgProcessUndPurchaseOrderResponse): MsgProcessUndPurchaseOrderResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgProcessUndPurchaseOrderResponseAminoMsg): MsgProcessUndPurchaseOrderResponse {
    return MsgProcessUndPurchaseOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgProcessUndPurchaseOrderResponseProtoMsg): MsgProcessUndPurchaseOrderResponse {
    return MsgProcessUndPurchaseOrderResponse.decode(message.value);
  },
  toProto(message: MsgProcessUndPurchaseOrderResponse): Uint8Array {
    return MsgProcessUndPurchaseOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgProcessUndPurchaseOrderResponse): MsgProcessUndPurchaseOrderResponseProtoMsg {
    return {
      typeUrl: "/mainchain.enterprise.v1.MsgProcessUndPurchaseOrderResponse",
      value: MsgProcessUndPurchaseOrderResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWhitelistAddress(): MsgWhitelistAddress {
  return {
    address: "",
    signer: "",
    whitelistAction: 0
  };
}
export const MsgWhitelistAddress = {
  typeUrl: "/mainchain.enterprise.v1.MsgWhitelistAddress",
  encode(message: MsgWhitelistAddress, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.signer !== "") {
      writer.uint32(18).string(message.signer);
    }
    if (message.whitelistAction !== 0) {
      writer.uint32(24).int32(message.whitelistAction);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWhitelistAddress {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWhitelistAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.signer = reader.string();
          break;
        case 3:
          message.whitelistAction = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgWhitelistAddress>): MsgWhitelistAddress {
    const message = createBaseMsgWhitelistAddress();
    message.address = object.address ?? "";
    message.signer = object.signer ?? "";
    message.whitelistAction = object.whitelistAction ?? 0;
    return message;
  },
  fromAmino(object: MsgWhitelistAddressAmino): MsgWhitelistAddress {
    return {
      address: object.address,
      signer: object.signer,
      whitelistAction: isSet(object.whitelist_action) ? whitelistActionFromJSON(object.whitelist_action) : -1
    };
  },
  toAmino(message: MsgWhitelistAddress): MsgWhitelistAddressAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.signer = message.signer;
    obj.whitelist_action = message.whitelistAction;
    return obj;
  },
  fromAminoMsg(object: MsgWhitelistAddressAminoMsg): MsgWhitelistAddress {
    return MsgWhitelistAddress.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWhitelistAddressProtoMsg): MsgWhitelistAddress {
    return MsgWhitelistAddress.decode(message.value);
  },
  toProto(message: MsgWhitelistAddress): Uint8Array {
    return MsgWhitelistAddress.encode(message).finish();
  },
  toProtoMsg(message: MsgWhitelistAddress): MsgWhitelistAddressProtoMsg {
    return {
      typeUrl: "/mainchain.enterprise.v1.MsgWhitelistAddress",
      value: MsgWhitelistAddress.encode(message).finish()
    };
  }
};
function createBaseMsgWhitelistAddressResponse(): MsgWhitelistAddressResponse {
  return {};
}
export const MsgWhitelistAddressResponse = {
  typeUrl: "/mainchain.enterprise.v1.MsgWhitelistAddressResponse",
  encode(_: MsgWhitelistAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWhitelistAddressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWhitelistAddressResponse();
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
  fromPartial(_: Partial<MsgWhitelistAddressResponse>): MsgWhitelistAddressResponse {
    const message = createBaseMsgWhitelistAddressResponse();
    return message;
  },
  fromAmino(_: MsgWhitelistAddressResponseAmino): MsgWhitelistAddressResponse {
    return {};
  },
  toAmino(_: MsgWhitelistAddressResponse): MsgWhitelistAddressResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWhitelistAddressResponseAminoMsg): MsgWhitelistAddressResponse {
    return MsgWhitelistAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWhitelistAddressResponseProtoMsg): MsgWhitelistAddressResponse {
    return MsgWhitelistAddressResponse.decode(message.value);
  },
  toProto(message: MsgWhitelistAddressResponse): Uint8Array {
    return MsgWhitelistAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWhitelistAddressResponse): MsgWhitelistAddressResponseProtoMsg {
    return {
      typeUrl: "/mainchain.enterprise.v1.MsgWhitelistAddressResponse",
      value: MsgWhitelistAddressResponse.encode(message).finish()
    };
  }
};