import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryEnterpriseUndPurchaseOrderRequest, QueryEnterpriseUndPurchaseOrderResponseSDKType, QueryEnterpriseUndPurchaseOrdersRequest, QueryEnterpriseUndPurchaseOrdersResponseSDKType, QueryLockedUndByAddressRequest, QueryLockedUndByAddressResponseSDKType, QueryTotalLockedRequest, QueryTotalLockedResponseSDKType, QueryTotalUnlockedRequest, QueryTotalUnlockedResponseSDKType, QueryEnterpriseSupplyRequest, QueryEnterpriseSupplyResponseSDKType, QueryTotalSupplyRequest, QueryTotalSupplyResponseSDKType, QuerySupplyOfRequest, QuerySupplyOfResponseSDKType, QueryWhitelistRequest, QueryWhitelistResponseSDKType, QueryWhitelistedRequest, QueryWhitelistedResponseSDKType, QueryEnterpriseAccountRequest, QueryEnterpriseAccountResponseSDKType, QueryTotalSpentEFUNDRequest, QueryTotalSpentEFUNDResponseSDKType, QuerySpentEFUNDByAddressRequest, QuerySpentEFUNDByAddressResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
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
  /* Params queries the parameters of x/enterprise module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `mainchain/enterprise/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* EnterpriseUndPurchaseOrder queries purchase order details based on PurchaseOrderId. */
  async enterpriseUndPurchaseOrder(params: QueryEnterpriseUndPurchaseOrderRequest): Promise<QueryEnterpriseUndPurchaseOrderResponseSDKType> {
    const endpoint = `mainchain/enterprise/v1/pos/${params.purchaseOrderId}`;
    return await this.req.get<QueryEnterpriseUndPurchaseOrderResponseSDKType>(endpoint);
  }
  /* EnterpriseUndPurchaseOrders queries all current purchase orders. */
  async enterpriseUndPurchaseOrders(params: QueryEnterpriseUndPurchaseOrdersRequest): Promise<QueryEnterpriseUndPurchaseOrdersResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    if (typeof params?.purchaser !== "undefined") {
      options.params.purchaser = params.purchaser;
    }
    if (typeof params?.status !== "undefined") {
      options.params.status = params.status;
    }
    const endpoint = `mainchain/enterprise/v1/pos`;
    return await this.req.get<QueryEnterpriseUndPurchaseOrdersResponseSDKType>(endpoint, options);
  }
  /* LockedUndByAddress queries an account address for their locked FUND */
  async lockedUndByAddress(params: QueryLockedUndByAddressRequest): Promise<QueryLockedUndByAddressResponseSDKType> {
    const endpoint = `mainchain/enterprise/v1/locked/${params.owner}`;
    return await this.req.get<QueryLockedUndByAddressResponseSDKType>(endpoint);
  }
  /* TotalLocked queries the total locked FUND */
  async totalLocked(_params: QueryTotalLockedRequest = {}): Promise<QueryTotalLockedResponseSDKType> {
    const endpoint = `mainchain/enterprise/v1/locked`;
    return await this.req.get<QueryTotalLockedResponseSDKType>(endpoint);
  }
  /* TotalUnlocked queries the total Unlocked FUND */
  async totalUnlocked(_params: QueryTotalUnlockedRequest = {}): Promise<QueryTotalUnlockedResponseSDKType> {
    const endpoint = `mainchain/enterprise/v1/unlocked`;
    return await this.req.get<QueryTotalUnlockedResponseSDKType>(endpoint);
  }
  /* EnterpriseSupply queries the chain's supply, including locked Ent. FUND. Only returns nund data */
  async enterpriseSupply(_params: QueryEnterpriseSupplyRequest = {}): Promise<QueryEnterpriseSupplyResponseSDKType> {
    const endpoint = `mainchain/enterprise/v1/ent_supply`;
    return await this.req.get<QueryEnterpriseSupplyResponseSDKType>(endpoint);
  }
  /* TotalSupply should be used instead of /cosmos/bank/v1beta1/supply to get true total supply available
   for general use, i.e. with locked eFUND removed from total for nund */
  async totalSupply(params: QueryTotalSupplyRequest = {
    pagination: undefined
  }): Promise<QueryTotalSupplyResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `mainchain/enterprise/v1/supply`;
    return await this.req.get<QueryTotalSupplyResponseSDKType>(endpoint, options);
  }
  /* SupplyOf should be used in place of /cosmos/bank/v1beta1/supply to get true total supply,
   with locked eFUND removed from total for nund */
  async supplyOf(params: QuerySupplyOfRequest): Promise<QuerySupplyOfResponseSDKType> {
    const endpoint = `mainchain/enterprise/v1/supply/${params.denom}`;
    return await this.req.get<QuerySupplyOfResponseSDKType>(endpoint);
  }
  /* TotalSupplyOverwrite should be used instead of /cosmos/bank/v1beta1/supply to get true total supply available
   for general use, i.e. with locked eFUND removed from total for nund */
  async totalSupplyOverwrite(params: QueryTotalSupplyRequest = {
    pagination: undefined
  }): Promise<QueryTotalSupplyResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/bank/v1beta1/supply`;
    return await this.req.get<QueryTotalSupplyResponseSDKType>(endpoint, options);
  }
  /* SupplyOf should be used in place of /cosmos/bank/v1beta1/supply to get true total supply,
   with locked eFUND removed from total for nund */
  async supplyOfOverwrite(params: QuerySupplyOfRequest): Promise<QuerySupplyOfResponseSDKType> {
    const endpoint = `cosmos/bank/v1beta1/supply/${params.denom}`;
    return await this.req.get<QuerySupplyOfResponseSDKType>(endpoint);
  }
  /* Whitelist queries whitelisted addresses authorised to raise new purchase orders */
  async whitelist(_params: QueryWhitelistRequest = {}): Promise<QueryWhitelistResponseSDKType> {
    const endpoint = `mainchain/enterprise/v1/whitelist`;
    return await this.req.get<QueryWhitelistResponseSDKType>(endpoint);
  }
  /* Whitelisted queries whether or not the given address is authorised to raise new purchase orders */
  async whitelisted(params: QueryWhitelistedRequest): Promise<QueryWhitelistedResponseSDKType> {
    const endpoint = `mainchain/enterprise/v1/whitelist/${params.address}`;
    return await this.req.get<QueryWhitelistedResponseSDKType>(endpoint);
  }
  /* EnterpriseAccount queries an account address for their locked FUND and other data */
  async enterpriseAccount(params: QueryEnterpriseAccountRequest): Promise<QueryEnterpriseAccountResponseSDKType> {
    const endpoint = `mainchain/enterprise/v1/account/${params.address}`;
    return await this.req.get<QueryEnterpriseAccountResponseSDKType>(endpoint);
  }
  /* TotalSpentEFUND queries the total eFUND usage to date - i.e. the amount used to pay fees */
  async totalSpentEFUND(_params: QueryTotalSpentEFUNDRequest = {}): Promise<QueryTotalSpentEFUNDResponseSDKType> {
    const endpoint = `mainchain/enterprise/v1/total_spent`;
    return await this.req.get<QueryTotalSpentEFUNDResponseSDKType>(endpoint);
  }
  /* SpentEFUNDByAddress queries the total eFUND usage to date for a given address, i.e. the amount used to pay fees */
  async spentEFUNDByAddress(params: QuerySpentEFUNDByAddressRequest): Promise<QuerySpentEFUNDByAddressResponseSDKType> {
    const endpoint = `mainchain/enterprise/v1/spent/${params.address}`;
    return await this.req.get<QuerySpentEFUNDByAddressResponseSDKType>(endpoint);
  }
}