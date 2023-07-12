'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';

import { Coin, Coins, Pool, Pools } from '~/common/types';
import CoinInput from '~/components/input/coin-input';
import ModeSelect from '~/components/input/mode-select';
import Slippage from '~/components/input/slippage';
import coins from '~/config/coins.json';
import pools from '~/config/pools.json';
import PlusIcon from '~/images/plus.svg';
import ReloadIcon from '~/images/reload.svg';

export default function Page() {
  const { pool } = useParams();
  const [amount, setAmount] = useState('');

  return (
    <section className="mx-auto px-4 py-4 md:container md:px-0">
      <div className="mx-auto max-w-md text-center">
        <h2 className="mb-2 text-2xl text-gray-900">Withdraw</h2>
        <p className="mb-4 text-sm text-gray-600">Withdraw to receive pool tokens</p>
      </div>
      <section className="mx-auto max-w-md rounded-xl bg-white p-4">
        <div className="mb-2 flex items-center justify-end">
          <div className="flex items-center">
            <button aria-label="reload" className="rounded-lg p-2 text-gray-900 hover:bg-gray-100">
              <ReloadIcon className="h-3 w-3 md:h-5 md:w-5" />
            </button>
          </div>
        </div>
        <CoinInput
          label="Coin"
          amount={amount}
          coin={{
            address: 'DAI',
            name: 'Dai Stablecoin',
            symbol: 'DAI',
            decimals: 18,
          }}
          balance="100"
          onChangeAmount={(amount) => setAmount(amount)}
          disabled
          quickSelect
        />
        <Slippage />
        <button className="w-full rounded-xl bg-blue-800 py-3 text-xs text-white hover:bg-blue-900 sm:text-sm lg:text-base">
          Remove liquidity
        </button>
        <section className="mt-4 rounded bg-gray-100 px-4 py-2">
          {['USDT received', 'DAI received'].map((value, index) => (
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
