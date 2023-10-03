export interface NetworkInfo {
  chainId: string;
  chainName: string;
  restAPIs: {provider: string, url: string}[];
  rpcAPIs: {provider: string, url: string}[];
  websocketAPIs: {provider: string, url: string, path: string}[];
  stakeCurrency: Currency,
  feeCurrency: Currency,
  coinType: number,
  prefix: 'und',
  gasPriceStep: {
    low: number,
    average: number,
    high: number,
  }
}

export interface Currency {
  coinDenom: string,
  coinMinimalDenom: string,
  coinDecimals: number,
  coinGeckoId: string
};
