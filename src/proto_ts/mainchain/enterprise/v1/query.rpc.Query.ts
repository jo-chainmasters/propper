import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryEnterpriseUndPurchaseOrderRequest, QueryEnterpriseUndPurchaseOrderResponse, QueryEnterpriseUndPurchaseOrdersRequest, QueryEnterpriseUndPurchaseOrdersResponse, QueryLockedUndByAddressRequest, QueryLockedUndByAddressResponse, QueryTotalLockedRequest, QueryTotalLockedResponse, QueryTotalUnlockedRequest, QueryTotalUnlockedResponse, QueryEnterpriseSupplyRequest, QueryEnterpriseSupplyResponse, QueryTotalSupplyRequest, QueryTotalSupplyResponse, QuerySupplyOfRequest, QuerySupplyOfResponse, QueryWhitelistRequest, QueryWhitelistResponse, QueryWhitelistedRequest, QueryWhitelistedResponse, QueryEnterpriseAccountRequest, QueryEnterpriseAccountResponse, QueryTotalSpentEFUNDRequest, QueryTotalSpentEFUNDResponse, QuerySpentEFUNDByAddressRequest, QuerySpentEFUNDByAddressResponse } from "./query";
export interface Query {
  /** Params queries the parameters of x/enterprise module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** EnterpriseUndPurchaseOrder queries purchase order details based on PurchaseOrderId. */
  enterpriseUndPurchaseOrder(request: QueryEnterpriseUndPurchaseOrderRequest): Promise<QueryEnterpriseUndPurchaseOrderResponse>;
  /** EnterpriseUndPurchaseOrders queries all current purchase orders. */
  enterpriseUndPurchaseOrders(request: QueryEnterpriseUndPurchaseOrdersRequest): Promise<QueryEnterpriseUndPurchaseOrdersResponse>;
  /** LockedUndByAddress queries an account address for their locked FUND */
  lockedUndByAddress(request: QueryLockedUndByAddressRequest): Promise<QueryLockedUndByAddressResponse>;
  /** TotalLocked queries the total locked FUND */
  totalLocked(request?: QueryTotalLockedRequest): Promise<QueryTotalLockedResponse>;
  /** TotalUnlocked queries the total Unlocked FUND */
  totalUnlocked(request?: QueryTotalUnlockedRequest): Promise<QueryTotalUnlockedResponse>;
  /** EnterpriseSupply queries the chain's supply, including locked Ent. FUND. Only returns nund data */
  enterpriseSupply(request?: QueryEnterpriseSupplyRequest): Promise<QueryEnterpriseSupplyResponse>;
  /**
   * TotalSupply should be used instead of /cosmos/bank/v1beta1/supply to get true total supply available
   * for general use, i.e. with locked eFUND removed from total for nund
   */
  totalSupply(request?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse>;
  /**
   * SupplyOf should be used in place of /cosmos/bank/v1beta1/supply to get true total supply,
   * with locked eFUND removed from total for nund
   */
  supplyOf(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse>;
  /**
   * TotalSupplyOverwrite should be used instead of /cosmos/bank/v1beta1/supply to get true total supply available
   * for general use, i.e. with locked eFUND removed from total for nund
   */
  totalSupplyOverwrite(request?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse>;
  /**
   * SupplyOf should be used in place of /cosmos/bank/v1beta1/supply to get true total supply,
   * with locked eFUND removed from total for nund
   */
  supplyOfOverwrite(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse>;
  /** Whitelist queries whitelisted addresses authorised to raise new purchase orders */
  whitelist(request?: QueryWhitelistRequest): Promise<QueryWhitelistResponse>;
  /** Whitelisted queries whether or not the given address is authorised to raise new purchase orders */
  whitelisted(request: QueryWhitelistedRequest): Promise<QueryWhitelistedResponse>;
  /** EnterpriseAccount queries an account address for their locked FUND and other data */
  enterpriseAccount(request: QueryEnterpriseAccountRequest): Promise<QueryEnterpriseAccountResponse>;
  /** TotalSpentEFUND queries the total eFUND usage to date - i.e. the amount used to pay fees */
  totalSpentEFUND(request?: QueryTotalSpentEFUNDRequest): Promise<QueryTotalSpentEFUNDResponse>;
  /** SpentEFUNDByAddress queries the total eFUND usage to date for a given address, i.e. the amount used to pay fees */
  spentEFUNDByAddress(request: QuerySpentEFUNDByAddressRequest): Promise<QuerySpentEFUNDByAddressResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.enterpriseUndPurchaseOrder = this.enterpriseUndPurchaseOrder.bind(this);
    this.enterpriseUndPurchaseOrders = this.enterpriseUndPurchaseOrders.bind(this);
    this.lockedUndByAddress = this.lockedUndByAddress.bind(this);
    this.totalLocked = this.totalLocked.bind(this);
    this.totalUnlocked = this.totalUnlocked.bind(this);
    this.enterpriseSupply = this.enterpriseSupply.bind(this);
    this.totalSupply = this.totalSupply.bind(this);
    this.supplyOf = this.supplyOf.bind(this);
    this.totalSupplyOverwrite = this.totalSupplyOverwrite.bind(this);
    this.supplyOfOverwrite = this.supplyOfOverwrite.bind(this);
    this.whitelist = this.whitelist.bind(this);
    this.whitelisted = this.whitelisted.bind(this);
    this.enterpriseAccount = this.enterpriseAccount.bind(this);
    this.totalSpentEFUND = this.totalSpentEFUND.bind(this);
    this.spentEFUNDByAddress = this.spentEFUNDByAddress.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.enterprise.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  enterpriseUndPurchaseOrder(request: QueryEnterpriseUndPurchaseOrderRequest): Promise<QueryEnterpriseUndPurchaseOrderResponse> {
    const data = QueryEnterpriseUndPurchaseOrderRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.enterprise.v1.Query", "EnterpriseUndPurchaseOrder", data);
    return promise.then(data => QueryEnterpriseUndPurchaseOrderResponse.decode(new BinaryReader(data)));
  }
  enterpriseUndPurchaseOrders(request: QueryEnterpriseUndPurchaseOrdersRequest): Promise<QueryEnterpriseUndPurchaseOrdersResponse> {
    const data = QueryEnterpriseUndPurchaseOrdersRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.enterprise.v1.Query", "EnterpriseUndPurchaseOrders", data);
    return promise.then(data => QueryEnterpriseUndPurchaseOrdersResponse.decode(new BinaryReader(data)));
  }
  lockedUndByAddress(request: QueryLockedUndByAddressRequest): Promise<QueryLockedUndByAddressResponse> {
    const data = QueryLockedUndByAddressRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.enterprise.v1.Query", "LockedUndByAddress", data);
    return promise.then(data => QueryLockedUndByAddressResponse.decode(new BinaryReader(data)));
  }
  totalLocked(request: QueryTotalLockedRequest = {}): Promise<QueryTotalLockedResponse> {
    const data = QueryTotalLockedRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.enterprise.v1.Query", "TotalLocked", data);
    return promise.then(data => QueryTotalLockedResponse.decode(new BinaryReader(data)));
  }
  totalUnlocked(request: QueryTotalUnlockedRequest = {}): Promise<QueryTotalUnlockedResponse> {
    const data = QueryTotalUnlockedRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.enterprise.v1.Query", "TotalUnlocked", data);
    return promise.then(data => QueryTotalUnlockedResponse.decode(new BinaryReader(data)));
  }
  enterpriseSupply(request: QueryEnterpriseSupplyRequest = {}): Promise<QueryEnterpriseSupplyResponse> {
    const data = QueryEnterpriseSupplyRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.enterprise.v1.Query", "EnterpriseSupply", data);
    return promise.then(data => QueryEnterpriseSupplyResponse.decode(new BinaryReader(data)));
  }
  totalSupply(request: QueryTotalSupplyRequest = {
    pagination: undefined
  }): Promise<QueryTotalSupplyResponse> {
    const data = QueryTotalSupplyRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.enterprise.v1.Query", "TotalSupply", data);
    return promise.then(data => QueryTotalSupplyResponse.decode(new BinaryReader(data)));
  }
  supplyOf(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse> {
    const data = QuerySupplyOfRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.enterprise.v1.Query", "SupplyOf", data);
    return promise.then(data => QuerySupplyOfResponse.decode(new BinaryReader(data)));
  }
  totalSupplyOverwrite(request: QueryTotalSupplyRequest = {
    pagination: undefined
  }): Promise<QueryTotalSupplyResponse> {
    const data = QueryTotalSupplyRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.enterprise.v1.Query", "TotalSupplyOverwrite", data);
    return promise.then(data => QueryTotalSupplyResponse.decode(new BinaryReader(data)));
  }
  supplyOfOverwrite(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse> {
    const data = QuerySupplyOfRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.enterprise.v1.Query", "SupplyOfOverwrite", data);
    return promise.then(data => QuerySupplyOfResponse.decode(new BinaryReader(data)));
  }
  whitelist(request: QueryWhitelistRequest = {}): Promise<QueryWhitelistResponse> {
    const data = QueryWhitelistRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.enterprise.v1.Query", "Whitelist", data);
    return promise.then(data => QueryWhitelistResponse.decode(new BinaryReader(data)));
  }
  whitelisted(request: QueryWhitelistedRequest): Promise<QueryWhitelistedResponse> {
    const data = QueryWhitelistedRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.enterprise.v1.Query", "Whitelisted", data);
    return promise.then(data => QueryWhitelistedResponse.decode(new BinaryReader(data)));
  }
  enterpriseAccount(request: QueryEnterpriseAccountRequest): Promise<QueryEnterpriseAccountResponse> {
    const data = QueryEnterpriseAccountRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.enterprise.v1.Query", "EnterpriseAccount", data);
    return promise.then(data => QueryEnterpriseAccountResponse.decode(new BinaryReader(data)));
  }
  totalSpentEFUND(request: QueryTotalSpentEFUNDRequest = {}): Promise<QueryTotalSpentEFUNDResponse> {
    const data = QueryTotalSpentEFUNDRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.enterprise.v1.Query", "TotalSpentEFUND", data);
    return promise.then(data => QueryTotalSpentEFUNDResponse.decode(new BinaryReader(data)));
  }
  spentEFUNDByAddress(request: QuerySpentEFUNDByAddressRequest): Promise<QuerySpentEFUNDByAddressResponse> {
    const data = QuerySpentEFUNDByAddressRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.enterprise.v1.Query", "SpentEFUNDByAddress", data);
    return promise.then(data => QuerySpentEFUNDByAddressResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    enterpriseUndPurchaseOrder(request: QueryEnterpriseUndPurchaseOrderRequest): Promise<QueryEnterpriseUndPurchaseOrderResponse> {
      return queryService.enterpriseUndPurchaseOrder(request);
    },
    enterpriseUndPurchaseOrders(request: QueryEnterpriseUndPurchaseOrdersRequest): Promise<QueryEnterpriseUndPurchaseOrdersResponse> {
      return queryService.enterpriseUndPurchaseOrders(request);
    },
    lockedUndByAddress(request: QueryLockedUndByAddressRequest): Promise<QueryLockedUndByAddressResponse> {
      return queryService.lockedUndByAddress(request);
    },
    totalLocked(request?: QueryTotalLockedRequest): Promise<QueryTotalLockedResponse> {
      return queryService.totalLocked(request);
    },
    totalUnlocked(request?: QueryTotalUnlockedRequest): Promise<QueryTotalUnlockedResponse> {
      return queryService.totalUnlocked(request);
    },
    enterpriseSupply(request?: QueryEnterpriseSupplyRequest): Promise<QueryEnterpriseSupplyResponse> {
      return queryService.enterpriseSupply(request);
    },
    totalSupply(request?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse> {
      return queryService.totalSupply(request);
    },
    supplyOf(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse> {
      return queryService.supplyOf(request);
    },
    totalSupplyOverwrite(request?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse> {
      return queryService.totalSupplyOverwrite(request);
    },
    supplyOfOverwrite(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse> {
      return queryService.supplyOfOverwrite(request);
    },
    whitelist(request?: QueryWhitelistRequest): Promise<QueryWhitelistResponse> {
      return queryService.whitelist(request);
    },
    whitelisted(request: QueryWhitelistedRequest): Promise<QueryWhitelistedResponse> {
      return queryService.whitelisted(request);
    },
    enterpriseAccount(request: QueryEnterpriseAccountRequest): Promise<QueryEnterpriseAccountResponse> {
      return queryService.enterpriseAccount(request);
    },
    totalSpentEFUND(request?: QueryTotalSpentEFUNDRequest): Promise<QueryTotalSpentEFUNDResponse> {
      return queryService.totalSpentEFUND(request);
    },
    spentEFUNDByAddress(request: QuerySpentEFUNDByAddressRequest): Promise<QuerySpentEFUNDByAddressResponse> {
      return queryService.spentEFUNDByAddress(request);
    }
  };
};