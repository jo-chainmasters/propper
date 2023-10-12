import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryBeaconRequest, QueryBeaconResponseSDKType, QueryBeaconTimestampRequest, QueryBeaconTimestampResponseSDKType, QueryBeaconsFilteredRequest, QueryBeaconsFilteredResponseSDKType, QueryBeaconStorageRequest, QueryBeaconStorageResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.beacon = this.beacon.bind(this);
    this.beaconTimestamp = this.beaconTimestamp.bind(this);
    this.beaconsFiltered = this.beaconsFiltered.bind(this);
    this.beaconStorage = this.beaconStorage.bind(this);
  }
  /* Params queries the parameters of x/beacon module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `mainchain/beacon/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Beacon queries the metadata of a beacon. */
  async beacon(params: QueryBeaconRequest): Promise<QueryBeaconResponseSDKType> {
    const endpoint = `mainchain/beacon/v1/beacon/${params.beaconId}`;
    return await this.req.get<QueryBeaconResponseSDKType>(endpoint);
  }
  /* BeaconTimestamp queries a timestamp of a beacon */
  async beaconTimestamp(params: QueryBeaconTimestampRequest): Promise<QueryBeaconTimestampResponseSDKType> {
    const endpoint = `mainchain/beacon/v1/beacon/${params.beaconId}/timestamp/${params.timestampId}`;
    return await this.req.get<QueryBeaconTimestampResponseSDKType>(endpoint);
  }
  /* BeaconsFiltered queries all beacon metadata for given search parameters */
  async beaconsFiltered(params: QueryBeaconsFilteredRequest): Promise<QueryBeaconsFilteredResponseSDKType> {
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
    const endpoint = `mainchain/beacon/v1/beacons`;
    return await this.req.get<QueryBeaconsFilteredResponseSDKType>(endpoint, options);
  }
  /* BeaconStorage */
  async beaconStorage(params: QueryBeaconStorageRequest): Promise<QueryBeaconStorageResponseSDKType> {
    const endpoint = `mainchain/beacon/v1/beacon/${params.beaconId}/storage`;
    return await this.req.get<QueryBeaconStorageResponseSDKType>(endpoint);
  }
}