import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryWrkChainRequest, QueryWrkChainResponseSDKType, QueryWrkChainBlockRequest, QueryWrkChainBlockResponseSDKType, QueryWrkChainsFilteredRequest, QueryWrkChainsFilteredResponseSDKType, QueryWrkChainStorageRequest, QueryWrkChainStorageResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.wrkChain = this.wrkChain.bind(this);
    this.wrkChainBlock = this.wrkChainBlock.bind(this);
    this.wrkChainsFiltered = this.wrkChainsFiltered.bind(this);
    this.wrkChainStorage = this.wrkChainStorage.bind(this);
  }
  /* Params queries the parameters of x/wrkchain module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `mainchain/wrkchain/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* WrkChain queries the metadata of a wrkchain. */
  async wrkChain(params: QueryWrkChainRequest): Promise<QueryWrkChainResponseSDKType> {
    const endpoint = `mainchain/wrkchain/v1/wrkchain/${params.wrkchainId}`;
    return await this.req.get<QueryWrkChainResponseSDKType>(endpoint);
  }
  /* WrkChainBlock queries a submitted hash of a wrkchain */
  async wrkChainBlock(params: QueryWrkChainBlockRequest): Promise<QueryWrkChainBlockResponseSDKType> {
    const endpoint = `mainchain/wrkchain/v1/wrkchain/${params.wrkchainId}/block/${params.height}`;
    return await this.req.get<QueryWrkChainBlockResponseSDKType>(endpoint);
  }
  /* WrkChainsFiltered queries all wrkchain metadata for given search parameters */
  async wrkChainsFiltered(params: QueryWrkChainsFilteredRequest): Promise<QueryWrkChainsFilteredResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.moniker !== "undefined") {
      options.params.moniker = params.moniker;
    }
    if (typeof params?.owner !== "undefined") {
      options.params.owner = params.owner;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `mainchain/wrkchain/v1/wrkchains`;
    return await this.req.get<QueryWrkChainsFilteredResponseSDKType>(endpoint, options);
  }
  /* WrkChainStorage */
  async wrkChainStorage(params: QueryWrkChainStorageRequest): Promise<QueryWrkChainStorageResponseSDKType> {
    const endpoint = `mainchain/wrkchain/v1/wrkchain/${params.wrkchainId}/storage`;
    return await this.req.get<QueryWrkChainStorageResponseSDKType>(endpoint);
  }
}