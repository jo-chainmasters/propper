import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgRegisterBeacon, MsgRegisterBeaconResponse, MsgRecordBeaconTimestamp, MsgRecordBeaconTimestampResponse, MsgPurchaseBeaconStateStorage, MsgPurchaseBeaconStateStorageResponse } from "./tx";
/** Msg defines the beacon Msg service. */
export interface Msg {
  /** RegisterBeacon defines a method to register a new beacon */
  registerBeacon(request: MsgRegisterBeacon): Promise<MsgRegisterBeaconResponse>;
  /** RecordBeaconTimestamp defines a method to record a timestamp for a registered beacon */
  recordBeaconTimestamp(request: MsgRecordBeaconTimestamp): Promise<MsgRecordBeaconTimestampResponse>;
  /** PurchaseBeaconStateStorage defines the method to purchase more state storage */
  purchaseBeaconStateStorage(request: MsgPurchaseBeaconStateStorage): Promise<MsgPurchaseBeaconStateStorageResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.registerBeacon = this.registerBeacon.bind(this);
    this.recordBeaconTimestamp = this.recordBeaconTimestamp.bind(this);
    this.purchaseBeaconStateStorage = this.purchaseBeaconStateStorage.bind(this);
  }
  registerBeacon(request: MsgRegisterBeacon): Promise<MsgRegisterBeaconResponse> {
    const data = MsgRegisterBeacon.encode(request).finish();
    const promise = this.rpc.request("mainchain.beacon.v1.Msg", "RegisterBeacon", data);
    return promise.then(data => MsgRegisterBeaconResponse.decode(new BinaryReader(data)));
  }
  recordBeaconTimestamp(request: MsgRecordBeaconTimestamp): Promise<MsgRecordBeaconTimestampResponse> {
    const data = MsgRecordBeaconTimestamp.encode(request).finish();
    const promise = this.rpc.request("mainchain.beacon.v1.Msg", "RecordBeaconTimestamp", data);
    return promise.then(data => MsgRecordBeaconTimestampResponse.decode(new BinaryReader(data)));
  }
  purchaseBeaconStateStorage(request: MsgPurchaseBeaconStateStorage): Promise<MsgPurchaseBeaconStateStorageResponse> {
    const data = MsgPurchaseBeaconStateStorage.encode(request).finish();
    const promise = this.rpc.request("mainchain.beacon.v1.Msg", "PurchaseBeaconStateStorage", data);
    return promise.then(data => MsgPurchaseBeaconStateStorageResponse.decode(new BinaryReader(data)));
  }
}