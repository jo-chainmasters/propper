import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUndPurchaseOrder, MsgProcessUndPurchaseOrder, MsgWhitelistAddress } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/mainchain.enterprise.v1.MsgUndPurchaseOrder", MsgUndPurchaseOrder], ["/mainchain.enterprise.v1.MsgProcessUndPurchaseOrder", MsgProcessUndPurchaseOrder], ["/mainchain.enterprise.v1.MsgWhitelistAddress", MsgWhitelistAddress]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    undPurchaseOrder(value: MsgUndPurchaseOrder) {
      return {
        typeUrl: "/mainchain.enterprise.v1.MsgUndPurchaseOrder",
        value: MsgUndPurchaseOrder.encode(value).finish()
      };
    },
    processUndPurchaseOrder(value: MsgProcessUndPurchaseOrder) {
      return {
        typeUrl: "/mainchain.enterprise.v1.MsgProcessUndPurchaseOrder",
        value: MsgProcessUndPurchaseOrder.encode(value).finish()
      };
    },
    whitelistAddress(value: MsgWhitelistAddress) {
      return {
        typeUrl: "/mainchain.enterprise.v1.MsgWhitelistAddress",
        value: MsgWhitelistAddress.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    undPurchaseOrder(value: MsgUndPurchaseOrder) {
      return {
        typeUrl: "/mainchain.enterprise.v1.MsgUndPurchaseOrder",
        value
      };
    },
    processUndPurchaseOrder(value: MsgProcessUndPurchaseOrder) {
      return {
        typeUrl: "/mainchain.enterprise.v1.MsgProcessUndPurchaseOrder",
        value
      };
    },
    whitelistAddress(value: MsgWhitelistAddress) {
      return {
        typeUrl: "/mainchain.enterprise.v1.MsgWhitelistAddress",
        value
      };
    }
  },
  fromPartial: {
    undPurchaseOrder(value: MsgUndPurchaseOrder) {
      return {
        typeUrl: "/mainchain.enterprise.v1.MsgUndPurchaseOrder",
        value: MsgUndPurchaseOrder.fromPartial(value)
      };
    },
    processUndPurchaseOrder(value: MsgProcessUndPurchaseOrder) {
      return {
        typeUrl: "/mainchain.enterprise.v1.MsgProcessUndPurchaseOrder",
        value: MsgProcessUndPurchaseOrder.fromPartial(value)
      };
    },
    whitelistAddress(value: MsgWhitelistAddress) {
      return {
        typeUrl: "/mainchain.enterprise.v1.MsgWhitelistAddress",
        value: MsgWhitelistAddress.fromPartial(value)
      };
    }
  }
};