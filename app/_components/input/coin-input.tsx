import { Fragment, useState } from 'react';

import { Coin } from '_common/types';
import CoinIcon from '_components/coin-icon';
import QuickSelect from '_components/input/quick-select';
import CoinListModal from '_components/modal/coin-list';
import ChevronIcon from '_images/chevron.svg';

type CoinInputProps = {
  label: string;
  amount: string;
  coins: Coin[];
  coin: Coin | null;
  balance: string;
  onChangeCoin: (coin: Coin) => void;
  onChangeAmount: (value: string) => void;
  inputProps?: {
    readOnly?: boolean;
  };
  quickSelect?: boolean;
};

export default function CoinInput({
  label,
  amount,
  coins,
  coin,
  balance,
  onChangeCoin,
  onChangeAmount,
  inputProps,
  quickSelect = false,
}: CoinInputProps) {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <article className="rounded-lg bg-gray-100 px-3 py-3">
        <div className="flex items-center gap-x-2">
          <div className="text-xs text-gray-900 sm:text-sm">{label}</div>
          {quickSelect ? <QuickSelect /> : null}
        </div>
        <article className="mt-2 flex">
          <input
            placeholder="0"
            value={amount}
            onChange={(e) => onChangeAmount(e.target.value)}
            className="text-bold w-full bg-gray-100 text-lg outline-0 sm:text-2xl"
            {...inputProps}
          />
          <button
            onClick={() => setOpen(true)}
            className="flex h-8 min-w-fit items-center gap-x-2 rounded-lg bg-white px-2 py-1 hover:bg-blue-800 hover:text-white sm:h-10"
          >
            {coin ? (
              <div className="flex items-center gap-x-2">
                <CoinIcon name={coin.symbol} className="h-6 w-6 md:h-8 md:w-8" />
                <span className="text-xs sm:text-sm">{coin.symbol}</span>
              </div>
            ) : (
              <div className="text-xs sm:text-sm">Select token</div>
            )}
            <ChevronIcon className="h-3 w-3 rotate-180 md:h-5 md:w-5" />
          </button>
        </article>
        <div className="text-xs text-gray-900 sm:text-sm">Balance: {balance}</div>
      </article>
      <CoinListModal
        coins={coins}
        selectedCoin={coin}
        open={open}
        onClose={() => setOpen(false)}
        onSelect={onChangeCoin}
      />
    </Fragment>
  );
}
