import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryWrkChainRequest, QueryWrkChainResponse, QueryWrkChainBlockRequest, QueryWrkChainBlockResponse, QueryWrkChainsFilteredRequest, QueryWrkChainsFilteredResponse, QueryWrkChainStorageRequest, QueryWrkChainStorageResponse } from "./query";
export interface Query {
  /** Params queries the parameters of x/wrkchain module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** WrkChain queries the metadata of a wrkchain. */
  wrkChain(request: QueryWrkChainRequest): Promise<QueryWrkChainResponse>;
  /** WrkChainBlock queries a submitted hash of a wrkchain */
  wrkChainBlock(request: QueryWrkChainBlockRequest): Promise<QueryWrkChainBlockResponse>;
  /** WrkChainsFiltered queries all wrkchain metadata for given search parameters */
  wrkChainsFiltered(request: QueryWrkChainsFilteredRequest): Promise<QueryWrkChainsFilteredResponse>;
  wrkChainStorage(request: QueryWrkChainStorageRequest): Promise<QueryWrkChainStorageResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.wrkChain = this.wrkChain.bind(this);
    this.wrkChainBlock = this.wrkChainBlock.bind(this);
    this.wrkChainsFiltered = this.wrkChainsFiltered.bind(this);
    this.wrkChainStorage = this.wrkChainStorage.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.wrkchain.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  wrkChain(request: QueryWrkChainRequest): Promise<QueryWrkChainResponse> {
    const data = QueryWrkChainRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.wrkchain.v1.Query", "WrkChain", data);
    return promise.then(data => QueryWrkChainResponse.decode(new BinaryReader(data)));
  }
  wrkChainBlock(request: QueryWrkChainBlockRequest): Promise<QueryWrkChainBlockResponse> {
    const data = QueryWrkChainBlockRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.wrkchain.v1.Query", "WrkChainBlock", data);
    return promise.then(data => QueryWrkChainBlockResponse.decode(new BinaryReader(data)));
  }
  wrkChainsFiltered(request: QueryWrkChainsFilteredRequest): Promise<QueryWrkChainsFilteredResponse> {
    const data = QueryWrkChainsFilteredRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.wrkchain.v1.Query", "WrkChainsFiltered", data);
    return promise.then(data => QueryWrkChainsFilteredResponse.decode(new BinaryReader(data)));
  }
  wrkChainStorage(request: QueryWrkChainStorageRequest): Promise<QueryWrkChainStorageResponse> {
    const data = QueryWrkChainStorageRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.wrkchain.v1.Query", "WrkChainStorage", data);
    return promise.then(data => QueryWrkChainStorageResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    wrkChain(request: QueryWrkChainRequest): Promise<QueryWrkChainResponse> {
      return queryService.wrkChain(request);
    },
    wrkChainBlock(request: QueryWrkChainBlockRequest): Promise<QueryWrkChainBlockResponse> {
      return queryService.wrkChainBlock(request);
    },
    wrkChainsFiltered(request: QueryWrkChainsFilteredRequest): Promise<QueryWrkChainsFilteredResponse> {
      return queryService.wrkChainsFiltered(request);
    },
    wrkChainStorage(request: QueryWrkChainStorageRequest): Promise<QueryWrkChainStorageResponse> {
      return queryService.wrkChainStorage(request);
    }
  };
};