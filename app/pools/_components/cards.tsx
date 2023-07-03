import { Pool } from '_common/types';
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

export default function Cards() {
  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Object.values(pools).map(({ address, name, coinX, coinY, curve }) => (
        <article key={address} className="rounded bg-white p-4">
          <header className="flex">
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
          <section className="flex gap-x-2 mt-4">
            <button className="flex-1 rounded-lg bg-red-400 py-2 text-xs text-white hover:bg-red-500 sm:text-sm lg:text-base">
              Withdraw
            </button>
            <button className="flex-1 rounded-lg bg-blue-800 py-2 text-xs text-white hover:bg-blue-900 sm:text-sm lg:text-base">
              Deposit
            </button>
          </section>
        </article>
      ))}
    </section>
  );
}
