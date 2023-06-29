import Link from 'next/link';

import Logo from '_images/logo.svg';
import OptionIcon from '_images/option.svg';

import Routes from './routes';

export default function Header() {
  return (
    <footer className="container mx-auto p-4 md:hidden">
      <nav className="mx-auto min-w-fit max-w-md rounded-xl bg-white p-4">
        <Routes />
      </nav>
    </footer>
  );
}
