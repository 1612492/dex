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
        <div className="flex items-center gap-x-3">
          <div className="text-sm text-gray-900">{label}</div>
          {quickSelect ? <QuickSelect /> : null}
        </div>
        <article className="my-1 flex">
          <input
            placeholder="0"
            value={amount}
            onChange={(e) => onChangeAmount(e.target.value)}
            className="text-bold flex-1 bg-gray-100 text-2xl outline-0"
            {...inputProps}
          />
          <button
            onClick={() => setOpen(true)}
            className="flex h-10 items-center gap-x-2 rounded-lg bg-white px-2 py-1 hover:bg-blue-800 hover:text-gray-100"
          >
            {coin ? (
              <div className="flex items-center gap-x-2">
                <CoinIcon name={coin.symbol} className="h-8 w-8" />
                <span>{coin.symbol}</span>
              </div>
            ) : (
              <div className="text-sm">Select token</div>
            )}
            <ChevronIcon className="rotate-180" />
          </button>
        </article>
        <div className="text-sm text-gray-900">Balance: {balance}</div>
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
