import {Currency, NetworkInfo} from "../util/NetworkInfo";

export const UnificationCurrency: Currency = {
  coinDenom: "FUND",
  coinMinimalDenom: "nund",
  coinDecimals: 9,
  coinGeckoId: "unification"
}

export const UnificationMain: NetworkInfo = {
  chainId: "FUND-MainNet-2",
  chainName: "Unification",
  restAPIs: [
    {
      provider: 'Chainmasters',
      url: 'https://rest.unification.chainmasters.ninja'
    },
    {
      provider: 'Unification',
      url: 'https://rest.unification.io'
    }
  ],
  rpcAPIs: [
    {
      provider: "Unification",
      url: "https://rpc1.unification.io"
    }
  ],
  websocketAPIs: [
    {
      provider: 'Chainmasters',
      url: 'wss://websocket.unification.chainmasters.ninja',
      path: '',
    }
  ],
  prefix: 'und',
  coinType: 5555,
  stakeCurrency: UnificationCurrency,
  feeCurrency: UnificationCurrency,
  gasPriceStep: {
    low: 0.01,
    average: 0.025,
    high: 0.04,
  },
}
