import { Fragment } from 'react';

import { Pool } from '~/common/types';
import Accordion from '~/components/accordion';
import CoinIcon from '~/components/icon/coin-icon';
import CurveIcon from '~/components/icon/curve-icon';
import pools from '~/config/pools.json';

const stats = [
  { name: 'Locked liquidity', value: '100,000,000' },
  { name: 'Daily Emission', value: '50,000' },
  { name: 'Staked', value: '10,000' },
  { name: 'Pending reward', value: '10,000' },
  { name: 'Your LP', value: '0' },
];

export default function Rows() {
  return (
    <section className="flex flex-col gap-y-4">
      {Object.values(pools).map(({ address, name, coinX, coinY, curve }) => (
        <Accordion key={address}>
          {(isOpen) => (
            <Fragment>
              <section className="grid w-full grid-cols-[12rem_1fr] gap-y-2 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
                <section className="flex items-center">
                  <div className="flex">
                    <CoinIcon name={coinX} className="relative -top-4 w-8" />
                    <CoinIcon name={coinY} className="relative right-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-blue-800">{name}</span>
                    <div className="flex items-center gap-x-1 text-gray-900">
                      <CurveIcon name={curve} className="h-3 w-3" />
                      <span className="text-sm">{curve}</span>
                    </div>
                  </div>
                </section>

                <article>
                  <div className="text-sm text-gray-400">APR</div>
                  <div className="text-xl text-green-500">300%</div>
                </article>

                {stats.map(({ name, value }, index) => (
                  <article key={index}>
                    <div className="text-sm text-gray-400">{name}</div>
                    <div className="text-gray-900">{value}</div>
                  </article>
                ))}
              </section>
              <section className="mt-4 flex gap-x-2 sm:justify-end">
                <button
                  {...(!isOpen && { tabIndex: -1 })}
                  className="w-20 rounded-lg bg-red-400 py-2 text-sm text-white hover:bg-red-500 sm:w-40"
                >
                  Withdraw
                </button>
                <button
                  {...(!isOpen && { tabIndex: -1 })}
                  className="w-20 rounded-lg bg-blue-800 py-2 text-sm text-white hover:bg-blue-900 sm:w-40"
                >
                  Harvest
                </button>
                <button
                  {...(!isOpen && { tabIndex: -1 })}
                  className="w-20 rounded-lg bg-blue-800 py-2 text-sm text-white hover:bg-blue-900 sm:w-40"
                >
                  Stake
                </button>
              </section>
            </Fragment>
          )}
        </Accordion>
      ))}
    </section>
  );
}
