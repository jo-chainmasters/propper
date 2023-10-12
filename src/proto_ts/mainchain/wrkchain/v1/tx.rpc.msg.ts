import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgRegisterWrkChain, MsgRegisterWrkChainResponse, MsgRecordWrkChainBlock, MsgRecordWrkChainBlockResponse, MsgPurchaseWrkChainStateStorage, MsgPurchaseWrkChainStateStorageResponse } from "./tx";
/** Msg defines the wrkchain Msg service. */
export interface Msg {
  /** RegisterWrkChain defines a method to register a new wrkchain */
  registerWrkChain(request: MsgRegisterWrkChain): Promise<MsgRegisterWrkChainResponse>;
  /** RecordWrkChainBlock defines a method to record a block hash set for a registered wrkchain */
  recordWrkChainBlock(request: MsgRecordWrkChainBlock): Promise<MsgRecordWrkChainBlockResponse>;
  /** PurchaseWrkChainStateStorage defines the method to purchase more state storage */
  purchaseWrkChainStateStorage(request: MsgPurchaseWrkChainStateStorage): Promise<MsgPurchaseWrkChainStateStorageResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.registerWrkChain = this.registerWrkChain.bind(this);
    this.recordWrkChainBlock = this.recordWrkChainBlock.bind(this);
    this.purchaseWrkChainStateStorage = this.purchaseWrkChainStateStorage.bind(this);
  }
  registerWrkChain(request: MsgRegisterWrkChain): Promise<MsgRegisterWrkChainResponse> {
    const data = MsgRegisterWrkChain.encode(request).finish();
    const promise = this.rpc.request("mainchain.wrkchain.v1.Msg", "RegisterWrkChain", data);
    return promise.then(data => MsgRegisterWrkChainResponse.decode(new BinaryReader(data)));
  }
  recordWrkChainBlock(request: MsgRecordWrkChainBlock): Promise<MsgRecordWrkChainBlockResponse> {
    const data = MsgRecordWrkChainBlock.encode(request).finish();
    const promise = this.rpc.request("mainchain.wrkchain.v1.Msg", "RecordWrkChainBlock", data);
    return promise.then(data => MsgRecordWrkChainBlockResponse.decode(new BinaryReader(data)));
  }
  purchaseWrkChainStateStorage(request: MsgPurchaseWrkChainStateStorage): Promise<MsgPurchaseWrkChainStateStorageResponse> {
    const data = MsgPurchaseWrkChainStateStorage.encode(request).finish();
    const promise = this.rpc.request("mainchain.wrkchain.v1.Msg", "PurchaseWrkChainStateStorage", data);
    return promise.then(data => MsgPurchaseWrkChainStateStorageResponse.decode(new BinaryReader(data)));
  }
}