import Link from 'next/link';

import Logo from '_images/logo.svg';
import OptionIcon from '_images/option.svg';
import { merge } from '_utils/classes';

import Address from './address';
import Balance from './balance';
import Network from './network';
import Routes from './routes';

export default function Header() {
  return (
    <header className="mx-auto flex h-16 w-full max-w-md items-center justify-between px-4 md:container">
      <nav className="flex md:gap-x-8">
        <Link href="/">
          <Logo className="h-8 w-8 text-blue-800" />
        </Link>
        <div className="hidden md:flex">
          <Routes />
        </div>
      </nav>
      <div className="flex items-center gap-x-2">
        <Network />
        <Balance />
        <Address />
        <button
          aria-label="setting"
          className="flex items-center justify-center rounded-full p-1 text-gray-900 hover:bg-white"
        >
          <OptionIcon className="h-3 w-3 md:h-5 md:w-5" />
        </button>
      </div>
    </header>
  );
}
