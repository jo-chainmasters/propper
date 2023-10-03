import {Currency, NetworkInfo} from "../util/NetworkInfo";

export const UnificationCurrency: Currency = {
  coinDenom: "FUND",
  coinMinimalDenom: "nund",
  coinDecimals: 9,
  coinGeckoId: "unification"
}

export const UnificationTest: NetworkInfo = {
  chainId: "FUND-TestNet-2",
  chainName: "Unification Testnet",
  restAPIs: [
    {
      provider: 'Unification',
      url: 'https://rest-testnet.unification.io'
    }
  ],
  rpcAPIs: [
    {
      provider: "Unification",
      url: "https://rpc-testnet.unification.io"
    }
  ],
  websocketAPIs: [
    {
      provider: 'Unification',
      url: 'wss://rpc-testnet.unification.io',
      path: 'websocket'
    }
  ],
  prefix: 'und',
  coinType: 5555,
  stakeCurrency: UnificationCurrency,
  feeCurrency: UnificationCurrency,
  gasPriceStep: {
    low: 10,
    average: 25,
    high: 40,
  },
}
