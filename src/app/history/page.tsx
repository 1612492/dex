'use client';

import { Fragment } from 'react';

import { Pool } from '~/common/types';
import Accordion from '~/components/accordion';
import CoinIcon from '~/components/icon/coin-icon';
import CurveIcon from '~/components/icon/curve-icon';
import pools from '~/config/pools.json';

const stats = [
  { name: 'Action', value: 'Swap' },
  { name: 'Status', value: 'Success' },
  { name: 'Time', value: '8 minutes ago' },
];

export default function Page() {
  return (
    <section className="mx-auto mt-4 px-4 py-4 md:container">
      <section className="flex flex-col gap-y-4">
        {Object.values(pools).map(({ address, name, coinX, coinY, curve }) => (
          <Accordion key={address}>
            {(isOpen) => (
              <Fragment>
                <section className="relative grid w-full grid-cols-2 gap-y-2 sm:grid-cols-3 sm:gap-4">
                  <section className="col-span-2 flex sm:col-span-1">
                    <div className="flex">
                      <CoinIcon name={coinX} />
                      <CoinIcon name={coinY} className="relative right-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium text-blue-800">{name}</span>
                      <div className="flex items-center gap-x-1 text-gray-900">
                        <CurveIcon name={curve} className="h-3 w-3" />
                        <span className="text-sm">{curve}</span>
                      </div>
                    </div>
                  </section>
                  {stats.map(({ name, value }, index) => (
                    <article key={index}>
                      <div className="text-sm text-gray-400">{name}</div>
                      <div className={value === 'Success' ? 'text-green-500' : 'text-gray-900'}>
                        {value}
                      </div>
                    </article>
                  ))}
                  <article>
                    <div className="text-sm text-gray-400">Send</div>
                    <div className="flex items-center gap-x-2">
                      <span className="text-gray-900">100</span>
                      <CoinIcon name="USDT" className="h-6 w-6" />
                    </div>
                  </article>
                  <article>
                    <div className="text-sm text-gray-400">Receive</div>
                    <div className="flex items-center gap-x-2">
                      <span className="text-gray-900">100</span>
                      <CoinIcon name="ETH" className="h-6 w-6" />
                    </div>
                  </article>
                </section>
                <section className="mt-4 flex justify-end gap-x-2">
                  <button
                    {...(!isOpen && { tabIndex: -1 })}
                    className="rounded-lg bg-blue-800 px-4 py-2 text-xs text-white hover:bg-blue-900 sm:w-40 sm:text-sm"
                  >
                    View in explorer
                  </button>
                </section>
              </Fragment>
            )}
          </Accordion>
        ))}
      </section>
    </section>
  );
}
