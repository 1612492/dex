export enum SwapMode {
  Market,
  Limit,
}

export type Pool = {
  address: string;
  name: string;
  coinX: string;
  coinY: string;
  curve: string;
};

export type Coin = {
  address: string;
  name: string;
  symbol: string;
  decimals: number;
};
