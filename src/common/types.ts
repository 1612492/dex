export type Pool = {
  address: string;
  name: string;
  coinX: string;
  coinY: string;
  curve: string;
};

export type Pools = Record<string, Pool>;

export type Coin = {
  address: string;
  name: string;
  symbol: string;
  decimals: number;
};

export type Coins = Record<string, Coin>;
