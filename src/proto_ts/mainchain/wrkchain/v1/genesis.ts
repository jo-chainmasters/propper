import { Params, ParamsAmino, ParamsSDKType, WrkChain, WrkChainAmino, WrkChainSDKType } from "./wrkchain";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState defines the wrkchain module's genesis state. */
export interface GenesisState {
  /** params defines all the paramaters of the module. */
  params: Params;
  startingWrkchainId: bigint;
  registeredWrkchains: WrkChainExport[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/mainchain.wrkchain.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the wrkchain module's genesis state. */
export interface GenesisStateAmino {
  /** params defines all the paramaters of the module. */
  params?: ParamsAmino;
  starting_wrkchain_id: string;
  registered_wrkchains: WrkChainExportAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/mainchain.wrkchain.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the wrkchain module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  starting_wrkchain_id: bigint;
  registered_wrkchains: WrkChainExportSDKType[];
}
/**
 * WrkChainBlockGenesisExport is a trimmed version of WrkChainBlock
 * for genesis exports to conserve space
 */
export interface WrkChainBlockGenesisExport {
  he: bigint;
  bh: string;
  ph: string;
  h1: string;
  h2: string;
  h3: string;
  st: bigint;
}
export interface WrkChainBlockGenesisExportProtoMsg {
  typeUrl: "/mainchain.wrkchain.v1.WrkChainBlockGenesisExport";
  value: Uint8Array;
}
/**
 * WrkChainBlockGenesisExport is a trimmed version of WrkChainBlock
 * for genesis exports to conserve space
 */
export interface WrkChainBlockGenesisExportAmino {
  he: string;
  bh: string;
  ph: string;
  h1: string;
  h2: string;
  h3: string;
  st: string;
}
export interface WrkChainBlockGenesisExportAminoMsg {
  type: "/mainchain.wrkchain.v1.WrkChainBlockGenesisExport";
  value: WrkChainBlockGenesisExportAmino;
}
/**
 * WrkChainBlockGenesisExport is a trimmed version of WrkChainBlock
 * for genesis exports to conserve space
 */
export interface WrkChainBlockGenesisExportSDKType {
  he: bigint;
  bh: string;
  ph: string;
  h1: string;
  h2: string;
  h3: string;
  st: bigint;
}
/** WrkChainExport holds genesis export data for a wrkchain, including hashes */
export interface WrkChainExport {
  wrkchain: WrkChain;
  inStateLimit: bigint;
  blocks: WrkChainBlockGenesisExport[];
}
export interface WrkChainExportProtoMsg {
  typeUrl: "/mainchain.wrkchain.v1.WrkChainExport";
  value: Uint8Array;
}
/** WrkChainExport holds genesis export data for a wrkchain, including hashes */
export interface WrkChainExportAmino {
  wrkchain?: WrkChainAmino;
  in_state_limit: string;
  blocks: WrkChainBlockGenesisExportAmino[];
}
export interface WrkChainExportAminoMsg {
  type: "/mainchain.wrkchain.v1.WrkChainExport";
  value: WrkChainExportAmino;
}
/** WrkChainExport holds genesis export data for a wrkchain, including hashes */
export interface WrkChainExportSDKType {
  wrkchain: WrkChainSDKType;
  in_state_limit: bigint;
  blocks: WrkChainBlockGenesisExportSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    startingWrkchainId: BigInt(0),
    registeredWrkchains: []
  };
}
export const GenesisState = {
  typeUrl: "/mainchain.wrkchain.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.startingWrkchainId !== BigInt(0)) {
      writer.uint32(16).uint64(message.startingWrkchainId);
    }
    for (const v of message.registeredWrkchains) {
      WrkChainExport.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.startingWrkchainId = reader.uint64();
          break;
        case 3:
          message.registeredWrkchains.push(WrkChainExport.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.startingWrkchainId = object.startingWrkchainId !== undefined && object.startingWrkchainId !== null ? BigInt(object.startingWrkchainId.toString()) : BigInt(0);
    message.registeredWrkchains = object.registeredWrkchains?.map(e => WrkChainExport.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      startingWrkchainId: BigInt(object.starting_wrkchain_id),
      registeredWrkchains: Array.isArray(object?.registered_wrkchains) ? object.registered_wrkchains.map((e: any) => WrkChainExport.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.starting_wrkchain_id = message.startingWrkchainId ? message.startingWrkchainId.toString() : undefined;
    if (message.registeredWrkchains) {
      obj.registered_wrkchains = message.registeredWrkchains.map(e => e ? WrkChainExport.toAmino(e) : undefined);
    } else {
      obj.registered_wrkchains = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/mainchain.wrkchain.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseWrkChainBlockGenesisExport(): WrkChainBlockGenesisExport {
  return {
    he: BigInt(0),
    bh: "",
    ph: "",
    h1: "",
    h2: "",
    h3: "",
    st: BigInt(0)
  };
}
export const WrkChainBlockGenesisExport = {
  typeUrl: "/mainchain.wrkchain.v1.WrkChainBlockGenesisExport",
  encode(message: WrkChainBlockGenesisExport, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.he !== BigInt(0)) {
      writer.uint32(8).uint64(message.he);
    }
    if (message.bh !== "") {
      writer.uint32(18).string(message.bh);
    }
    if (message.ph !== "") {
      writer.uint32(26).string(message.ph);
    }
    if (message.h1 !== "") {
      writer.uint32(34).string(message.h1);
    }
    if (message.h2 !== "") {
      writer.uint32(42).string(message.h2);
    }
    if (message.h3 !== "") {
      writer.uint32(50).string(message.h3);
    }
    if (message.st !== BigInt(0)) {
      writer.uint32(56).uint64(message.st);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WrkChainBlockGenesisExport {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWrkChainBlockGenesisExport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.he = reader.uint64();
          break;
        case 2:
          message.bh = reader.string();
          break;
        case 3:
          message.ph = reader.string();
          break;
        case 4:
          message.h1 = reader.string();
          break;
        case 5:
          message.h2 = reader.string();
          break;
        case 6:
          message.h3 = reader.string();
          break;
        case 7:
          message.st = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<WrkChainBlockGenesisExport>): WrkChainBlockGenesisExport {
    const message = createBaseWrkChainBlockGenesisExport();
    message.he = object.he !== undefined && object.he !== null ? BigInt(object.he.toString()) : BigInt(0);
    message.bh = object.bh ?? "";
    message.ph = object.ph ?? "";
    message.h1 = object.h1 ?? "";
    message.h2 = object.h2 ?? "";
    message.h3 = object.h3 ?? "";
    message.st = object.st !== undefined && object.st !== null ? BigInt(object.st.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: WrkChainBlockGenesisExportAmino): WrkChainBlockGenesisExport {
    return {
      he: BigInt(object.he),
      bh: object.bh,
      ph: object.ph,
      h1: object.h1,
      h2: object.h2,
      h3: object.h3,
      st: BigInt(object.st)
    };
  },
  toAmino(message: WrkChainBlockGenesisExport): WrkChainBlockGenesisExportAmino {
    const obj: any = {};
    obj.he = message.he ? message.he.toString() : undefined;
    obj.bh = message.bh;
    obj.ph = message.ph;
    obj.h1 = message.h1;
    obj.h2 = message.h2;
    obj.h3 = message.h3;
    obj.st = message.st ? message.st.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: WrkChainBlockGenesisExportAminoMsg): WrkChainBlockGenesisExport {
    return WrkChainBlockGenesisExport.fromAmino(object.value);
  },
  fromProtoMsg(message: WrkChainBlockGenesisExportProtoMsg): WrkChainBlockGenesisExport {
    return WrkChainBlockGenesisExport.decode(message.value);
  },
  toProto(message: WrkChainBlockGenesisExport): Uint8Array {
    return WrkChainBlockGenesisExport.encode(message).finish();
  },
  toProtoMsg(message: WrkChainBlockGenesisExport): WrkChainBlockGenesisExportProtoMsg {
    return {
      typeUrl: "/mainchain.wrkchain.v1.WrkChainBlockGenesisExport",
      value: WrkChainBlockGenesisExport.encode(message).finish()
    };
  }
};
function createBaseWrkChainExport(): WrkChainExport {
  return {
    wrkchain: WrkChain.fromPartial({}),
    inStateLimit: BigInt(0),
    blocks: []
  };
}
export const WrkChainExport = {
  typeUrl: "/mainchain.wrkchain.v1.WrkChainExport",
  encode(message: WrkChainExport, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.wrkchain !== undefined) {
      WrkChain.encode(message.wrkchain, writer.uint32(10).fork()).ldelim();
    }
    if (message.inStateLimit !== BigInt(0)) {
      writer.uint32(16).uint64(message.inStateLimit);
    }
    for (const v of message.blocks) {
      WrkChainBlockGenesisExport.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WrkChainExport {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWrkChainExport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.wrkchain = WrkChain.decode(reader, reader.uint32());
          break;
        case 2:
          message.inStateLimit = reader.uint64();
          break;
        case 3:
          message.blocks.push(WrkChainBlockGenesisExport.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<WrkChainExport>): WrkChainExport {
    const message = createBaseWrkChainExport();
    message.wrkchain = object.wrkchain !== undefined && object.wrkchain !== null ? WrkChain.fromPartial(object.wrkchain) : undefined;
    message.inStateLimit = object.inStateLimit !== undefined && object.inStateLimit !== null ? BigInt(object.inStateLimit.toString()) : BigInt(0);
    message.blocks = object.blocks?.map(e => WrkChainBlockGenesisExport.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: WrkChainExportAmino): WrkChainExport {
    return {
      wrkchain: object?.wrkchain ? WrkChain.fromAmino(object.wrkchain) : undefined,
      inStateLimit: BigInt(object.in_state_limit),
      blocks: Array.isArray(object?.blocks) ? object.blocks.map((e: any) => WrkChainBlockGenesisExport.fromAmino(e)) : []
    };
  },
  toAmino(message: WrkChainExport): WrkChainExportAmino {
    const obj: any = {};
    obj.wrkchain = message.wrkchain ? WrkChain.toAmino(message.wrkchain) : undefined;
    obj.in_state_limit = message.inStateLimit ? message.inStateLimit.toString() : undefined;
    if (message.blocks) {
      obj.blocks = message.blocks.map(e => e ? WrkChainBlockGenesisExport.toAmino(e) : undefined);
    } else {
      obj.blocks = [];
    }
    return obj;
  },
  fromAminoMsg(object: WrkChainExportAminoMsg): WrkChainExport {
    return WrkChainExport.fromAmino(object.value);
  },
  fromProtoMsg(message: WrkChainExportProtoMsg): WrkChainExport {
    return WrkChainExport.decode(message.value);
  },
  toProto(message: WrkChainExport): Uint8Array {
    return WrkChainExport.encode(message).finish();
  },
  toProtoMsg(message: WrkChainExport): WrkChainExportProtoMsg {
    return {
      typeUrl: "/mainchain.wrkchain.v1.WrkChainExport",
      value: WrkChainExport.encode(message).finish()
    };
  }
};