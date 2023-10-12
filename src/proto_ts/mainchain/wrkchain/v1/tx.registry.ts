import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRegisterWrkChain, MsgRecordWrkChainBlock, MsgPurchaseWrkChainStateStorage } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/mainchain.wrkchain.v1.MsgRegisterWrkChain", MsgRegisterWrkChain], ["/mainchain.wrkchain.v1.MsgRecordWrkChainBlock", MsgRecordWrkChainBlock], ["/mainchain.wrkchain.v1.MsgPurchaseWrkChainStateStorage", MsgPurchaseWrkChainStateStorage]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    registerWrkChain(value: MsgRegisterWrkChain) {
      return {
        typeUrl: "/mainchain.wrkchain.v1.MsgRegisterWrkChain",
        value: MsgRegisterWrkChain.encode(value).finish()
      };
    },
    recordWrkChainBlock(value: MsgRecordWrkChainBlock) {
      return {
        typeUrl: "/mainchain.wrkchain.v1.MsgRecordWrkChainBlock",
        value: MsgRecordWrkChainBlock.encode(value).finish()
      };
    },
    purchaseWrkChainStateStorage(value: MsgPurchaseWrkChainStateStorage) {
      return {
        typeUrl: "/mainchain.wrkchain.v1.MsgPurchaseWrkChainStateStorage",
        value: MsgPurchaseWrkChainStateStorage.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    registerWrkChain(value: MsgRegisterWrkChain) {
      return {
        typeUrl: "/mainchain.wrkchain.v1.MsgRegisterWrkChain",
        value
      };
    },
    recordWrkChainBlock(value: MsgRecordWrkChainBlock) {
      return {
        typeUrl: "/mainchain.wrkchain.v1.MsgRecordWrkChainBlock",
        value
      };
    },
    purchaseWrkChainStateStorage(value: MsgPurchaseWrkChainStateStorage) {
      return {
        typeUrl: "/mainchain.wrkchain.v1.MsgPurchaseWrkChainStateStorage",
        value
      };
    }
  },
  fromPartial: {
    registerWrkChain(value: MsgRegisterWrkChain) {
      return {
        typeUrl: "/mainchain.wrkchain.v1.MsgRegisterWrkChain",
        value: MsgRegisterWrkChain.fromPartial(value)
      };
    },
    recordWrkChainBlock(value: MsgRecordWrkChainBlock) {
      return {
        typeUrl: "/mainchain.wrkchain.v1.MsgRecordWrkChainBlock",
        value: MsgRecordWrkChainBlock.fromPartial(value)
      };
    },
    purchaseWrkChainStateStorage(value: MsgPurchaseWrkChainStateStorage) {
      return {
        typeUrl: "/mainchain.wrkchain.v1.MsgPurchaseWrkChainStateStorage",
        value: MsgPurchaseWrkChainStateStorage.fromPartial(value)
      };
    }
  }
};