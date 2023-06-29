import { Coin } from '_common/types';
import CoinIcon from '_components/coin-icon';
import BaseModal from '_components/modal/base';
import ChevronIcon from '_images/chevron.svg';
import { shorten } from '_utils/address';
import { merge } from '_utils/classes';

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
    <BaseModal open={open} onClose={onClose}>
      <header className="relative p-4 text-center">
        <button
          aria-label="back"
          onClick={onClose}
          className="absolute bottom-2 left-2 top-2 rounded-lg px-3 hover:bg-gray-100"
        >
          <ChevronIcon className="h-4 w-4 -rotate-90 text-gray-900 md:h-5 md:w-5" />
        </button>
        <span className="text-base text-gray-900 sm:text-lg">Select a token</span>
      </header>
      <section className="px-4 pb-2">
        <input
          placeholder="Search by name or address"
          className="w-full rounded-lg border border-gray-400 px-4 py-3 text-sm outline-blue-800 sm:text-lg"
        />
      </section>
      <section className="modal-content overflow-y-auto px-4 pb-4">
        {coins.map((coin) => {
          const active = selectedCoin && selectedCoin.address === coin.address;

          return (
            <button
              key={coin.address}
              onClick={() => {
                onSelect(coin);
                onClose();
              }}
              className={merge(
                'my-1 flex w-full items-center justify-between rounded-lg px-4 py-2 text-left hover:bg-gray-100',
                active && 'bg-gray-100'
              )}
            >
              <div className="flex items-center gap-x-2">
                <CoinIcon name={coin.symbol} className="h-6 w-6 md:h-8 md:w-8" />
                <div>
                  <div className="text-sm font-medium text-gray-900 sm:text-lg">{coin.symbol}</div>
                  <div className="flex flex-col gap-x-1 gap-y-2 sm:flex-row sm:items-center">
                    <div className="text-xs text-gray-600 sm:text-sm">{coin.name}</div>
                    <div className="rounded bg-gray-200 px-2 text-xs text-gray-900">
                      {shorten(coin.address)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-sm sm:text-lg">100</div>
            </button>
          );
        })}
      </section>
    </BaseModal>
  );
}
