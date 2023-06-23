import CoinIcon from '_components/icon/coin';
import ChevronIcon from '_components/icon/chevron';
import Modal from '_components/modal';
import { shorten } from '_utils/address';
import { Coin } from 'types';
import cl from '_utils/cl';

type CoinListModalProps = {
  selectedCoin: Coin | null;
  coins: Coin[];
  open: boolean;
  onClose: () => void;
  onSelect: (coin: Coin) => void;
};

export default function CoinListModal({
  selectedCoin,
  coins,
  open,
  onClose,
  onSelect,
}: CoinListModalProps) {
  return (
    <Modal open={open} onClose={onClose}>
      <header className="relative p-4 text-center text-gray-900">
        <button
          onClick={onClose}
          className="absolute bottom-2 left-2 top-2 rounded-lg px-3 hover:bg-gray-100"
        >
          <ChevronIcon direction="left" />
        </button>
        <span className="text-lg">Select a token</span>
      </header>
      <section className="px-4 pb-2">
        <input
          placeholder="Search by name or address"
          className="w-full rounded-lg border border-gray-400 px-4 py-3"
        />
      </section>
      <section className="px-4 pb-4">
        {coins.map((coin) => {
          const active = selectedCoin && selectedCoin.address === coin.address;

          return (
            <button
              key={coin.address}
              onClick={() => {
                onSelect(coin);
                onClose();
              }}
              className={cl(
                'my-1 flex w-full items-center justify-between rounded-lg px-4 py-2 text-left hover:bg-gray-100',
                active && 'bg-gray-100'
              )}
            >
              <div className="flex items-center gap-x-2">
                <CoinIcon name={coin.symbol} className="h-8 w-8" />
                <div>
                  <div className="text-lg font-medium text-gray-900">{coin.symbol}</div>
                  <div className="flex flex-col gap-x-1 gap-y-2 sm:flex-row sm:items-center">
                    <div className="text-sm text-gray-500">{coin.name}</div>
                    <div className="rounded bg-gray-200 px-2 text-xs">{shorten(coin.address)}</div>
                  </div>
                </div>
              </div>
              <div className="text-lg">100</div>
            </button>
          );
        })}
      </section>
    </Modal>
  );
}
