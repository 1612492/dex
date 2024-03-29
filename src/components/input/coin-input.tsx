import { Fragment, useState } from 'react';

import { Coin } from '~/common/types';
import CoinIcon from '~/components/icon/coin-icon';
import QuickSelect from '~/components/input/quick-select';
import CoinModal from '~/components/modal/coin-modal';
import ChevronIcon from '~/images/chevron.svg';
import { merge } from '~/utils/classes';

type CoinInputProps = {
  label: string;
  amount: string;
  coins?: Coin[];
  coin: Coin | null;
  balance: string;
  onChangeCoin?: (coin: Coin) => void;
  onChangeAmount: (value: string) => void;
  inputProps?: {
    readOnly?: boolean;
  };
  noSelectCoin?: boolean;
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
  noSelectCoin = false,
  quickSelect = false,
}: CoinInputProps) {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <article className="rounded-lg bg-gray-100 px-3 py-3">
        <div className="flex items-center gap-x-2">
          <div className="text-sm text-gray-900">{label}</div>
          {quickSelect ? <QuickSelect options={['25%', '50%', '100%']} /> : null}
        </div>
        <article className="mt-2 flex">
          <input
            placeholder="0"
            value={amount}
            onChange={(e) => onChangeAmount(e.target.value)}
            className="text-bold w-full bg-gray-100 text-lg outline-0 sm:text-2xl"
            {...inputProps}
          />
          {noSelectCoin ? (
            <div className={merge('flex h-10 min-w-fit items-center gap-x-2 px-2 py-1')}>
              {coin ? (
                <div className="flex items-center gap-x-2">
                  <CoinIcon name={coin.symbol} className="h-8 w-8" />
                  <span className="text-sm">{coin.symbol}</span>
                </div>
              ) : null}
            </div>
          ) : (
            <Fragment>
              <button
                onClick={() => setOpen(true)}
                className={merge(
                  'flex h-10 min-w-fit items-center gap-x-2 rounded-lg bg-white px-2 py-1 hover:bg-blue-800 hover:text-white'
                )}
              >
                {coin ? (
                  <div className="flex items-center gap-x-2">
                    <CoinIcon name={coin.symbol} className="h-8 w-8" />
                    <span className="text-sm">{coin.symbol}</span>
                  </div>
                ) : (
                  <div className="text-sm">Select token</div>
                )}
                <ChevronIcon className="h-3 w-3 rotate-180 md:h-5 md:w-5" />
              </button>
              {coins && onChangeCoin ? (
                <CoinModal
                  coins={coins}
                  selectedCoin={coin}
                  open={open}
                  onClose={() => setOpen(false)}
                  onSelect={onChangeCoin}
                />
              ) : null}
            </Fragment>
          )}
        </article>
        <div className="text-sm text-gray-900">Balance: {balance}</div>
      </article>
    </Fragment>
  );
}
