import Image, { StaticImageData } from 'next/image';
import bnb from '_images/bnb.png';
import dai from '_images/dai.png';
import matic from '_images/matic.png';
import usdc from '_images/usdc.png';
import usdt from '_images/usdt.png';

const tokens: Record<string, StaticImageData> = {
  BNB: bnb,
  DAI: dai,
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
