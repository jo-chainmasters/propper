import * as _107 from "./applications/transfer/v1/genesis";
import * as _108 from "./applications/transfer/v1/query";
import * as _109 from "./applications/transfer/v1/transfer";
import * as _110 from "./applications/transfer/v1/tx";
import * as _111 from "./applications/transfer/v2/packet";
import * as _112 from "./core/channel/v1/channel";
import * as _113 from "./core/channel/v1/genesis";
import * as _114 from "./core/channel/v1/query";
import * as _115 from "./core/channel/v1/tx";
import * as _116 from "./core/client/v1/client";
import * as _117 from "./core/client/v1/genesis";
import * as _118 from "./core/client/v1/query";
import * as _119 from "./core/client/v1/tx";
import * as _120 from "./core/commitment/v1/commitment";
import * as _121 from "./core/connection/v1/connection";
import * as _122 from "./core/connection/v1/genesis";
import * as _123 from "./core/connection/v1/query";
import * as _124 from "./core/connection/v1/tx";
import * as _125 from "./core/port/v1/query";
import * as _126 from "./core/types/v1/genesis";
import * as _127 from "./lightclients/localhost/v1/localhost";
import * as _128 from "./lightclients/solomachine/v1/solomachine";
import * as _129 from "./lightclients/solomachine/v2/solomachine";
import * as _130 from "./lightclients/tendermint/v1/tendermint";
import * as _233 from "./applications/transfer/v1/tx.amino";
import * as _234 from "./core/channel/v1/tx.amino";
import * as _235 from "./core/client/v1/tx.amino";
import * as _236 from "./core/connection/v1/tx.amino";
import * as _237 from "./applications/transfer/v1/tx.registry";
import * as _238 from "./core/channel/v1/tx.registry";
import * as _239 from "./core/client/v1/tx.registry";
import * as _240 from "./core/connection/v1/tx.registry";
import * as _241 from "./applications/transfer/v1/query.lcd";
import * as _242 from "./core/channel/v1/query.lcd";
import * as _243 from "./core/client/v1/query.lcd";
import * as _244 from "./core/connection/v1/query.lcd";
import * as _245 from "./applications/transfer/v1/query.rpc.Query";
import * as _246 from "./core/channel/v1/query.rpc.Query";
import * as _247 from "./core/client/v1/query.rpc.Query";
import * as _248 from "./core/connection/v1/query.rpc.Query";
import * as _249 from "./core/port/v1/query.rpc.Query";
import * as _250 from "./applications/transfer/v1/tx.rpc.msg";
import * as _251 from "./core/channel/v1/tx.rpc.msg";
import * as _252 from "./core/client/v1/tx.rpc.msg";
import * as _253 from "./core/connection/v1/tx.rpc.msg";
import * as _272 from "./lcd";
import * as _273 from "./rpc.query";
import * as _274 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._107,
        ..._108,
        ..._109,
        ..._110,
        ..._233,
        ..._237,
        ..._241,
        ..._245,
        ..._250
      };
      export const v2 = {
        ..._111
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._112,
        ..._113,
        ..._114,
        ..._115,
        ..._234,
        ..._238,
        ..._242,
        ..._246,
        ..._251
      };
    }
    export namespace client {
      export const v1 = {
        ..._116,
        ..._117,
        ..._118,
        ..._119,
        ..._235,
        ..._239,
        ..._243,
        ..._247,
        ..._252
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._120
      };
    }
    export namespace connection {
      export const v1 = {
        ..._121,
        ..._122,
        ..._123,
        ..._124,
        ..._236,
        ..._240,
        ..._244,
        ..._248,
        ..._253
      };
    }
    export namespace port {
      export const v1 = {
        ..._125,
        ..._249
      };
    }
    export namespace types {
      export const v1 = {
        ..._126
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._127
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._128
      };
      export const v2 = {
        ..._129
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._130
      };
    }
  }
  export const ClientFactory = {
    ..._272,
    ..._273,
    ..._274
  };
}