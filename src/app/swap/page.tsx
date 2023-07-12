'use client';

import { useState } from 'react';

import { Coin } from '~/common/types';
import CoinInput from '~/components/input/coin-input';
import ModeSelect from '~/components/input/mode-select';
import Slippage from '~/components/input/slippage';
import coins from '~/config/coins.json';
import ReloadIcon from '~/images/reload.svg';
import ReverseIcon from '~/images/reverse.svg';

enum Mode {
  Market,
  Limit,
}

const modes = [
  { display: 'Market', value: Mode.Market },
  { display: 'Limit', value: Mode.Limit },
];

export default function Page() {
  const [mode, setMode] = useState(Mode.Market);
  const [amountIn, setAmountIn] = useState('');
  const [amountOut, setAmountOut] = useState('');
  const [coinIn, setCoinIn] = useState<Coin | null>(null);
  const [coinOut, setCoinOut] = useState<Coin | null>(null);

  return (
    <section className="mx-auto px-4 py-4 md:container md:px-0">
      <section className="mx-auto max-w-md rounded-xl bg-white p-4 md:mt-8">
        <div className="mb-2 flex items-center justify-between">
          <ModeSelect value={mode} options={modes} onChange={setMode} />
          <div className="flex items-center">
            <button aria-label="reload" className="rounded-lg p-2 text-gray-900 hover:bg-gray-100">
              <ReloadIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
        <CoinInput
          label="From"
          amount={amountIn}
          coins={Object.values(coins)}
          coin={coinIn}
          balance="100"
          onChangeCoin={(coin) => setCoinIn(coin)}
          onChangeAmount={(amount) => setAmountIn(amount)}
          quickSelect
        />
        <div className="flex justify-center py-1">
          <button aria-label="reverse" className="rounded-lg p-1 text-blue-800 hover:bg-gray-100">
            <ReverseIcon className="h-4 w-4" />
          </button>
        </div>
        <CoinInput
          label="To"
          amount={amountOut}
          coins={Object.values(coins)}
          coin={coinOut}
          balance="1000"
          onChangeCoin={(coin) => setCoinOut(coin)}
          onChangeAmount={(amount) => setAmountOut(amount)}
          inputProps={{ readOnly: true }}
        />
        <Slippage />
        <button className="w-full rounded-xl bg-blue-800 py-3 text-sm text-white hover:bg-blue-900 lg:text-base">
          Swap
        </button>
        <section className="mt-4 rounded bg-gray-100 px-4 py-2">
          {['Minimum received', 'Price impact', 'Liquidity provider fee'].map((value, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-1 text-sm text-gray-900"
            >
              <div>{value}</div>
              <div>0</div>
            </div>
          ))}
        </section>
      </section>
    </section>
  );
}
