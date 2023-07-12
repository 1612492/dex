import Image from 'next/image';

import eth from '~/images/eth.svg?raw';

export default function Balance() {
  return (
    <div className="flex items-center justify-center gap-x-2 rounded-full border px-2 py-1 md:px-4">
      <Image src={eth} alt="ethereum" className="h-5 w-5" />
      <span className="text-sm text-gray-900 lg:text-base">1000</span>
    </div>
  );
}
