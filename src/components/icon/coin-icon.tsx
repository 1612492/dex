import Image, { StaticImageData } from 'next/image';

import bnb from '~/images/bnb.svg?raw';
import dai from '~/images/dai.svg?raw';
import eth from '~/images/eth.svg?raw';
import matic from '~/images/matic.svg?raw';
import usdc from '~/images/usdc.svg?raw';
import usdt from '~/images/usdt.svg?raw';

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
