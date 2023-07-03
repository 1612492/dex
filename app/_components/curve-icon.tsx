import Image, { StaticImageData } from 'next/image';

import classic from '_images/classic.svg?raw';
import stable from '_images/stable.svg?raw';

const curves: Record<string, StaticImageData> = {
  Classic: classic,
  Stable: stable,
};

type CurveIconProps = {
  name: string;
  className?: string;
};

export default function CurveIcon({ name, className }: CurveIconProps) {
  return <Image src={curves[name]} alt={name} className={className} />;
}
