import { Coin } from '~/common/types';
import CoinIcon from '~/components/icon/coin-icon';
import BaseModal from '~/components/modal/base';
import ChevronIcon from '~/images/chevron.svg';
import { shorten } from '~/utils/address';
import { merge } from '~/utils/classes';

type CoinListModalProps = {
  selectedCoin: Coin | null;
  coins: Coin[];
  open: boolean;
  onClose: () => void;
  onSelect: (coin: Coin) => void;
};

export default function CoinModal({
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
        <span className="text-lg text-gray-900">Select a token</span>
      </header>
      <section className="px-4 pb-2">
        <input
          placeholder="Search by name or address"
          className="w-full rounded-lg border border-gray-400 px-4 py-3 sm:text-lg"
        />
      </section>
      <section className="modal-content overflow-y-auto px-4 pb-4">
        {coins?.map((coin) => {
          const active = selectedCoin && selectedCoin.address === coin.address;

          return (
            <button
              key={coin.address}
              onClick={() => {
                onSelect(coin);
                onClose();
              }}
              className={merge(
                'my-1 flex w-full items-center justify-between rounded-lg p-2 text-left hover:bg-gray-100',
                active && 'bg-gray-100'
              )}
            >
              <div className="flex items-center gap-x-2">
                <CoinIcon name={coin.symbol} className="h-10 w-10" />
                <div>
                  <div className="font-medium text-gray-900 sm:text-lg">{coin.symbol}</div>
                  <div className="flex items-center gap-x-1 gap-y-2">
                    <div className="text-sm text-gray-600">{coin.name}</div>
                    <div className="w-fit rounded bg-gray-200 px-2 text-xs text-gray-900">
                      {shorten(coin.address)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="sm:text-lg">100</div>
            </button>
          );
        })}
      </section>
    </BaseModal>
  );
}
