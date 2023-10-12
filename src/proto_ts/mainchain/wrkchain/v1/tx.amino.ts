import { MsgRegisterWrkChain, MsgRecordWrkChainBlock, MsgPurchaseWrkChainStateStorage } from "./tx";
export const AminoConverter = {
  "/mainchain.wrkchain.v1.MsgRegisterWrkChain": {
    aminoType: "/mainchain.wrkchain.v1.MsgRegisterWrkChain",
    toAmino: MsgRegisterWrkChain.toAmino,
    fromAmino: MsgRegisterWrkChain.fromAmino
  },
  "/mainchain.wrkchain.v1.MsgRecordWrkChainBlock": {
    aminoType: "/mainchain.wrkchain.v1.MsgRecordWrkChainBlock",
    toAmino: MsgRecordWrkChainBlock.toAmino,
    fromAmino: MsgRecordWrkChainBlock.fromAmino
  },
  "/mainchain.wrkchain.v1.MsgPurchaseWrkChainStateStorage": {
    aminoType: "/mainchain.wrkchain.v1.MsgPurchaseWrkChainStateStorage",
    toAmino: MsgPurchaseWrkChainStateStorage.toAmino,
    fromAmino: MsgPurchaseWrkChainStateStorage.fromAmino
  }
};