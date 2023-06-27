'use client';

import { useState } from 'react';
import { Coin } from '_common/types';
import CoinInput from '_components/input/coin-input';
import ModeSelect from './_components/mode-select';
import ReloadIcon from '_images/reload.svg';
import coins from '_config/coins.json';
import ReverseIcon from '_images/reverse.svg';
import Slippage from './_components/slippage';

export default function Page() {
  const [amountIn, setAmountIn] = useState('');
  const [amountOut, setAmountOut] = useState('');
  const [coinIn, setCoinIn] = useState<Coin | null>(null);
  const [coinOut, setCoinOut] = useState<Coin | null>(null);

  return (
    <section className="container mx-auto">
      <section className="mx-auto mt-8 rounded-xl bg-white p-4 sm:max-w-md">
        <div className="mb-2 flex items-center justify-between">
          <ModeSelect />
          <div className="flex items-center">
            <button aria-label="reload" className="rounded-lg p-2 hover:bg-gray-100">
              <ReloadIcon />
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
            <ReverseIcon />
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
        <button className="w-full rounded-xl bg-blue-800 py-3 text-lg text-white hover:bg-blue-900">
          Swap
        </button>
      </section>
    </section>
  );
}
