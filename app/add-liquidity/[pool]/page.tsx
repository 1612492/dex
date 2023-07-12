'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';

import { Coin, Coins, Pool, Pools } from '_common/types';
import CoinInput from '_components/input/coin-input';
import ModeSelect from '_components/input/mode-select';
import Slippage from '_components/input/slippage';
import coins from '_config/coins.json';
import pools from '_config/pools.json';
import PlusIcon from '_images/plus.svg';
import ReloadIcon from '_images/reload.svg';

const modes = [
  { display: 'Both', value: 0 },
  { display: 'Only DAI', value: 1 },
  { display: 'Only BNB', value: 2 },
];

export default function Page() {
  const { pool } = useParams();
  const [mode, setMode] = useState(0);
  const [amount1, setAmount1] = useState('');
  const [amount2, setAmount2] = useState('');

  return (
    <section className="mx-auto px-4 py-4 md:container md:px-0">
      <div className="mx-auto max-w-md text-center">
        <h2 className="mb-2 text-2xl text-gray-900">Deposit</h2>
        <p className="mb-4 text-sm text-gray-600">
          Deposit tokens to start earning trading fees and more rewards.
        </p>
      </div>
      <section className="mx-auto max-w-md rounded-xl bg-white p-4">
        <div className="mb-2 flex items-center justify-between">
          <ModeSelect value={mode} options={modes} onChange={setMode} />
          <div className="flex items-center">
            <button aria-label="reload" className="rounded-lg p-2 text-gray-900 hover:bg-gray-100">
              <ReloadIcon className="h-3 w-3 md:h-5 md:w-5" />
            </button>
          </div>
        </div>
        <CoinInput
          label="Coin 1"
          amount={amount1}
          coin={{
            address: 'DAI',
            name: 'Dai Stablecoin',
            symbol: 'DAI',
            decimals: 18,
          }}
          balance="100"
          onChangeAmount={(amount) => setAmount1(amount)}
          disabled
          quickSelect
        />
        <div className="flex justify-center py-1">
          <button aria-label="reverse" className="rounded-lg p-1 text-blue-800 hover:bg-gray-100">
            <PlusIcon className="h-3 w-3 md:h-5 md:w-5" />
          </button>
        </div>
        <CoinInput
          label="Coin 2"
          amount={amount1}
          coin={{
            address: 'USDT',
            name: 'Tether USD',
            symbol: 'USDT',
            decimals: 6,
          }}
          balance="1000"
          onChangeAmount={(amount) => setAmount2(amount)}
          disabled
          quickSelect
        />
        <Slippage />
        <button className="w-full rounded-xl bg-blue-800 py-3 text-xs text-white hover:bg-blue-900 sm:text-sm lg:text-base">
          Add liquidity
        </button>
        <section className="mt-4 rounded bg-gray-100 px-4 py-2">
          {['Pool shared', 'LP received'].map((value, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-1 text-xs text-gray-900 sm:text-sm"
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
