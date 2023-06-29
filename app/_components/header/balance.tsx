import Image from 'next/image';

import eth from '_images/eth.png';

export default function Balance() {
  return (
    <div className="flex items-center justify-center gap-x-2 rounded-full border px-2 py-1 md:px-4">
      <Image src={eth} alt="ethereum" className="h-3 w-3 md:h-5 md:w-5" />
      <span className="text-xs text-gray-900 sm:text-sm lg:text-base">0 ETH</span>
    </div>
  );
}
