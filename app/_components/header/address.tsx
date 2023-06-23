import { shorten } from '_utils/address';

const address = '0xBe9F543f6738f88C5008bB7a8a0539DAb4FB7b83';

export default function Address() {
  return (
    <div className="flex items-center justify-center rounded-full border px-4 py-1">
      <span className="text-gray-900">{shorten(address)}</span>
    </div>
  );
}
