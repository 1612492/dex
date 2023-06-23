'use client';

import { useState } from 'react';
import PenIcon from '_components/icon/pen';
import ReloadIcon from '_components/icon/reload';
import ReverseIcon from '_components/icon/reverse';
import CoinInput from '_components/input/coin';
import ModeSelect from './_components/mode-select';
import coins from '_config/coins.json';
import { Coin } from 'types';

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
            <button className="rounded-lg p-2 hover:bg-gray-100">
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
          <button className="rounded-lg p-2 text-blue-500 hover:bg-gray-100">
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
        <div className="mb-4 mt-2 flex items-center justify-between px-2 text-sm">
          <div className="flex items-center gap-x-2">
            <span>Slippage Tolerance</span>
            <PenIcon />
          </div>
          <span>0.5%</span>
        </div>
        <button className="w-full rounded-xl bg-blue-500 py-3 text-white hover:bg-blue-400">
          Swap
        </button>
      </section>
    </section>
  );
}
