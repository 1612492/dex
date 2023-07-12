import { shorten } from '~/utils/address';

const address = '0xBe9F543f6738f88C5008bB7a8a0539DAb4FB7b83';

export default function Address() {
  return (
    <div className="flex items-center justify-center rounded-full border px-2 py-1 md:px-4">
      <span className="text-sm text-gray-900 lg:text-base">{shorten(address)}</span>
    </div>
  );
}
