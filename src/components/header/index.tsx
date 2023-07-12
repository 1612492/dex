import Link from 'next/link';

import Routes from '~/components/routes';
import Logo from '~/images/logo.svg';
import OptionIcon from '~/images/option.svg';
import { merge } from '~/utils/classes';

import Address from './address';
import Balance from './balance';
import Network from './network';

export default function Header() {
  return (
    <header className="mx-auto flex h-16 w-full max-w-md items-center justify-between px-4 md:container">
      <nav className="flex md:gap-x-8">
        <Link href="/" className="p-1">
          <Logo className="h-8 w-8 text-blue-800" />
        </Link>

        <Routes className="hidden md:flex" />
      </nav>
      <div className="flex items-center gap-x-2">
        <Network />
        <Balance />
        <Address />
        <button
          aria-label="setting"
          className="flex items-center justify-center rounded-full p-2 text-gray-900 hover:bg-white"
        >
          <OptionIcon className="h-4 w-4" />
        </button>
      </div>
    </header>
  );
}
