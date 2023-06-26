'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import FarmIcon from '_components/icon/farm';
import HistoryIcon from '_components/icon/history';
import PoolsIcon from '_components/icon/pools';
import SwapIcon from '_components/icon/swap';
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
    <ul className="flex gap-x-6">
      {routes.map(({ name, path, Icon }, index) => {
        const isActive = path === pathname;

        return (
          <li key={index} className="self-center">
            <Link
              href={path}
              className={merge(
                'flex items-center gap-x-2',
                isActive ? 'text-blue-500' : 'text-gray-900 hover:text-blue-400'
              )}
            >
              <Icon />
              <span>{name}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
