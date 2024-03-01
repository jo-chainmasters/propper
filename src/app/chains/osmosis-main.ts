import {Currency, NetworkInfo} from "../util/NetworkInfo";

export const OsmoCurrency: Currency = {
  coinDenom: "OSMO",
  coinMinimalDenom: "uosmo",
  coinDecimals: 6,
  coinGeckoId: "osmosis"
}

export const OsmosisMain: NetworkInfo = {
  chainId: "osmosis-1",
  chainName: "Osmosis",
  restAPIs: [
    {
      provider: 'Keplr',
      url: 'https://lcd-osmosis.keplr.app'
    }
  ],
  rpcAPIs: [
    {
      provider: "Keplr",
      url: "https://rpc-osmosis.keplr.app"
    }
  ],
  websocketAPIs: [
    {
      provider: 'Chainmasters',
      url: 'wss://websocket.unification.chainmasters.ninja',
      path: '',
    }
  ],
  prefix: 'osmo',
  coinType: 118,
  stakeCurrency: OsmoCurrency,
  feeCurrency: OsmoCurrency,
  gasPriceStep: {
    low: 0.01,
    average: 0.025,
    high: 0.04,
  },
}
