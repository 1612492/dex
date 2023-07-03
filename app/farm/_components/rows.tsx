import { Fragment } from 'react';

import { Pool } from '_common/types';
import BaseAccordion from '_components/accordion/base';
import CoinIcon from '_components/coin-icon';
import CurveIcon from '_components/curve-icon';
import pools from '_config/pools.json';

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
        <BaseAccordion key={address}>
          {(isOpen) => (
            <Fragment>
              <section className="grid w-full grid-cols-2 gap-y-2 sm:grid-cols-3 lg:grid-cols-4 sm:gap-4">
                <header className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex">
                      <CoinIcon name={coinX} className="relative -top-4 w-8" />
                      <CoinIcon name={coinY} className="relative right-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium text-blue-800">{name}</span>
                      <div className="flex items-center gap-x-1 text-gray-900">
                        <CurveIcon name={curve} className="h-3 w-3" />
                        <span className="text-sm">{curve}</span>
                      </div>
                    </div>
                  </div>
                </header>

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
              <section className="mt-4 flex justify-end gap-x-2">
                <button
                  {...(!isOpen && { tabIndex: -1 })}
                  className="rounded-lg bg-red-400 px-4 py-2 text-xs text-white hover:bg-red-500 sm:w-40 sm:text-sm"
                >
                  Withdraw
                </button>
                <button
                  {...(!isOpen && { tabIndex: -1 })}
                  className="rounded-lg bg-blue-800 px-4 py-2 text-xs text-white hover:bg-blue-900 sm:w-40 sm:text-sm"
                >
                  Harvest
                </button>
                <button
                  {...(!isOpen && { tabIndex: -1 })}
                  className="rounded-lg bg-blue-800 px-4 py-2 text-xs text-white hover:bg-blue-900 sm:w-40 sm:text-sm"
                >
                  Stake
                </button>
              </section>
            </Fragment>
          )}
        </BaseAccordion>
      ))}
    </section>
  );
}