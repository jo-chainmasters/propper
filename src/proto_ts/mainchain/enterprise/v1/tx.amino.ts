import { MsgUndPurchaseOrder, MsgProcessUndPurchaseOrder, MsgWhitelistAddress } from "./tx";
export const AminoConverter = {
  "/mainchain.enterprise.v1.MsgUndPurchaseOrder": {
    aminoType: "/mainchain.enterprise.v1.MsgUndPurchaseOrder",
    toAmino: MsgUndPurchaseOrder.toAmino,
    fromAmino: MsgUndPurchaseOrder.fromAmino
  },
  "/mainchain.enterprise.v1.MsgProcessUndPurchaseOrder": {
    aminoType: "/mainchain.enterprise.v1.MsgProcessUndPurchaseOrder",
    toAmino: MsgProcessUndPurchaseOrder.toAmino,
    fromAmino: MsgProcessUndPurchaseOrder.fromAmino
  },
  "/mainchain.enterprise.v1.MsgWhitelistAddress": {
    aminoType: "/mainchain.enterprise.v1.MsgWhitelistAddress",
    toAmino: MsgWhitelistAddress.toAmino,
    fromAmino: MsgWhitelistAddress.fromAmino
  }
};