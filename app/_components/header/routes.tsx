'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import FarmIcon from '_images/farm.svg';
import HistoryIcon from '_images/history.svg';
import PoolsIcon from '_images/pools.svg';
import SwapIcon from '_images/swap.svg';
import { merge } from '_utils/classes';

const routes = [
  { name: 'Swap', path: '/', Icon: SwapIcon },
  { name: 'Pools', path: '/pools', Icon: PoolsIcon },
  { name: 'Farm', path: '/farm', Icon: FarmIcon },
  { name: 'History', path: '/history', Icon: HistoryIcon },
];

export default function Routes() {
  const pathname = usePathname();

  return (
    <ul className="flex gap-x-2 md:gap-x-4 lg:gap-x-6">
      {routes.map(({ name, path, Icon }, index) => {
        const isActive = path === pathname;

        return (
          <li key={index} className="self-center">
            <Link
              href={path}
              className={merge(
                'flex items-center gap-x-2 text-xs sm:text-sm lg:text-base',
                isActive ? 'text-blue-800' : 'text-gray-900 hover:text-blue-800'
              )}
            >
              <Icon className="h-3 w-3 md:h-5 md:w-5" />
              <span>{name}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
