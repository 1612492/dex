import { shorten } from '_utils/address';

const address = '0xBe9F543f6738f88C5008bB7a8a0539DAb4FB7b83';

export default function Address() {
  return (
    <div className="flex items-center justify-center border px-4 py-1 rounded-full">
      <span>{shorten(address)}</span>
    </div>
  );
}
