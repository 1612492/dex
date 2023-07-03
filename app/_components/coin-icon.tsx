import Image, { StaticImageData } from 'next/image';

import bnb from '_images/bnb.svg?raw';
import dai from '_images/dai.svg?raw';
import eth from '_images/eth.svg?raw';
import matic from '_images/matic.svg?raw';
import usdc from '_images/usdc.svg?raw';
import usdt from '_images/usdt.svg?raw';

const tokens: Record<string, StaticImageData> = {
  BNB: bnb,
  DAI: dai,
  ETH: eth,
  MATIC: matic,
  USDC: usdc,
  USDT: usdt,
};

type CoinIconProps = {
  name: string;
  className?: string;
};

export default function CoinIcon({ name, className }: CoinIconProps) {
  return <Image src={tokens[name]} alt={name} className={className} />;
}
