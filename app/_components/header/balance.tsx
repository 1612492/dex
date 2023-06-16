import Image from 'next/image';
import eth from '_images/eth.png';

export default function Balance() {
  return (
    <div className="flex items-center justify-center gap-x-2 border px-4 py-1 rounded-full">
      <Image src={eth} alt="ethereum" className="w-6 h-6" />
      <span>0 ETH</span>
    </div>
  );
}
