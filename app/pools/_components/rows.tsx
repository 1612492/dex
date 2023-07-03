import { Pool } from '_common/types';
import BaseAccordion from '_components/accordion/base';
import CoinIcon from '_components/coin-icon';
import CurveIcon from '_components/curve-icon';
import pools from '_config/pools.json';

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
        <BaseAccordion key={address}>
          {(isOpen) => (
            <section className="grid w-full grid-cols-2 gap-y-2 sm:grid-cols-[12rem_repeat(3,_1fr)] sm:gap-4">
              <header className="col-span-2 flex sm:col-span-1">
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
              </header>
              {stats.map(({ name, value }, index) => (
                <article key={index}>
                  <div className="text-sm text-gray-400">{name}</div>
                  <div className="text-gray-900">{value}</div>
                </article>
              ))}
              <section className="col-span-4 flex justify-end gap-x-2 sm:mt-4">
                <button
                  {...(!isOpen && { tabIndex: -1 })}
                  className="rounded-lg bg-red-400 px-4 py-2 text-xs text-white hover:bg-red-500 sm:w-40 sm:text-sm lg:text-base"
                >
                  Withdraw
                </button>
                <button
                  {...(!isOpen && { tabIndex: -1 })}
                  className="rounded-lg bg-blue-800 px-4 py-2 text-xs text-white hover:bg-blue-900 sm:w-40 sm:text-sm lg:text-base"
                >
                  Deposit
                </button>
              </section>
            </section>
          )}
        </BaseAccordion>
      ))}
    </section>
  );
}