import Link from 'next/link';
import { Fragment } from 'react';

import { Pool } from '~/common/types';
import Accordion from '~/components/accordion';
import CoinIcon from '~/components/icon/coin-icon';
import CurveIcon from '~/components/icon/curve-icon';
import pools from '~/config/pools.json';

const stats = [
  { name: 'Total liquidity', value: '$100,000' },
  { name: 'Volume 24h', value: '$50,000' },
  { name: 'Volume 7d', value: '$10,000' },
  { name: 'Fees 7d', value: '$10,000' },
  { name: 'Fee tier', value: '0.3%' },
  { name: 'Your LP', value: '0' },
  { name: 'Pool shared', value: '0%' },
];

export default function Rows() {
  return (
    <section className="flex flex-col gap-y-4">
      {Object.values(pools).map(({ address, name, coinX, coinY, curve }) => (
        <Accordion key={address}>
          {(isOpen) => (
            <Fragment>
              <section className="grid w-full grid-cols-2 gap-y-2 sm:grid-cols-3 sm:gap-4 md:grid-cols-4">
                <section className="col-span-2 flex sm:col-span-1">
                  <div className="flex">
                    <CoinIcon name={coinX} className="h-8 w-8" />
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
                    <div className="text-gray-900">{value}</div>
                  </article>
                ))}
              </section>
              <section className="mt-4 flex gap-x-2 sm:justify-end">
                <Link
                  {...(!isOpen && { tabIndex: -1 })}
                  href={`/remove-liquidity/${address}`}
                  className="w-20 rounded-lg bg-red-400 py-2 text-center text-sm text-white hover:bg-red-500 sm:w-40"
                >
                  Withdraw
                </Link>
                <Link
                  {...(!isOpen && { tabIndex: -1 })}
                  href={`/add-liquidity/${address}`}
                  className="w-20 rounded-lg bg-blue-800 py-2 text-center text-sm text-white hover:bg-blue-900 sm:w-40"
                >
                  Deposit
                </Link>
              </section>
            </Fragment>
          )}
        </Accordion>
      ))}
    </section>
  );
}
