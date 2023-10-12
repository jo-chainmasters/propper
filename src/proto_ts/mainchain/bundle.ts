import * as _131 from "./beacon/v1/beacon";
import * as _132 from "./beacon/v1/genesis";
import * as _133 from "./beacon/v1/query";
import * as _134 from "./beacon/v1/tx";
import * as _135 from "./enterprise/v1/enterprise";
import * as _136 from "./enterprise/v1/genesis";
import * as _137 from "./enterprise/v1/query";
import * as _138 from "./enterprise/v1/tx";
import * as _139 from "./wrkchain/v1/genesis";
import * as _140 from "./wrkchain/v1/query";
import * as _141 from "./wrkchain/v1/tx";
import * as _142 from "./wrkchain/v1/wrkchain";
import * as _254 from "./beacon/v1/tx.amino";
import * as _255 from "./enterprise/v1/tx.amino";
import * as _256 from "./wrkchain/v1/tx.amino";
import * as _257 from "./beacon/v1/tx.registry";
import * as _258 from "./enterprise/v1/tx.registry";
import * as _259 from "./wrkchain/v1/tx.registry";
import * as _260 from "./beacon/v1/query.lcd";
import * as _261 from "./enterprise/v1/query.lcd";
import * as _262 from "./wrkchain/v1/query.lcd";
import * as _263 from "./beacon/v1/query.rpc.Query";
import * as _264 from "./enterprise/v1/query.rpc.Query";
import * as _265 from "./wrkchain/v1/query.rpc.Query";
import * as _266 from "./beacon/v1/tx.rpc.msg";
import * as _267 from "./enterprise/v1/tx.rpc.msg";
import * as _268 from "./wrkchain/v1/tx.rpc.msg";
import * as _275 from "./lcd";
import * as _276 from "./rpc.query";
import * as _277 from "./rpc.tx";
export namespace mainchain {
  export namespace beacon {
    export const v1 = {
      ..._131,
      ..._132,
      ..._133,
      ..._134,
      ..._254,
      ..._257,
      ..._260,
      ..._263,
      ..._266
    };
  }
  export namespace enterprise {
    export const v1 = {
      ..._135,
      ..._136,
      ..._137,
      ..._138,
      ..._255,
      ..._258,
      ..._261,
      ..._264,
      ..._267
    };
  }
  export namespace wrkchain {
    export const v1 = {
      ..._139,
      ..._140,
      ..._141,
      ..._142,
      ..._256,
      ..._259,
      ..._262,
      ..._265,
      ..._268
    };
  }
  export const ClientFactory = {
    ..._275,
    ..._276,
    ..._277
  };
}