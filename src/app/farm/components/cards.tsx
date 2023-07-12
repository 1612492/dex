import { Pool } from '~/common/types';
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

export default function Cards() {
  return (
    <section className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {Object.values(pools).map(({ address, name, coinX, coinY, curve }) => (
        <article key={address} className="rounded bg-white p-4">
          <header className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="mt-4 flex">
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
            <div className="text-right">
              <div className="text-sm">APR</div>
              <div className="text-xl text-green-500">300%</div>
            </div>
          </header>
          <section className="mt-4">
            {stats.map(({ name, value }, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-1 text-sm text-gray-900"
              >
                <span>{name}</span>
                <span>{value}</span>
              </div>
            ))}
          </section>

          <section className="mt-4 grid grid-cols-2 gap-2">
            <button className="col-span-2 rounded-lg bg-blue-800 py-2 text-xs text-white hover:bg-blue-900 sm:text-sm">
              Stake
            </button>
            <button className="rounded-lg bg-red-400 py-2 text-xs text-white hover:bg-red-500 sm:text-sm">
              Withdraw
            </button>
            <button className="rounded-lg bg-blue-800 py-2 text-xs text-white hover:bg-blue-900 sm:text-sm">
              Harvest
            </button>
          </section>
        </article>
      ))}
    </section>
  );
}
