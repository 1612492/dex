import Image from 'next/image';

import eth from '_images/eth.png';

export default function Balance() {
  return (
    <div className="flex items-center justify-center gap-x-2 rounded-full border px-4 py-1">
      <Image src={eth} alt="ethereum" className="h-6 w-6" />
      <span className="text-gray-900">0 ETH</span>
    </div>
  );
}
